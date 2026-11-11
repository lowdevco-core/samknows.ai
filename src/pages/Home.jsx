import { useEffect } from "react";
import { Link } from "react-router-dom";
import { GUIDES } from "../assets/data/blog.js";

export default function Home() {
  useEffect(() => {
    document.title = "samknows.ai";
  }, []);

  return (
    <main>
      <header className="gz-hero">
        <div className="gz-hero__inner">
          <p className="gz-kicker">
            AI <em>★</em> Field notes
          </p>
          <h1 className="gz-title">
            Free Claude setups, explained step by step.
          </h1>
          <p className="gz-dek">
            Guides to the AI tools I actually use, with every command you need
            to copy.
          </p>
        </div>
      </header>

      <section className="gz-home">
        <h2 className="gz-home__h">Guides</h2>
        <div className="gz-cards">
          {GUIDES.map((g) => (
            <Link key={g.path} className="gz-card" to={g.path}>
              <span className="gz-card__tag">{g.tag}</span>
              <h3>{g.title}</h3>
              <p>{g.dek}</p>
              <span className="gz-card__meta">{g.meta}</span>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
