import GuideLayout, { Code } from "../components/GuideLayout.jsx";

const toc = [
  { id: "what", title: "What is the Claude SEO skill?" },
  { id: "before", title: "What do you need before you start?" },
  { id: "install", title: "How do you install it?" },
  { id: "first-audit", title: "How do you run your first audit?" },
  { id: "commands", title: "What are all the /seo commands?" },
  { id: "features", title: "What does it check?" },
  { id: "which", title: "Which command should you start with?" },
  { id: "limits", title: "What can the skill not do?" },
  { id: "faq", title: "FAQ" },
  {
    id: "is-claude-seo-free",
    title: "Is the Claude SEO skill free?",
    sub: true,
  },
  { id: "what-is-geo", title: "What is GEO?", sub: true },
  {
    id: "can-i-audit-a-competitor",
    title: "Can I audit a competitor's site?",
    sub: true,
  },
  {
    id: "will-it-fix-my-site",
    title: "Will it fix my site for me?",
    sub: true,
  },
];

export default function ClaudeSeoGuide() {
  return (
    <GuideLayout
      title="Claude SEO Skill: Run a Full Website Audit Inside Claude (2026)"
      dek="A free Claude Code skill for SEO audits, technical SEO and AI search optimisation. One /seo command gives you a prioritised roadmap of what to fix."
      date="November 9, 2026"
      iso="2026-11-09"
      read="5 min read"
      toc={toc}
    >
      <p>
        <strong>
          Claude SEO is a free Claude Code skill that audits a website and tells
          you what to fix first.
        </strong>{" "}
        Type <code>/seo audit</code> and a URL, and it checks technical SEO,
        content quality, structured data and AI search signals, then gives you a
        prioritised roadmap inside Claude.
      </p>
      <div className="gz-box">
        <p>
          <strong>Key takeaways</strong>
        </p>
        <ul>
          <li>
            22 <code>/seo</code> commands, from full audits to schema, local SEO
            and GEO for AI search.
          </li>
          <li>
            Start with <code>/seo audit https://yoursite.com</code> for a
            prioritised roadmap.
          </li>
          <li>
            Covers technical SEO, content and E-E-A-T, structured data, AI
            search, and local and e-commerce SEO.
          </li>
          <li>It analyses and plans. You, or Claude Code, make the changes.</li>
        </ul>
      </div>
      <h2 id="what">
        What is the Claude SEO skill?
        <a href="#what" className="gz-anchor" aria-hidden="true" tabIndex={-1}>
          ★
        </a>
      </h2>
      <p>
        It's a free Claude Code skill I built for website analysis: full audits,
        technical SEO, content quality and AI search optimisation. Give it a URL
        and it checks the site's search signals, then hands you a prioritised
        roadmap of what to fix, right inside Claude.
      </p>
      <p>
        Everything runs through one command, <code>/seo</code>, followed by what
        you want and the URL. The source is at{" "}
        <a
          href="https://github.com/lowdevco/claude-seo"
          target="_blank"
          rel="noopener"
        >
          github.com/lowdevco/claude-seo
        </a>
        .
      </p>
      <h2 id="before">
        What do you need before you start?
        <a
          href="#before"
          className="gz-anchor"
          aria-hidden="true"
          tabIndex={-1}
        >
          ★
        </a>
      </h2>
      <p>
        You need Claude Code, the desktop app or the terminal version, and the
        URL of a site you want to check. It can be your own site, a client's or
        a competitor's.
      </p>
      <h2 id="install">
        How do you install it?
        <a
          href="#install"
          className="gz-anchor"
          aria-hidden="true"
          tabIndex={-1}
        >
          ★
        </a>
      </h2>
      <p>
        The easiest way is to let Claude do it. Paste this into Claude Code:
      </p>
      <Code lang="Snippet">{`Install the skill from github.com/lowdevco/claude-seo.git into ~/.claude/skills/seo`}</Code>
      <p>
        Prefer the terminal? Clone it into your skills folder yourself. On Mac
        or Linux:
      </p>
      <Code lang="Bash">{`git clone https://github.com/lowdevco/claude-seo.git ~/.claude/skills/seo`}</Code>
      <p>On Windows (PowerShell):</p>
      <Code lang="PowerShell">{`git clone https://github.com/lowdevco/claude-seo.git $HOME\\.claude\\skills\\seo`}</Code>
      <p>
        Restart Claude Code when it finishes, then type <code>/seo</code> to
        check it's there.
      </p>
      <h2 id="first-audit">
        How do you run your first audit?
        <a
          href="#first-audit"
          className="gz-anchor"
          aria-hidden="true"
          tabIndex={-1}
        >
          ★
        </a>
      </h2>
      <p>One command:</p>
      <Code lang="Snippet">{`/seo audit https://example.com`}</Code>
      <p>
        Swap in your own URL. A full audit sends parallel specialist agents
        through the site, each checking a different area, and pulls their
        findings into one prioritised list. Start at the top of that list: it's
        ordered so the biggest wins come first.
      </p>
      <h2 id="commands">
        What are all the /seo commands?
        <a
          href="#commands"
          className="gz-anchor"
          aria-hidden="true"
          tabIndex={-1}
        >
          ★
        </a>
      </h2>
      <p>
        There are 22 commands. <code>&lt;url&gt;</code> means a required URL;
        anything in <code>[brackets]</code> is optional.
      </p>
      <div
        className="gz-table"
        tabIndex={0}
        role="region"
        aria-label="Table, scrollable"
      >
        <table>
          <thead>
            <tr>
              <th>Command</th>
              <th>What it does</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <code>/seo audit &lt;url&gt;</code>
              </td>
              <td>Full website audit with parallel specialist agents</td>
            </tr>
            <tr>
              <td>
                <code>/seo page &lt;url&gt;</code>
              </td>
              <td>Deep single-page analysis</td>
            </tr>
            <tr>
              <td>
                <code>/seo technical &lt;url&gt;</code>
              </td>
              <td>
                Technical SEO audit across crawlability, security, and
                performance
              </td>
            </tr>
            <tr>
              <td>
                <code>/seo content &lt;url&gt;</code>
              </td>
              <td>E-E-A-T and content quality assessment</td>
            </tr>
            <tr>
              <td>
                <code>/seo content-brief &lt;topic&gt;</code>
              </td>
              <td>
                Detailed SEO content brief with keywords, outline, and internal
                links
              </td>
            </tr>
            <tr>
              <td>
                <code>/seo schema &lt;url&gt;</code>
              </td>
              <td>Schema.org structured data validation and generation</td>
            </tr>
            <tr>
              <td>
                <code>/seo sitemap &lt;url&gt;</code>
              </td>
              <td>XML sitemap analysis and generation</td>
            </tr>
            <tr>
              <td>
                <code>/seo images &lt;url&gt;</code>
              </td>
              <td>Image SEO analysis and optimization</td>
            </tr>
            <tr>
              <td>
                <code>/seo geo &lt;url&gt;</code>
              </td>
              <td>
                Generative Engine Optimization (AI Overviews, ChatGPT,
                Perplexity)
              </td>
            </tr>
            <tr>
              <td>
                <code>/seo local &lt;url&gt;</code>
              </td>
              <td>Local SEO (Google Business Profile, citations, reviews)</td>
            </tr>
            <tr>
              <td>
                <code>/seo maps [command]</code>
              </td>
              <td>
                Maps intelligence (geo-grid, GBP audit, competitor radius)
              </td>
            </tr>
            <tr>
              <td>
                <code>/seo agentic &lt;url&gt;</code>
              </td>
              <td>AI agent readiness checks (llms.txt, WebMCP, Markdown)</td>
            </tr>
            <tr>
              <td>
                <code>/seo cluster &lt;keyword&gt;</code>
              </td>
              <td>Semantic topic clustering and content architecture</td>
            </tr>
            <tr>
              <td>
                <code>/seo sxo &lt;url&gt;</code>
              </td>
              <td>Search Experience Optimization analysis</td>
            </tr>
            <tr>
              <td>
                <code>/seo drift &lt;url&gt;</code>
              </td>
              <td>SEO drift monitoring and baseline comparisons</td>
            </tr>
            <tr>
              <td>
                <code>/seo ecommerce &lt;url&gt;</code>
              </td>
              <td>E-commerce SEO: product schema, marketplace intelligence</td>
            </tr>
            <tr>
              <td>
                <code>/seo hreflang [url]</code>
              </td>
              <td>International SEO, hreflang audit, and cultural profiles</td>
            </tr>
            <tr>
              <td>
                <code>/seo plan &lt;type&gt;</code>
              </td>
              <td>Strategic planning by industry</td>
            </tr>
            <tr>
              <td>
                <code>/seo programmatic &lt;url&gt;</code>
              </td>
              <td>Programmatic SEO analysis and safeguards</td>
            </tr>
            <tr>
              <td>
                <code>/seo competitor-pages &lt;url&gt;</code>
              </td>
              <td>Competitor comparison page generation</td>
            </tr>
            <tr>
              <td>
                <code>/seo flow [stage]</code>
              </td>
              <td>
                FLOW framework prompts (Find, Leverage, Optimize, Win, Local)
              </td>
            </tr>
            <tr>
              <td>
                <code>/seo backlinks &lt;url&gt;</code>
              </td>
              <td>Backlink profile analysis and referring domain audit</td>
            </tr>
          </tbody>
        </table>
      </div>
      <h2 id="features">
        What does it check?
        <a
          href="#features"
          className="gz-anchor"
          aria-hidden="true"
          tabIndex={-1}
        >
          ★
        </a>
      </h2>
      <ul>
        <li>
          <strong>Technical SEO:</strong> crawlability, indexability, redirects,
          XML sitemaps, robots.txt, Core Web Vitals (including INP) and
          hreflang.
        </li>
        <li>
          <strong>Content and E-E-A-T:</strong> content depth, readability,
          semantic keyword clustering and structured content briefs.
        </li>
        <li>
          <strong>Structured data:</strong> Schema.org JSON-LD generation and
          error detection.
        </li>
        <li>
          <strong>AI search and GEO:</strong> how citable your pages are for AI
          Overviews, Perplexity, Gemini and ChatGPT.
        </li>
        <li>
          <strong>Local and commerce:</strong> Google Business Profile
          optimisation, local citation signals and product markup.
        </li>
      </ul>
      <h2 id="which">
        Which command should you start with?
        <a href="#which" className="gz-anchor" aria-hidden="true" tabIndex={-1}>
          ★
        </a>
      </h2>
      <ul>
        <li>
          <strong>New to SEO, or checking a whole site?</strong>{" "}
          <code>/seo audit</code>.
        </li>
        <li>
          <strong>One page isn't ranking?</strong> <code>/seo page</code> on
          that URL.
        </li>
        <li>
          <strong>Want to show up in ChatGPT and AI Overviews?</strong>{" "}
          <code>/seo geo</code>.
        </li>
        <li>
          <strong>Local business?</strong> <code>/seo local</code>.
        </li>
        <li>
          <strong>Writing a new post?</strong> <code>/seo content-brief</code>{" "}
          with your topic, before you write.
        </li>
      </ul>
      <h2 id="limits">
        What can the skill not do?
        <a
          href="#limits"
          className="gz-anchor"
          aria-hidden="true"
          tabIndex={-1}
        >
          ★
        </a>
      </h2>
      <p>
        It analyses and plans; it doesn't change your site on its own. You get a
        roadmap, and you (or Claude Code, if your site's code is in front of it)
        make the edits.
      </p>
      <p>
        Treat the findings like advice from a sharp consultant: check anything
        important before you act on it, and re-run the audit after big changes
        to see what moved.
      </p>
      <h2 id="faq">
        FAQ
        <a href="#faq" className="gz-anchor" aria-hidden="true" tabIndex={-1}>
          ★
        </a>
      </h2>
      <h3 id="is-claude-seo-free">
        Is the Claude SEO skill free?
        <a
          href="#is-claude-seo-free"
          className="gz-anchor"
          aria-hidden="true"
          tabIndex={-1}
        >
          ★
        </a>
      </h3>
      <p>
        Yes. It's on GitHub and costs nothing to install. You do need Claude
        Code, which may need a paid Claude plan depending on your account.
      </p>
      <h3 id="what-is-geo">
        What is GEO?
        <a
          href="#what-is-geo"
          className="gz-anchor"
          aria-hidden="true"
          tabIndex={-1}
        >
          ★
        </a>
      </h3>
      <p>
        Generative Engine Optimisation: making your pages easy for AI tools like
        ChatGPT, Perplexity and Google's AI Overviews to find, understand and
        cite. <code>/seo geo</code> checks that for you.
      </p>
      <h3 id="can-i-audit-a-competitor">
        Can I audit a competitor's site?
        <a
          href="#can-i-audit-a-competitor"
          className="gz-anchor"
          aria-hidden="true"
          tabIndex={-1}
        >
          ★
        </a>
      </h3>
      <p>
        Yes. Any public URL works. <code>/seo competitor-pages</code> can also
        generate comparison pages against them.
      </p>
      <h3 id="will-it-fix-my-site">
        Will it fix my site for me?
        <a
          href="#will-it-fix-my-site"
          className="gz-anchor"
          aria-hidden="true"
          tabIndex={-1}
        >
          ★
        </a>
      </h3>
      <p>
        Not by itself. It tells you what to fix and in what order. If your
        site's code is open in Claude Code, you can then ask Claude to make the
        changes.
      </p>
      <p>
        <small>
          Source: samknows.ai,{" "}
          <a
            href="https://github.com/lowdevco/claude-seo"
            target="_blank"
            rel="noopener"
          >
            claude-seo README
          </a>
          , GitHub, released 2026-11-09.
        </small>
      </p>
      <div className="gz-box gz-cta">
        <p>
          <strong>Ready to audit?</strong> Claude SEO is free on GitHub.
        </p>
        <a
          className="gz-btn gz-btn--primary"
          href="https://github.com/lowdevco/claude-seo"
          target="_blank"
          rel="noopener"
        >
          Get Claude SEO on GitHub
        </a>
      </div>
    </GuideLayout>
  );
}
