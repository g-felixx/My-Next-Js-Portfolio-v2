/** Linha d'água: faixa de mar pixel antes do contato, onde o golfinho descansa. */
export default function SeaDivider() {
  return (
    <div data-mascot-rest aria-hidden="true" className="pixel-scene relative h-28 overflow-hidden sm:h-32">
      <div className="sea-crest absolute inset-x-0 bottom-7" />
      <div className="absolute inset-x-0 bottom-0 h-7" style={{ background: "var(--sea-1)" }} />
    </div>
  );
}
