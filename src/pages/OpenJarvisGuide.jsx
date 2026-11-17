import GuideLayout, { Code } from "../components/GuideLayout.jsx";

const REPO = "https://github.com/open-jarvis/OpenJarvis";
const DOCS = "https://open-jarvis.github.io/OpenJarvis";
const RELEASES = `${REPO}/releases/latest`;
const DL = `${RELEASES}/download`;
const ASSETS = "https://raw.githubusercontent.com/open-jarvis/OpenJarvis/main/assets";

// Tabler Icons (MIT) via Wikimedia Commons, credited on the page.
const icon = (name, hash) =>
  `https://upload.wikimedia.org/wikipedia/commons/${hash}/Tabler-icons_${name}.svg`;

const PROMPT = `Install OpenJarvis (https://github.com/open-jarvis/OpenJarvis) on this computer for me.
1. Check my operating system and chip (Windows x64 or ARM, Mac, or Linux), my RAM and my free disk space. Show it in a short table.
2. Use only the official installer from open-jarvis.github.io:
   - macOS, Linux or WSL2: curl -fsSL https://open-jarvis.github.io/OpenJarvis/install.sh | bash
   - Native Windows (PowerShell): irm https://open-jarvis.github.io/OpenJarvis/install.ps1 | iex
   Show me the command and ask me before you run it.
3. If it asks about sharing analytics, answer No unless I say otherwise.
4. If something is missing (Git, or Python 3.11 to 3.13 on Windows), tell me what and ask before installing it.
5. When it finishes, run "jarvis doctor" and explain the result in plain words. If "jarvis" isn't found, fix my PATH or tell me to open a new terminal.
6. Bigger models keep downloading in the background. Tell me how to check when they're done.
7. Finally, show me how to start my first chat, and list the starter presets with one line each on what they do.`;

// Heading with the ★ anchor link every guide uses.
const H = ({ as: Tag = "h2", id, children }) => (
  <Tag id={id}>
    {children}
    <a href={`#${id}`} className="gz-anchor" aria-hidden="true" tabIndex={-1}>
      ★
    </a>
  </Tag>
);

// Scrollable table in the site's style. rows: arrays of cells.
const Table = ({ head, rows }) => (
  <div className="gz-table" tabIndex={0} role="region" aria-label="Table, scrollable">
    <table>
      <thead>
        <tr>
          {head.map((h) => (
            <th key={h}>{h}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((r, i) => (
          <tr key={i}>
            {r.map((c, j) => (
              <td key={j}>{c}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

// Icon cards in the numbered grid style. items: [iconName, hash, title, text].
const Cards = ({ items }) => (
  <ol className="gz-steps">
    {items.map(([name, hash, title, text]) => (
      <li key={title}>
        <img src={icon(name, hash)} alt="" width="32" height="32" loading="lazy" />
        <strong>{title}</strong>
        <span>{text}</span>
      </li>
    ))}
  </ol>
);

const WAYS = [
  ["message-chatbot", "b/b7", "Ask Claude to install it", "Easiest. Paste one prompt and Claude checks your computer, runs the official installer and explains each step."],
  ["brand-windows", "b/b7", "Download the desktop app", "A normal app with a window. Good for Mac. On Windows it needs some developer tools first."],
  ["terminal-2", "7/74", "Run the one-line installer", "One command in the terminal. Installs everything, including a starter AI model."],
];

const DOWNLOADS = [
  ["brand-windows", "b/b7", "Windows (most PCs)", "OpenJarvis_x64-setup.exe", "Intel or AMD processor"],
  ["brand-windows", "b/b7", "Windows on ARM", "OpenJarvis_arm64-setup.exe", "Snapdragon laptops"],
  ["brand-apple", "6/66", "Mac", "OpenJarvis_universal.dmg", "Apple Silicon and Intel"],
  ["brand-ubuntu", "e/ef", "Linux (Ubuntu, Debian)", "OpenJarvis_amd64.deb", "Also .rpm and .AppImage"],
];

const AGENTS = [
  ["sun", "0/09", "Morning digest", "Every morning, a spoken briefing of your email, calendar, health and news."],
  ["search", "8/85", "Deep research", "Answers a hard question by searching the web and your own documents, with sources."],
  ["code", "f/f8", "Code assistant", "Writes and runs code, reads and edits files, and uses the terminal."],
  ["clock", "9/97", "Scheduled monitor", "Runs on a timer and remembers what it saw last time. Good for watching for changes."],
  ["brain", "e/e3", "Orchestrator", "Thinks over several turns and picks the right tool for each step by itself."],
  ["message-chatbot", "b/b7", "Simple chat", "Just talk. No tools, fastest replies. This is the default."],
];

const toc = [
  { id: "what", title: "What is OpenJarvis?" },
  { id: "how", title: "How does it work?" },
  { id: "demo", title: "See it in action" },
  { id: "need", title: "What does your computer need?" },
  { id: "install", title: "How do you install it?" },
  { id: "install-claude", title: "Option 1: let Claude install it", sub: true },
  { id: "install-app", title: "Option 2: download the desktop app", sub: true },
  { id: "install-cli", title: "Option 3: the one-line installer", sub: true },
  { id: "first", title: "How do you use it?" },
  { id: "first-chat", title: "Your first chat", sub: true },
  { id: "presets", title: "Pick a preset", sub: true },
  { id: "digest", title: "Example: a morning briefing", sub: true },
  { id: "agents", title: "What can the built-in agents do?" },
  { id: "skills", title: "How do skills work?" },
  { id: "privacy", title: "Is it private?" },
  { id: "manage", title: "Updating, fixing and uninstalling" },
  { id: "faq", title: "FAQ" },
  { id: "faq-free", title: "Is OpenJarvis free?", sub: true },
  { id: "faq-gpu", title: "Do I need a gaming PC?", sub: true },
  { id: "faq-claude", title: "Can it use Claude?", sub: true },
  { id: "faq-offline", title: "Does it work offline?", sub: true },
];

export default function OpenJarvisGuide() {
  return (
    <GuideLayout
      title="OpenJarvis Guide: Run Your Own Private AI Assistant on Your Computer (2026)"
      dek="Stanford’s free, open-source assistant that runs AI models on your own machine. How to install it (or let Claude do it), download the desktop app, and actually use it."
      date="November 17, 2026"
      iso="2026-11-17"
      read="10 min read"
      toc={toc}
    >
      <figure className="gz-figure gz-logo">
        <img
          src={`${ASSETS}/OpenJarvis_Horizontal_Logo.png`}
          alt="OpenJarvis logo"
          width="800"
          height="200"
          loading="lazy"
        />
      </figure>

      <p>
        <strong>
          OpenJarvis is a free AI assistant that runs on your own computer,
          not on someone else’s server.
        </strong>{" "}
        It can chat, research, write code, read your email and calendar, and
        give you a spoken briefing every morning, all using an AI model that
        lives on your machine.
      </p>
      <p>
        It comes from Stanford’s Hazy Research and Scaling Intelligence Lab,
        and it’s open source under the Apache 2.0 licence. Below I’ll show you
        three ways to install it (one of them is just a prompt you give
        Claude), then how to actually use it.
      </p>
      <div className="gz-box">
        <p>
          <strong>Key takeaways</strong>
        </p>
        <ul>
          <li>
            <strong>Local first:</strong> the AI runs on your computer. It only
            calls a cloud AI if you add a key for one.
          </li>
          <li>
            <strong>Three ways in:</strong> a Claude prompt, a desktop app
            download, or one terminal command.
          </li>
          <li>
            <strong>Ready-made agents</strong> for morning briefings, research,
            coding and scheduled monitoring.
          </li>
          <li>Free, open source, about 3 minutes to install on good internet.</li>
        </ul>
      </div>

      <H id="what">What is OpenJarvis?</H>
      <p>
        Most “personal” AI assistants send everything you type to a company’s
        servers. OpenJarvis flips that. It downloads a small AI model onto
        your computer and runs it there, so your questions, files and email
        stay on your machine.
      </p>
      <p>
        That used to mean worse answers. Not anymore: the team’s own research
        found local models already handle about 89% of everyday chat and
        reasoning questions. OpenJarvis is the software that makes using them
        easy: one install, then agents, tools, memory and skills on top.
      </p>

      <H id="how">How does it work?</H>
      <figure className="gz-figure gz-house">
        <svg viewBox="0 0 620 250" role="img" aria-labelledby="oj-flow">
          <title id="oj-flow">
            You talk to OpenJarvis on your computer. It uses agents, skills
            and memory, and runs the AI model locally through Ollama. A cloud
            AI is used only if you add an API key.
          </title>
          {/* your computer */}
          <rect x="6" y="20" width="440" height="214" rx="14" fill="var(--paper)" stroke="var(--ink)" strokeWidth="3" />
          <text x="22" y="44" className="gz-house__title">Your computer</text>
          {[
            [26, "You", "chat or app"],
            [168, "OpenJarvis", "agents, skills"],
            [310, "Local AI", "via Ollama"],
          ].map(([x, t, s], i) => (
            <g key={t}>
              <rect x={x} y="80" width="118" height="78" rx="10" fill={i === 1 ? "var(--yellow)" : "var(--cream)"} stroke="var(--ink)" strokeWidth="2" />
              <text x={x + 59} y="114" textAnchor="middle" className="gz-house__title">{t}</text>
              <text x={x + 59} y="136" textAnchor="middle" className="gz-house__room">{s}</text>
            </g>
          ))}
          <g stroke="var(--ink)" strokeWidth="2.5" fill="none" markerEnd="url(#oj-arrow)">
            <path d="M146 119h18" />
            <path d="M288 119h18" />
          </g>
          <text x="226" y="200" textAnchor="middle" className="gz-house__note">
            Your files, email and chats stay here
          </text>
          {/* optional cloud */}
          <rect x="480" y="80" width="130" height="78" rx="10" fill="var(--cream)" stroke="var(--ink-2)" strokeWidth="2" strokeDasharray="6 5" />
          <text x="545" y="114" textAnchor="middle" className="gz-house__title">Cloud AI</text>
          <text x="545" y="136" textAnchor="middle" className="gz-house__room">if you add a key</text>
          <path d="M428 119h48" stroke="var(--ink-2)" strokeWidth="2" strokeDasharray="5 4" fill="none" markerEnd="url(#oj-arrow)" />
          <defs>
            <marker id="oj-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="4" markerHeight="4" orient="auto">
              <path d="M0 0L10 5L0 10z" fill="var(--ink)" />
            </marker>
          </defs>
        </svg>
        <figcaption>
          Everything inside the box runs on your machine. The cloud is
          optional. Diagram: samknows.ai.
        </figcaption>
      </figure>
      <p>Three parts work together:</p>
      <ul>
        <li>
          <strong>Ollama</strong> is a free program that runs AI models on
          your computer. OpenJarvis installs it for you and starts with a
          small model (Qwen 3.5, about 1.5 GB).
        </li>
        <li>
          <strong>OpenJarvis</strong> sits on top. It gives the model agents
          (ready-made jobs), tools (web search, files, code), memory and
          skills.
        </li>
        <li>
          <strong>You</strong> talk to it in the terminal with{" "}
          <code>jarvis</code>, in your browser, or in the desktop app.
        </li>
      </ul>
      <p>
        While you start chatting, it keeps downloading bigger models that suit
        your hardware in the background, so answers get better over the first
        hour.
      </p>

      <H id="demo">See it in action</H>
      <figure className="gz-figure">
        <img
          src={`${ASSETS}/openjarvis_demo_reel.webp`}
          alt="Animated demo of OpenJarvis: chatting, running agents and showing results"
          loading="lazy"
        />
      </figure>

      <H id="need">What does your computer need?</H>
      <Table
        head={["You need", "Details"]}
        rows={[
          [<strong>A computer</strong>, "Windows 10 (1809+) or 11, macOS, or Linux. Windows on ARM works too."],
          [<strong>Free disk space</strong>, "About 5 GB to start. More as bigger models download."],
          [<strong>Internet for the install</strong>, "About 3 minutes on broadband. After that the local model works without it."],
          [<strong>A graphics card</strong>, "Not required. It detects your hardware and picks a model that fits. More RAM or a GPU means bigger, smarter models."],
          [<strong>Windows only</strong>, "Python 3.11 to 3.13 and Git for the one-line installer (not 3.14 yet). The desktop app needs more, see Option 2."],
        ]}
      />
      <p>
        On a Mac, if you’ve never used <code>git</code> before, macOS will
        offer to install its Command Line Tools. Say yes.
      </p>

      <H id="install">How do you install it?</H>
      <p>Pick one. All three end in the same place.</p>
      <Cards items={WAYS} />

      <H as="h3" id="install-claude">Option 1: let Claude install it</H>
      <p>
        If you have Claude Code (or the Claude desktop app with access to your
        computer), copy this prompt and paste it in. Claude checks your
        machine, uses only the official installer, and asks before it runs
        anything.
      </p>
      <Code lang="Prompt">{PROMPT}</Code>
      <p>
        Step 3 matters: the installer asks whether to share usage analytics.
        The prompt tells Claude to say no unless you change it.
      </p>

      <H as="h3" id="install-app">Option 2: download the desktop app</H>
      <p>
        Prefer a normal app? Grab the installer for your computer. These links
        always point to the{" "}
        <a href={RELEASES} target="_blank" rel="noopener">
          latest release
        </a>{" "}
        (v1.0.5 when I wrote this).
      </p>
      <div className="gz-downloads">
        {DOWNLOADS.map(([name, hash, title, file, note]) => (
          <a key={file} href={`${DL}/${file}`} rel="noopener">
            <img src={icon(name, hash)} alt="" width="28" height="28" loading="lazy" />
            <strong>{title}</strong>
            <span>{note}</span>
            <code>{file}</code>
          </a>
        ))}
      </div>
      <p>
        <small>
          Not sure if your Windows PC is ARM? Open <strong>Settings → System →
          About</strong>. If “System type” says ARM-based, take the ARM one.
        </small>
      </p>
      <div className="gz-box">
        <p>
          <strong>Before you run the Windows app:</strong> on first launch it
          builds part of itself, so it needs <strong>Git</strong>,{" "}
          <strong>uv</strong>, <strong>Rust</strong> and{" "}
          <strong>Visual Studio Build Tools</strong> (with the “Desktop
          development with C++” workload). If that sounds like a lot, use
          Option 1 and let Claude handle it, or Option 3.
        </p>
      </div>
      <p>
        <strong>Mac says the app “is damaged”?</strong> That’s macOS being
        cautious with apps from outside the App Store. Move it to
        Applications, then run this once in Terminal:
      </p>
      <Code lang="Terminal">{`xattr -cr /Applications/OpenJarvis.app`}</Code>
      <p>
        When it opens, the app asks where the AI should run: on your computer
        or through a cloud provider. Pick local unless you have a reason not
        to.
      </p>

      <H as="h3" id="install-cli">Option 3: the one-line installer</H>
      <p>
        Open a terminal and paste the line for your computer. It installs
        everything for you; you don’t need anything set up first.
      </p>
      <Code lang="Mac, Linux or WSL2">{`curl -fsSL https://open-jarvis.github.io/OpenJarvis/install.sh | bash`}</Code>
      <Code lang="Windows PowerShell">{`irm https://open-jarvis.github.io/OpenJarvis/install.ps1 | iex`}</Code>
      <p>
        Use exactly these <code>open-jarvis.github.io</code> addresses. You may
        see an older <code>openjarvis.ai</code> link around; it’s run by the
        community, not the project.
      </p>
      <p>Here’s what the installer does, in plain words:</p>
      <Table
        head={["Step", "What happens"]}
        rows={[
          ["1", "Installs uv, a tool that manages Python for it, and a private Python just for OpenJarvis."],
          ["2", "Downloads OpenJarvis into a hidden .openjarvis folder in your home folder."],
          ["3", "Installs Ollama and downloads a small starter model (about 1.5 GB)."],
          ["4", "Checks your hardware and writes a settings file that suits it."],
          ["5", "Adds the jarvis command to your terminal."],
          ["Background", "Builds the memory and security features, and downloads bigger models that fit your machine."],
        ]}
      />
      <p>
        It doesn’t touch your existing Python, your other Ollama models or
        your other tools. Running it again is safe: it skips what’s already
        done.
      </p>

      <H id="first">How do you use it?</H>

      <H as="h3" id="first-chat">Your first chat</H>
      <p>Open a new terminal and type:</p>
      <Code lang="Terminal">{`jarvis`}</Code>
      <p>
        That’s it. You’re chatting with an AI on your own computer. Two more
        commands worth knowing:
      </p>
      <Table
        head={["Command", "What it does"]}
        rows={[
          [<code>jarvis</code>, "Start chatting in the terminal."],
          [<code>jarvis doctor</code>, "Health check. Shows what’s installed and which background downloads are still running."],
          [<code>jarvis gui</code>, "Opens a chat window in your browser. Needs Node.js 22+ and works from a source install; otherwise use the desktop app."],
          [<code>jarvis ask "..."</code>, "Ask one question and get one answer, without opening a chat."],
        ]}
      />

      <H as="h3" id="presets">Pick a preset</H>
      <p>
        A preset sets OpenJarvis up for one kind of job in one go. Switch with:
      </p>
      <Code lang="Terminal">{`jarvis init --preset <name> --force`}</Code>
      <Table
        head={["Preset", "Use it when you want…"]}
        rows={[
          [<code>chat-simple</code>, "A plain, fast chat with no tools. The default."],
          [<code>morning-digest-mac</code>, "A spoken briefing every morning (there are -linux and -minimal versions too)."],
          [<code>deep-research</code>, "Researched answers with sources, across your documents and the web."],
          [<code>code-assistant</code>, "Help with code, with permission to run it, edit files and use the shell."],
          [<code>scheduled-monitor</code>, "An agent that checks something on a schedule and remembers what it found."],
        ]}
      />
      <p>
        <code>--force</code> replaces your current settings file, so switch
        presets before you customise anything.
      </p>

      <H as="h3" id="digest">Example: a morning briefing</H>
      <p>Three commands turn OpenJarvis into a morning radio host:</p>
      <Code lang="Terminal">{`jarvis init --preset morning-digest-mac --force
jarvis connect gdrive
jarvis digest --fresh`}</Code>
      <ol>
        <li>Sets it up for the morning digest (use the -linux version on Linux).</li>
        <li>
          Opens a Google sign-in. One sign-in covers Gmail, Calendar and Tasks.
        </li>
        <li>Builds today’s briefing and reads it out loud.</li>
      </ol>

      <H id="agents">What can the built-in agents do?</H>
      <p>
        An agent is OpenJarvis set up to do one job on its own. Some run when
        you ask, some on a schedule, some keep running in the background.
        The main ones:
      </p>
      <Cards items={AGENTS} />
      <p>
        There are also <code>native_react</code> (thinks, acts, checks the
        result, repeats), <code>native_openhands</code> (solves problems by
        writing Python), and <code>operative</code> (a long-running agent that
        keeps its own state).
      </p>
      <p>
        <small>
          Icons:{" "}
          <a href="https://commons.wikimedia.org/wiki/Category:Tabler_icons" target="_blank" rel="noopener">
            Tabler Icons
          </a>{" "}
          via Wikimedia Commons, MIT licence.
        </small>
      </p>

      <H id="skills">How do skills work?</H>
      <p>
        A skill is a small instruction pack that teaches an agent to do one
        thing better, like reading arXiv papers or explaining code. They use
        the same open format as Claude’s skills, and you can pull them in
        from Hermes Agent (about 150 skills), OpenClaw (about 13,700) or any
        GitHub repo.
      </p>
      <Code lang="Terminal">{`jarvis skill install hermes:arxiv
jarvis ask "Use the code-explainer skill to explain: for i in range(5): print(i*2)"`}</Code>
      <p>
        Agents find and use installed skills on their own. Only install skills
        from sources you trust: a skill is instructions your agent will follow.
      </p>

      <H id="privacy">Is it private?</H>
      <Table
        head={["Question", "Answer"]}
        rows={[
          [<strong>Where does the AI run?</strong>, "On your computer, through Ollama. Nothing goes to a cloud AI unless you add a key."],
          [<strong>When does it use the cloud?</strong>, "If an OpenRouter, Anthropic, OpenAI or Google API key is set when you install, it suggests that provider instead. No key, no cloud."],
          [<strong>Does it send analytics?</strong>, "Only if you say yes. The installer asks; press N to decline. If it can’t ask, sharing stays off."],
          [<strong>Can other devices reach it?</strong>, "The Windows background service only listens on your own computer (127.0.0.1) by default."],
          [<strong>What about connected accounts?</strong>, "Agents like the morning digest read your email and calendar once you connect them. Only connect what you need."],
        ]}
      />

      <H id="manage">Updating, fixing and uninstalling</H>
      <Table
        head={["You want to…", "Run this"]}
        rows={[
          ["Update to the newest version", <code>jarvis self-update</code>],
          ["See what’s broken or still downloading", <code>jarvis doctor</code>],
          ["Fix “command not found: jarvis”", <>Open a new terminal (or run <code>source ~/.bashrc</code>)</>],
          ["Fix “memory features unavailable”", "Wait: the Rust part is still building in the background. Check with jarvis doctor."],
          ["Remove OpenJarvis", <code>jarvis-uninstall</code>],
        ]}
      />
      <p>
        Uninstalling removes OpenJarvis itself but leaves Ollama, uv and Rust,
        since other programs may use them. It prints how to remove those if
        you want.
      </p>

      <H id="faq">FAQ</H>
      <H as="h3" id="faq-free">Is OpenJarvis free?</H>
      <p>
        Yes, fully. It’s open source under Apache 2.0 and the local models are
        free. You only pay if you choose to connect a paid cloud AI.
      </p>
      <H as="h3" id="faq-gpu">Do I need a gaming PC?</H>
      <p>
        No. It checks your RAM and graphics card and picks a model that fits.
        A normal laptop runs the small starter model; a strong GPU or a recent
        Mac gets bigger ones.
      </p>
      <H as="h3" id="faq-claude">Can it use Claude?</H>
      <p>
        Yes. Set an <code>ANTHROPIC_API_KEY</code> before you install (or run{" "}
        <code>jarvis init</code>) and it offers Claude as the brain. That part
        is no longer local, and API use is paid.
      </p>
      <H as="h3" id="faq-offline">Does it work offline?</H>
      <p>
        Chat with the local model does, once the install is done. Anything that
        needs the web, like research or your email, needs internet.
      </p>

      <div className="gz-box">
        <p>
          <strong>
            Written by{" "}
            <a href="https://www.instagram.com/samknows.ai/" target="_blank" rel="noopener">
              samknows.ai
            </a>
          </strong>
          . OpenJarvis is made by Stanford’s Hazy Research and Scaling
          Intelligence Lab; I’m not affiliated with it.{" "}
          <a href="https://www.instagram.com/samknows.ai/" target="_blank" rel="noopener">
            Work with me
          </a>
          .
        </p>
      </div>
      <p>
        <small>
          Sources:{" "}
          <a href={REPO} target="_blank" rel="noopener">
            OpenJarvis README
          </a>
          ,{" "}
          <a href={`${DOCS}/getting-started/install/`} target="_blank" rel="noopener">
            installation docs
          </a>{" "}
          and{" "}
          <a href={RELEASES} target="_blank" rel="noopener">
            desktop release notes
          </a>
          , retrieved 2026-11-17.
        </small>
      </p>
      <div className="gz-box gz-cta">
        <p>
          <strong>Ready for your own private AI?</strong> OpenJarvis is free on
          GitHub.
        </p>
        <a className="gz-btn gz-btn--primary" href={REPO} target="_blank" rel="noopener">
          Get OpenJarvis on GitHub
        </a>
      </div>
    </GuideLayout>
  );
}
