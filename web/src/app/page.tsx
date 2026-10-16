const modes = [
  {
    title: "Intraday",
    text: "Opening range breakouts, VWAP reclaims and volume spikes from live data.",
    phase: "Phase 6",
  },
  {
    title: "Swing",
    text: "Trend, momentum and relative-strength setups scored from daily candles.",
    phase: "Phase 4",
  },
  {
    title: "Long term",
    text: "Quality and valuation screens built on fundamentals.",
    phase: "Phase 4",
  },
];

export default function Home() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-16">
      <p className="text-sm font-medium tracking-wide" style={{ color: "var(--accent)" }}>
        NSE - INDIA
      </p>
      <h1 className="mt-3 text-4xl font-bold sm:text-5xl">Stock Signals</h1>
      <p className="mt-4 max-w-2xl text-lg" style={{ color: "var(--muted)" }}>
        A transparent stock scanner that scores setups using technicals, fundamentals and options
        data, and backtests every signal so you can see its historical win rate.
      </p>

      <section className="mt-12 grid gap-4 sm:grid-cols-3">
        {modes.map((m) => (
          <div
            key={m.title}
            className="rounded-xl p-5"
            style={{ background: "var(--panel)", border: "1px solid var(--border)" }}
          >
            <h2 className="text-xl font-semibold">{m.title}</h2>
            <p className="mt-2 text-sm" style={{ color: "var(--muted)" }}>
              {m.text}
            </p>
            <p className="mt-4 text-xs uppercase tracking-wide" style={{ color: "var(--muted)" }}>
              Coming in {m.phase}
            </p>
          </div>
        ))}
      </section>

      <p className="mt-16 text-xs leading-relaxed" style={{ color: "var(--muted)" }}>
        Disclaimer: for education and research only. This is not investment advice and does not
        place trades. Backtests and past performance do not guarantee future results.
      </p>
    </main>
  );
}
