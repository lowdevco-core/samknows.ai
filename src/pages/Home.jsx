import { useEffect } from "react";
import { Link } from "react-router-dom";

const GUIDES = [
  {
    to: "/markitdown-guide",
    tag: "AI",
    title: "MarkItDown Guide: Save Claude Tokens by Turning Files into Markdown (2026)",
    dek: "Turn PDFs, Word, PowerPoint and Excel files into lean Markdown with Microsoft's free MarkItDown, so Claude reads less and your usage goes further.",
    meta: "November 10, 2026 · 7 min read",
  },
  {
    to: "/claude-day-trader-skill-setup-guide",
    tag: "AI",
    title: "Claude Day Trader Skill Setup Guide: Install All 11 Skills Free (2026)",
    dek: "A step-by-step setup guide for the free Day Trader skill pack: 11 Claude skills including the Time Machine, installed in about 5 minutes.",
    meta: "October 26, 2026 · 10 min read",
  },
];

export default function Home() {
  useEffect(() => {
    document.title = "samknows.ai";
    window.scrollTo(0, 0);
  }, []);

  return (
    <main>
      <header className="gz-hero">
        <div className="gz-hero__inner">
          <p className="gz-kicker">AI <em>★</em> Field notes</p>
          <h1 className="gz-title">Free Claude setups, explained step by step.</h1>
          <p className="gz-dek">Guides to the AI tools I actually use, with every command you need to copy.</p>
        </div>
      </header>

      <section className="gz-home">
        <h2 className="gz-home__h">Guides</h2>
        <div className="gz-cards">
          {GUIDES.map((g) => (
            <Link key={g.to} className="gz-card" to={g.to}>
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
