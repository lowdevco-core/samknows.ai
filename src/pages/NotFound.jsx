import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  useEffect(() => {
    document.title = "Page not found | samknows.ai";
  }, []);

  return (
    <main>
      <header className="gz-hero">
        <div className="gz-hero__inner">
          <p className="gz-kicker">404</p>
          <h1 className="gz-title">This page doesn't exist.</h1>
          <p className="gz-dek">
            The link may be old or mistyped. <Link to="/">See all guides</Link>.
          </p>
        </div>
      </header>
    </main>
  );
}
