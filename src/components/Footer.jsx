export const INSTAGRAM = "https://www.instagram.com/samknows.ai/";

export default function Footer() {
  return (
    <footer className="gz-foot">
      <a className="gz-hero__ava gz-foot__brand" href={INSTAGRAM} target="_blank" rel="noopener" aria-label="samknows.ai on Instagram">
        <img src="/images/samknows.webp" alt="" width="72" height="72" />
        <span className="gz-brand">samknows.ai</span>
      </a>
      <p>Follow along for more free Claude setups.</p>
      <div className="gz-foot__links">
        <a className="gz-btn gz-btn--primary" href={INSTAGRAM} target="_blank" rel="noopener">Instagram · @samknows.ai</a>
      </div>
    </footer>
  );
}
