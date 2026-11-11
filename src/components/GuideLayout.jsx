import { useEffect, useRef, useState } from "react";
import { INSTAGRAM } from "./Footer.jsx";

// A code block with a copy button. Pass the code as a string child.
export function Code({ lang = "Snippet", children }) {
  const [label, setLabel] = useState("Copy");

  const copy = () =>
    navigator.clipboard
      .writeText(children)
      .then(
        () => setLabel("Copied ★"),
        () => setLabel("Press Ctrl+C"),
      )
      .finally(() => setTimeout(() => setLabel("Copy"), 1600));

  return (
    <div className="gz-code">
      <div className="gz-code__bar">
        <span className="gz-code__name">{lang}</span>
        <button
          type="button"
          className="gz-copy"
          onClick={copy}
          aria-label="Copy code to clipboard"
        >
          {label}
        </button>
      </div>
      <pre>{children}</pre>
    </div>
  );
}

function Toc({ items, active, label }) {
  let n = 0;
  return (
    <nav className="gz-toc" aria-label={label}>
      <ol>
        {items.map(({ id, title, sub }) => (
          <li key={id} className={sub ? "gz-toc--sub" : undefined}>
            <a href={`#${id}`} aria-current={active === id ? "true" : "false"}>
              <span className="n">
                {sub ? "★" : String(++n).padStart(2, "0")}
              </span>
              <span className="t">{title}</span>
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}

// Shared shell for every guide: hero, contents (sidebar + mobile drawer), reading progress.
// toc: [{ id, title, sub? }] — ids must match heading ids in the article.
export default function GuideLayout({
  title,
  dek,
  date,
  iso,
  read,
  toc,
  children,
}) {
  const articleRef = useRef(null);
  const inkRef = useRef(null);
  const [active, setActive] = useState(toc[0]?.id);

  useEffect(() => {
    document.title = `${title} | samknows.ai`;
  }, [title]);

  useEffect(() => {
    const article = articleRef.current;
    let frame = 0;

    const update = () => {
      frame = 0;
      const start = article.getBoundingClientRect().top + window.scrollY;
      const span = article.offsetHeight - window.innerHeight;
      const pct =
        span <= 0
          ? window.scrollY > start
            ? 100
            : 0
          : ((window.scrollY - start) / span) * 100;
      inkRef.current.style.width = `${Math.min(100, Math.max(0, pct))}%`;
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    update();

    // Highlight the heading in the upper third of the viewport, where the eye is while reading.
    const visible = new Map();
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting)
            visible.set(e.target.id, e.boundingClientRect.top);
          else visible.delete(e.target.id);
        }
        if (visible.size)
          setActive([...visible].sort((a, b) => a[1] - b[1])[0][0]);
      },
      { rootMargin: "0px 0px -70% 0px" },
    );
    for (const { id } of toc) {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    }

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(frame);
      io.disconnect();
    };
  }, [toc]);

  return (
    <>
      <div className="gz-progress" aria-hidden="true">
        <div className="gz-progress__ink" ref={inkRef} />
      </div>
      <main id="content" className="gz-single">
        <article className="gz-post">
          <header className="gz-hero">
            <div className="gz-hero__inner">
              <p className="gz-kicker">
                AI <em>★</em> Field notes
              </p>
              <h1 className="gz-title">{title}</h1>
              <p className="gz-dek">{dek}</p>
              <div className="gz-meta">
                <span>
                  By{" "}
                  <a href={INSTAGRAM} target="_blank" rel="noopener">
                    <b>samknows.ai</b>
                  </a>
                </span>
                <time dateTime={iso}>{date}</time>
                <span>{read}</span>
              </div>
            </div>
          </header>

          <div className="gz-spread">
            <aside className="gz-rail">
              <div className="gz-toc-d">
                <div className="gz-toc__head">
                  Contents <b>★</b>
                </div>
                <Toc items={toc} active={active} label="Table of contents" />
              </div>
            </aside>

            <div className="gz-column">
              <details
                className="gz-toc-m"
                onClick={(e) => {
                  // Close the mobile drawer once a destination is picked.
                  if (e.target.closest("a")) e.currentTarget.open = false;
                }}
              >
                <summary>Contents</summary>
                <div>
                  <Toc
                    items={toc}
                    active={active}
                    label="Table of contents, mobile"
                  />
                </div>
              </details>
              <div className="post-content gz-article" ref={articleRef}>
                {children}
              </div>
            </div>
          </div>
        </article>
      </main>
    </>
  );
}
