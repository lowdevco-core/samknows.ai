import { useEffect } from "react";
import initPage from "../lib/blog.js";

// Renders one guide's static HTML (src/pages/*.html) and wires up its contents, progress bar and copy buttons.
export default function Guide({ html, title }) {
  useEffect(() => {
    document.title = `${title} | samknows.ai`;
    if (!window.location.hash) window.scrollTo(0, 0);
    initPage();
  }, [html, title]);

  // Our own static markup, so injecting it raw is safe.
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}
