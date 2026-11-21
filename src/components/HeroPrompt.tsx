"use client";
import { useCallback, useEffect, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";
import { ArrowUp, FileText, RotateCcw, Sparkles } from "lucide-react";
import { PixelSprite } from "@/components/pixel/PixelSprite";
import { useLanguage } from "@/lib/i18n/context";
import {
  MAX_MESSAGE_LENGTH,
  PROMPT_FOCUS_EVENT,
  streamTwinReply,
} from "@/lib/ai-twin-client";

interface ChatMessage {
  id: number;
  role: "user" | "assistant";
  text: string;
  source?: string;
  pending?: boolean;
  failed?: boolean;
}

/* ───────────────────────── animation hooks ───────────────────────── */

/** Types a phrase, holds, erases it, then moves to the next one (loops). */
function useTypewriter(phrases: string[], enabled: boolean) {
  const [text, setText] = useState("");

  useEffect(() => {
    if (!enabled || phrases.length === 0) return;

    let cancelled = false;
    let timer: ReturnType<typeof setTimeout>;
    let phraseIndex = 0;
    let chars = 0;
    let deleting = false;

    const tick = () => {
      if (cancelled) return;
      const current = phrases[phraseIndex % phrases.length];

      if (!deleting) {
        chars += 1;
        setText(current.slice(0, chars));
        if (chars >= current.length) {
          deleting = true;
          timer = setTimeout(tick, 1900);
          return;
        }
        timer = setTimeout(tick, 40 + Math.random() * 40);
      } else {
        chars -= 1;
        setText(current.slice(0, chars));
        if (chars <= 0) {
          deleting = false;
          phraseIndex += 1;
          timer = setTimeout(tick, 350);
          return;
        }
        timer = setTimeout(tick, 16);
      }
    };

    timer = setTimeout(tick, 600);
    return () => {
      cancelled = true;
      clearTimeout(timer);
    };
  }, [phrases, enabled]);

  return enabled ? text : "";
}

type DemoStage = "idle" | "question" | "thinking" | "answer" | "done";

interface DemoState {
  stage: DemoStage;
  question: string;
  answer: string;
  source: string;
}

const DEMO_IDLE: DemoState = { stage: "idle", question: "", answer: "", source: "" };

/** Plays sample conversations (question typed → thinking → answer streamed). */
function useDemoLoop(
  scripts: { question: string; answer: string; source: string }[],
  active: boolean,
  reducedMotion: boolean,
): DemoState {
  const [state, setState] = useState<DemoState>(DEMO_IDLE);

  useEffect(() => {
    if (!active || reducedMotion || scripts.length === 0) return;

    let cancelled = false;
    const wait = (ms: number) => new Promise<void>((resolve) => setTimeout(resolve, ms));

    (async () => {
      let index = 0;
      await wait(700);

      while (!cancelled) {
        const script = scripts[index % scripts.length];
        setState({ stage: "question", question: "", answer: "", source: script.source });

        for (let c = 1; c <= script.question.length; c++) {
          await wait(32);
          if (cancelled) return;
          setState((prev) => ({ ...prev, question: script.question.slice(0, c) }));
        }

        await wait(350);
        if (cancelled) return;
        setState((prev) => ({ ...prev, stage: "thinking" }));

        await wait(1300);
        if (cancelled) return;
        setState((prev) => ({ ...prev, stage: "answer" }));

        for (let c = 2; c < script.answer.length + 2; c += 2) {
          await wait(16);
          if (cancelled) return;
          setState((prev) => ({ ...prev, answer: script.answer.slice(0, c) }));
        }

        setState((prev) => ({ ...prev, stage: "done", answer: script.answer }));
        await wait(4500);
        index += 1;
      }
    })();

    return () => {
      cancelled = true;
    };
  }, [scripts, active, reducedMotion]);

  if (reducedMotion && scripts.length > 0) {
    const first = scripts[0];
    return { stage: "done", question: first.question, answer: first.answer, source: first.source };
  }

  return state;
}

/* ───────────────────────── small presentational bits ───────────────────────── */

const Caret = () => (
  <span
    aria-hidden="true"
    className="ml-0.5 inline-block h-[1.05em] w-[2px] translate-y-[0.15em] bg-primary animate-caret motion-reduce:animate-none"
  />
);

const ThinkingLine = ({ lines }: { lines: string[] }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (lines.length < 2) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % lines.length), 1100);
    return () => clearInterval(id);
  }, [lines]);

  return (
    <span className="inline-flex items-center gap-2 font-mono text-xs text-muted-foreground">
      <span className="flex gap-1" aria-hidden="true">
        {[0, 1, 2].map((i) => (
          <span
            key={i}
            className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse motion-reduce:animate-none"
            style={{ animationDelay: `${i * 160}ms` }}
          />
        ))}
      </span>
      {lines[index % lines.length]}
    </span>
  );
};

const SourceChip = ({ label, source }: { label: string; source: string }) => (
  <div className="mt-2">
    <span className="inline-flex items-center gap-1.5 rounded-md border border-border bg-secondary px-2 py-0.5 font-mono text-[11px] text-muted-foreground animate-pop-in motion-reduce:animate-none">
      <FileText className="h-3 w-3 text-primary" aria-hidden="true" />
      {label}: {source}
    </span>
  </div>
);

const UserBubble = ({ children }: { children: React.ReactNode }) => (
  <div className="flex justify-end animate-pop-in motion-reduce:animate-none">
    <p className="max-w-[85%] rounded-xl rounded-br-sm border border-primary/25 bg-primary/10 px-3.5 py-2 text-sm leading-relaxed text-foreground">
      {children}
    </p>
  </div>
);

const AssistantBubble = ({
  children,
  author,
  failed,
}: {
  children: React.ReactNode;
  author: string;
  failed?: boolean;
}) => (
  <div className="flex items-start gap-2.5 animate-pop-in motion-reduce:animate-none">
    <span className="mt-0.5 shrink-0 rounded-md border border-border bg-secondary p-0.5" title={author}>
      <PixelSprite frame="idle" crop="head" className="block h-[45px] w-auto" />
    </span>
    <div className="min-w-0 max-w-[88%]">
      <div
        className={`rounded-xl rounded-tl-sm border px-3.5 py-2 text-sm leading-relaxed ${
          failed ? "border-destructive/40 bg-destructive/10 text-foreground" : "border-border bg-background text-foreground"
        }`}
      >
        {children}
      </div>
    </div>
  </div>
);

/* ───────────────────────── main component ───────────────────────── */

const HeroPrompt = () => {
  const { t, locale } = useLanguage();
  const p = t.prompt;
  const reducedMotion = useReducedMotion() ?? false;

  const [value, setValue] = useState("");
  const [focused, setFocused] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [busy, setBusy] = useState(false);

  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const abortRef = useRef<AbortController | null>(null);
  const nextId = useRef(1);

  const hasChat = messages.length > 0;
  const idleInput = !hasChat && !focused && value === "";

  const typed = useTypewriter(p.placeholders, idleInput && !reducedMotion);
  const demo = useDemoLoop(p.demo, idleInput, reducedMotion);

  // Let other parts of the page (floating mascot) focus the input.
  useEffect(() => {
    const focusInput = () => textareaRef.current?.focus({ preventScroll: true });
    window.addEventListener(PROMPT_FOCUS_EVENT, focusInput);
    return () => window.removeEventListener(PROMPT_FOCUS_EVENT, focusInput);
  }, []);

  // Cancel any in-flight request on unmount.
  useEffect(() => () => abortRef.current?.abort(), []);

  // Keep the conversation pinned to the latest message.
  useEffect(() => {
    const el = scrollRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [messages]);

  const resizeInput = useCallback(() => {
    const el = textareaRef.current;
    if (!el) return;
    el.style.height = "auto";
    el.style.height = `${Math.min(el.scrollHeight, 120)}px`;
  }, []);

  const send = useCallback(
    async (raw: string) => {
      const text = raw.trim().slice(0, MAX_MESSAGE_LENGTH);
      if (!text || busy) return;

      const history = messages
        .filter((m) => !m.failed && !m.pending)
        .map(({ role, text: body }) => ({ role, text: body }));
      const userId = nextId.current++;
      const replyId = nextId.current++;
      const controller = new AbortController();
      abortRef.current = controller;

      setMessages((prev) => [
        ...prev,
        { id: userId, role: "user", text },
        { id: replyId, role: "assistant", text: "", pending: true },
      ]);
      setValue("");
      requestAnimationFrame(resizeInput);
      setBusy(true);

      try {
        for await (const chunk of streamTwinReply({ message: text, locale, history, signal: controller.signal })) {
          setMessages((prev) =>
            prev.map((m) => {
              if (m.id !== replyId) return m;
              return chunk.type === "text" ? { ...m, text: m.text + chunk.text } : { ...m, source: chunk.label };
            }),
          );
        }
        setMessages((prev) => prev.map((m) => (m.id === replyId ? { ...m, pending: false } : m)));
      } catch (error) {
        if (error instanceof DOMException && error.name === "AbortError") return;
        setMessages((prev) =>
          prev.map((m) => (m.id === replyId ? { ...m, pending: false, failed: true, text: p.error } : m)),
        );
      } finally {
        if (abortRef.current === controller) {
          abortRef.current = null;
          setBusy(false);
        }
      }
    },
    [busy, locale, messages, p.error, resizeInput],
  );

  const resetChat = () => {
    abortRef.current?.abort();
    abortRef.current = null;
    setMessages([]);
    setBusy(false);
    textareaRef.current?.focus({ preventScroll: true });
  };

  const onKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === "Enter" && !event.shiftKey && !event.nativeEvent.isComposing) {
      event.preventDefault();
      void send(value);
    }
  };

  const demoVisible = !hasChat && demo.stage !== "idle";
  const canSend = value.trim().length > 0 && !busy;

  return (
    <div id="ask" className="mx-auto w-full max-w-3xl text-left">
      <div className="overflow-hidden rounded-xl border border-border bg-card shadow-[0_1px_0_hsl(var(--border)),0_18px_40px_-18px_hsl(var(--foreground)/0.25)] transition-[border-color,box-shadow] duration-300 ease-energetic focus-within:border-primary/60 focus-within:ring-4 focus-within:ring-primary/15">
        {/* header */}
        <div className="flex items-center justify-between gap-3 border-b border-border px-4 py-2.5">
          <div className="flex items-center gap-2 text-sm font-semibold">
            <Sparkles className="h-4 w-4 text-primary" aria-hidden="true" />
            {p.title}
          </div>
          <div className="flex items-center gap-2">
            {hasChat && (
              <button
                type="button"
                onClick={resetChat}
                className="inline-flex items-center gap-1.5 rounded-md px-2 py-1 font-mono text-[11px] text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
              >
                <RotateCcw className="h-3 w-3" aria-hidden="true" />
                {p.newChat}
              </button>
            )}
            <span className="rounded-full border border-primary/30 bg-primary/10 px-2 py-0.5 font-mono text-[11px] font-bold text-primary">
              {p.badge}
            </span>
          </div>
        </div>

        {/* conversation */}
        <div
          ref={scrollRef}
          data-lenis-prevent
          role="log"
          aria-live="polite"
          aria-label={p.title}
          className="flex min-h-[13.5rem] max-h-[22rem] flex-col gap-3 overflow-y-auto px-4 py-4"
        >
          {hasChat &&
            messages.map((m) =>
              m.role === "user" ? (
                <UserBubble key={m.id}>{m.text}</UserBubble>
              ) : (
                <AssistantBubble key={m.id} author={p.assistant} failed={m.failed}>
                  {m.pending && m.text === "" ? <ThinkingLine lines={p.thinking} /> : m.text}
                  {m.source && <SourceChip label={p.sourceLabel} source={m.source} />}
                </AssistantBubble>
              ),
            )}

          {/* auto-playing demo (decorative) */}
          {demoVisible && (
            <div aria-hidden="true" className="flex flex-col gap-3">
              {demo.question && (
                <UserBubble>
                  {demo.question}
                  {demo.stage === "question" && <Caret />}
                </UserBubble>
              )}
              {(demo.stage === "thinking" || demo.stage === "answer" || demo.stage === "done") && (
                <AssistantBubble author={p.assistant}>
                  {demo.stage === "thinking" ? (
                    <ThinkingLine lines={p.thinking} />
                  ) : (
                    <>
                      {demo.answer}
                      {demo.stage === "answer" && <Caret />}
                    </>
                  )}
                  {demo.stage === "done" && <SourceChip label={p.sourceLabel} source={demo.source} />}
                </AssistantBubble>
              )}
            </div>
          )}
        </div>

        {/* input */}
        <form
          onSubmit={(event) => {
            event.preventDefault();
            void send(value);
          }}
          className="border-t border-border bg-background/60 p-3"
        >
          <div className="flex items-end gap-2">
            <div className="relative min-w-0 flex-1">
              <textarea
                ref={textareaRef}
                value={value}
                rows={1}
                maxLength={MAX_MESSAGE_LENGTH}
                aria-label={p.inputLabel}
                placeholder={focused || hasChat ? p.inputPlaceholder : ""}
                onChange={(event) => {
                  setValue(event.target.value);
                  resizeInput();
                }}
                onKeyDown={onKeyDown}
                onFocus={() => setFocused(true)}
                onBlur={() => setFocused(false)}
                className="block max-h-[120px] min-h-[44px] w-full resize-none rounded-lg border border-border bg-background px-3 py-[11px] font-mono text-sm leading-[1.4] text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary"
              />
              {/* animated placeholder */}
              {idleInput && (
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 flex items-center overflow-hidden px-3 font-mono text-sm text-muted-foreground"
                >
                  <span className="truncate">{reducedMotion ? p.placeholders[0] : typed}</span>
                  {!reducedMotion && <Caret />}
                </div>
              )}
            </div>
            <button
              type="submit"
              disabled={!canSend}
              aria-label={p.send}
              className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary text-primary-foreground transition-all duration-200 ease-energetic hover:brightness-110 active:scale-95 disabled:cursor-not-allowed disabled:bg-secondary disabled:text-muted-foreground"
            >
              <ArrowUp className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
          <p className="mt-2 px-0.5 font-mono text-[11px] text-muted-foreground">{p.hint}</p>
        </form>
      </div>

      {/* suggestion chips */}
      {!hasChat && (
        <div className="mt-4 flex flex-wrap justify-center gap-2">
          {p.suggestions.map((suggestion, index) => (
            <button
              key={suggestion}
              type="button"
              onClick={() => void send(suggestion)}
              style={{ animationDelay: `${300 + index * 90}ms` }}
              className="animate-rise-in rounded-full border border-border bg-card px-3.5 py-1.5 text-xs text-muted-foreground opacity-0 [animation-fill-mode:forwards] transition-colors duration-200 hover:border-primary/60 hover:text-foreground motion-reduce:animate-none motion-reduce:opacity-100"
            >
              {suggestion}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default HeroPrompt;
