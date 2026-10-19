export default function Home() {
  return (
    <main className="page-shell">
      <section className="hero">
        <p className="eyebrow">Deployment ready</p>
        <h1>Turbo Credit</h1>
        <p className="subtitle">
          This Next.js application is configured for a Vercel production deployment with the
          required runtime and environment checks in place.
        </p>

        <ul className="checklist">
          <li>Next.js production build configured for Vercel</li>
          <li>Project-level environment variables documented</li>
          <li>Deployment scripts and database safety checks included</li>
        </ul>
      </section>
    </main>
  );
}
