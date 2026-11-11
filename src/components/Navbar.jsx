import { NavLink } from "react-router-dom";
import { INSTAGRAM } from "./Footer.jsx";

export default function Navbar() {
  return (
    <nav className="gz-navbar" aria-label="Site">
      <div className="gz-navbar__inner">
        <a
          className="gz-hero__ava"
          href={INSTAGRAM}
          target="_blank"
          rel="noopener"
          aria-label="samknows.ai on Instagram"
        >
          <img src="/images/samknows.webp" alt="" width="120" height="120" />
          <span className="gz-brand">samknows.ai</span>
        </a>
        <NavLink className="gz-navbar__link" to="/" end>
          All guides
        </NavLink>
      </div>
    </nav>
  );
}
