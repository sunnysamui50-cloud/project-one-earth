import MindMap from "../components/MindMap";

export default function Home() {
  return (
    <main>
      <header className="hero">
        <div className="eyebrow">PROJECT ONE EARTH</div>
        <h1>A living manifesto for human freedom and planetary stewardship.</h1>
        <p className="lede">
          Nine papers form the canonical foundation. The public commons around them is where
          questions, criticism, proposals and practical thinking can develop without altering
          the original record.
        </p>
        <nav className="actions" aria-label="Primary">
          <a href="#explore">Explore</a>
          <a href="#read">Read</a>
          <a href="#discuss">Discuss</a>
          <a href="#build">Build</a>
        </nav>
      </header>

      <section id="explore" className="section">
        <div className="section-heading">
          <div>
            <span className="kicker">01 / EXPLORE</span>
            <h2>The One Earth map</h2>
          </div>
          <p>Start with the whole system, then open the areas you want to understand.</p>
        </div>
        <MindMap />
      </section>

      <section id="read" className="section split">
        <div>
          <span className="kicker">02 / READ</span>
          <h2>The canonical foundation</h2>
        </div>
        <p>
          The nine papers are preserved as the intellectual foundation of the project. Future
          versions and commentary must never silently rewrite that history.
        </p>
      </section>

      <section id="discuss" className="section split">
        <div>
          <span className="kicker">03 / DISCUSS</span>
          <h2>Challenge the ideas</h2>
        </div>
        <p>
          Public discussion can question assumptions, identify weaknesses, develop alternatives
          and connect people around unresolved questions.
        </p>
      </section>

      <section id="build" className="section split">
        <div>
          <span className="kicker">04 / BUILD</span>
          <h2>Turn questions into working groups</h2>
        </div>
        <p>
          People can propose working groups around the papers and the emerging knowledge map.
          Founder approval is the initial gate; the governance model can evolve as participation
          grows.
        </p>
      </section>

      <footer className="footer">
        <strong>Project One Earth</strong>
        <span>Canonical knowledge stays traceable. Community thinking stays visible.</span>
      </footer>
    </main>
  );
}
