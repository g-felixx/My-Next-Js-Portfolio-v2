import type { Locale } from "@/lib/i18n/types";
import { translations } from "@/lib/i18n/translations";

/**
 * Front-end seam for the résumé chat (RAG).
 *
 * The UI only talks to `streamTwinReply`. Right now it returns a placeholder
 * reply so the interface can be built and tested without a backend.
 *
 * TO CONNECT THE REAL RAG: replace the body of `streamTwinReply` with a
 * streaming `fetch("/api/chat", …)` and yield `{ type: "text" }` chunks as
 * they arrive (and `{ type: "source" }` for each retrieved résumé section).
 * Nothing else in the UI needs to change.
 */

export interface TwinMessage {
  role: "user" | "assistant";
  text: string;
}

export interface TwinRequest {
  message: string;
  locale: Locale;
  /** Previous turns, oldest first (does not include `message`). */
  history: TwinMessage[];
  signal?: AbortSignal;
}

export type TwinChunk =
  | { type: "text"; text: string }
  | { type: "source"; label: string };

/** Fired on `window` to focus the prompt input (e.g. from the floating mascot). */
export const PROMPT_FOCUS_EVENT = "twin:focus-prompt";

export const MAX_MESSAGE_LENGTH = 500;

function sleep(ms: number, signal?: AbortSignal) {
  return new Promise<void>((resolve, reject) => {
    if (signal?.aborted) return reject(new DOMException("Aborted", "AbortError"));
    const timer = setTimeout(resolve, ms);
    signal?.addEventListener(
      "abort",
      () => {
        clearTimeout(timer);
        reject(new DOMException("Aborted", "AbortError"));
      },
      { once: true },
    );
  });
}

export async function* streamTwinReply(request: TwinRequest): AsyncGenerator<TwinChunk> {
  const { mock } = translations[request.locale].prompt;

  // Simulates retrieval + generation latency, then streams word by word.
  await sleep(1400, request.signal);

  const words = mock.answer.split(" ");
  for (let i = 0; i < words.length; i++) {
    yield { type: "text", text: i === 0 ? words[i] : ` ${words[i]}` };
    await sleep(28, request.signal);
  }

  yield { type: "source", label: mock.source };
}
