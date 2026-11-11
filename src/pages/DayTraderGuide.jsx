import GuideLayout, { Code } from "../components/GuideLayout.jsx";

const toc = [
  { id: "what", title: "What is the Day Trader skill?" },
  { id: "before", title: "What do you need before you start?" },
  { id: "install", title: "How do you install the Day Trader skill?" },
  {
    id: "option-1-paste-it-into-claude-easiest",
    title: "Option 1: paste it into Claude (easiest)",
    sub: true,
  },
  {
    id: "option-2-install-as-a-claude-code-plugin",
    title: "Option 2: install as a Claude Code plugin",
    sub: true,
  },
  {
    id: "option-3-copy-the-folders-yourself",
    title: "Option 3: copy the folders yourself",
    sub: true,
  },
  { id: "check-that-it-worked", title: "Check that it worked", sub: true },
  { id: "config", title: "How do you set your limits and your name?" },
  { id: "eleven", title: "What does each of the 11 skills do?" },
  { id: "timemachine", title: "How does the Time Machine skill work?" },
  { id: "flow", title: "How do you run one trade, start to finish?" },
  { id: "safety", title: "How does it keep your money safe?" },
  { id: "limits", title: "What can the Day Trader skill not do?" },
  { id: "build", title: "Want skills like this built for your business?" },
  { id: "faq", title: "FAQ" },
  {
    id: "is-the-day-trader-skill-really-free",
    title: "Is the Day Trader skill really free?",
    sub: true,
  },
  {
    id: "do-i-need-to-know-python-or-coding-to-set-it-up",
    title: "Do I need to know Python or coding to set it up?",
    sub: true,
  },
  {
    id: "can-it-place-trades-without-me",
    title: "Can it place trades without me?",
    sub: true,
  },
  {
    id: "does-the-time-machine-predict-where-the-price-will-go",
    title: "Does the Time Machine predict where the price will go?",
    sub: true,
  },
  {
    id: "does-it-work-for-indian-stocks",
    title: "Does it work for Indian stocks?",
    sub: true,
  },
  {
    id: "which-skills-should-a-beginner-start-with",
    title: "Which skills should a beginner start with?",
    sub: true,
  },
];

export default function DayTraderGuide() {
  return (
    <GuideLayout
      title="Claude Day Trader Skill Setup Guide: Install All 11 Skills Free (2026)"
      dek="A step-by-step setup guide for the free Day Trader skill pack: 11 Claude skills including the Time Machine, installed in about 5 minutes."
      date="November 03, 2026"
      iso="2026-10-26"
      read="10 min read"
      toc={toc}
    >
      <p>
        <strong>
          The Day Trader skill is a free pack of 11 Claude skills for day
          trading.
        </strong>{" "}
        It scans charts, tracks news, times entries and exits, and replays a
        trade 10,000 times before you risk a rupee or a dollar. It costs
        nothing, needs no API key, and installs in about 5 minutes. This guide
        shows every step, on Windows or Mac.
      </p>
      <p>
        It is a Claude Code skill pack by Jake Schincariol, and it went viral in
        October 2026 as the “Time Machine” skill. I read the repo before writing
        this. Below is what it really does, how to set it up, and what it can’t
        do.
      </p>
      <div className="gz-box">
        <p>
          <strong>Key takeaways</strong>
        </p>
        <ul>
          <li>
            It’s 11 skills in one free, MIT-licensed GitHub repo: scanner, news,
            entry, exit, Time Machine, risk, budget, broker, alerts, analyst and
            a Congress tracker.
          </li>
          <li>
            Setup is one paste into Claude, or three commands. Python 3.8+ is
            the only requirement. Nothing to pip install.
          </li>
          <li>
            Nothing can place an order without your typed “yes”, and paper
            trading is the default.
          </li>
          <li>
            The Time Machine is a simulation, not a prediction. In the author’s
            own Tesla example it came out as “close to a coin flip”.
          </li>
        </ul>
      </div>
      <p>
        <strong>Not financial advice.</strong> This post explains how to install
        and use software. It doesn’t tell you what to trade. Most people who day
        trade lose money, and you can lose money.
      </p>
      <ol>
        <li>
          <a href="#what">What is the Day Trader skill?</a>
        </li>
        <li>
          <a href="#before">What do you need before you start?</a>
        </li>
        <li>
          <a href="#install">How do you install it?</a>
        </li>
        <li>
          <a href="#config">How do you set your limits?</a>
        </li>
        <li>
          <a href="#eleven">What does each of the 11 skills do?</a>
        </li>
        <li>
          <a href="#timemachine">How does the Time Machine work?</a>
        </li>
        <li>
          <a href="#flow">How do you run one trade, start to finish?</a>
        </li>
        <li>
          <a href="#safety">How does it keep your money safe?</a>
        </li>
        <li>
          <a href="#limits">What can it not do?</a>
        </li>
        <li>
          <a href="#faq">FAQ</a>
        </li>
      </ol>
      <h2 id="what">
        What is the Day Trader skill?
        <a href="#what" className="gz-anchor" aria-hidden="true" tabIndex={-1}>
          ★
        </a>
      </h2>
      <p>
        It’s an open-source pack of 11 Claude skills for day trading, published
        on GitHub under the MIT licence. Each skill is a small folder with
        instructions for Claude and a plain Python tool. The tools read free
        public data: Yahoo Finance charts, Nasdaq Trader symbol lists, SEC EDGAR
        and the US House Clerk.
      </p>
      <p>
        Each skill has one job, and each one reads what the last one saved. They
        write to a <code>trader/</code> folder in your project. The source is at{" "}
        <a
          href="https://github.com/Jakeschincariol/day-trader-skill"
          target="_blank"
          rel="noopener"
        >
          github.com/Jakeschincariol/day-trader-skill
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
        You need Claude (Claude Code is best) and Python 3.8 or newer. That’s
        it. The README says there’s nothing to pip install, because the tools
        use only Python’s standard library. There’s no signup and no API key for
        the data.
      </p>
      <p>
        Two optional extras. The SEC tools (news filings and the earnings
        analyst) ask you to identify yourself with a name and email. And if you
        ever want to send orders, you need a brokerage connector. The pack
        points to Alpaca’s MCP server, with its paper account as the default.
      </p>
      <p>
        Don’t have Claude Code? You can still paste any single{" "}
        <code>SKILL.md</code> at the top of a chat and it runs as a mode. You
        lose the Python tools, so the method works but the live data doesn’t.
      </p>
      <h2 id="install">
        How do you install the Day Trader skill?
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
        There are three ways. Pick one. The first is the easiest and works for
        most people.
      </p>
      <h3 id="option-1-paste-it-into-claude-easiest">
        Option 1: paste it into Claude (easiest)
        <a
          href="#option-1-paste-it-into-claude-easiest"
          className="gz-anchor"
          aria-hidden="true"
          tabIndex={-1}
        >
          ★
        </a>
      </h3>
      <p>Open Claude and paste these two lines exactly:</p>
      <Code lang="Snippet">{`https://github.com/Jakeschincariol/day-trader-skill

install skill`}</Code>
      <h3 id="option-2-install-as-a-claude-code-plugin">
        Option 2: install as a Claude Code plugin
        <a
          href="#option-2-install-as-a-claude-code-plugin"
          className="gz-anchor"
          aria-hidden="true"
          tabIndex={-1}
        >
          ★
        </a>
      </h3>
      <p>Run these two commands in Claude Code:</p>
      <Code lang="Snippet">{`/plugin marketplace add Jakeschincariol/day-trader-skill
/plugin install day-trader-skill@day-trader-skill`}</Code>
      <p>
        Installed as a plugin, the skills get a prefix, like{" "}
        <code>/day-trader-skill:trader-scanner</code>. If you want the short{" "}
        <code>/trader-scanner</code> form, use Option 3.
      </p>
      <h3 id="option-3-copy-the-folders-yourself">
        Option 3: copy the folders yourself
        <a
          href="#option-3-copy-the-folders-yourself"
          className="gz-anchor"
          aria-hidden="true"
          tabIndex={-1}
        >
          ★
        </a>
      </h3>
      <p>On Mac or Linux:</p>
      <Code lang="Snippet">{`git clone https://github.com/Jakeschincariol/day-trader-skill.git
cp -r day-trader-skill/trader-* ~/.claude/skills/`}</Code>
      <p>On Windows (PowerShell), the same idea:</p>
      <Code lang="Snippet">{`git clone https://github.com/Jakeschincariol/day-trader-skill.git
Copy-Item -Recurse day-trader-skill\\trader-* "$env:USERPROFILE\\.claude\\skills\\"`}</Code>
      <p>
        Want it for one project only? Copy the same <code>trader-*</code>{" "}
        folders into that project’s <code>.claude/skills/</code> folder instead.
      </p>
      <h3 id="check-that-it-worked">
        Check that it worked
        <a
          href="#check-that-it-worked"
          className="gz-anchor"
          aria-hidden="true"
          tabIndex={-1}
        >
          ★
        </a>
      </h3>
      <p>
        Restart Claude Code, type <code>/trader-</code> and you should see the
        skills in the list. If you installed as a plugin, type{" "}
        <code>/day-trader-skill:</code> instead. On Windows, if a tool says{" "}
        <code>python3</code> isn’t found, ask Claude to run it with{" "}
        <code>python</code> instead. That’s how Python is usually named on
        Windows.
      </p>
      <h2 id="config">
        How do you set your limits and your name?
        <a
          href="#config"
          className="gz-anchor"
          aria-hidden="true"
          tabIndex={-1}
        >
          ★
        </a>
      </h2>
      <p>
        Set your limits before your first trade. The pack ships an example
        config, <code>config.example.json</code>, in the{" "}
        <code>trader-budget</code> folder. These are its defaults:
      </p>
      <Code lang="Snippet">{`{
  "budget": 5000,
  "max_loss_per_trade_usd": 50,
  "max_daily_loss_usd": 150,
  "max_trades_per_day": 3,
  "min_reward_risk": 1.0,
  "require_stop": true,
  "no_entries_before": "09:45",
  "no_entries_after": "15:30",
  "flat_by": "15:55",
  "broker": "alpaca",
  "paper": true,
  "allow_options": false,
  "allow_margin": false,
  "allow_short": false,
  "sec_user_agent": "Your Name <you@example.com>"
}`}</Code>
      <p>
        Save your version as <code>trader/config.json</code> in your project.
        Change the budget and loss limits to numbers you can afford to lose. Put
        your own name and email in <code>sec_user_agent</code>, because the SEC
        asks automated tools to identify themselves. Leave{" "}
        <code>"paper": true</code> on.
      </p>
      <p>
        The Risk Manager checks every trade against these numbers, so they work
        as your rulebook. Set them while you’re calm, not in the middle of a
        trade.
      </p>
      <h2 id="eleven">
        What does each of the 11 skills do?
        <a
          href="#eleven"
          className="gz-anchor"
          aria-hidden="true"
          tabIndex={-1}
        >
          ★
        </a>
      </h2>
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
              <th>Job</th>
              <th>What it does</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <code>/trader-scanner</code>
              </td>
              <td>Chart Scanner</td>
              <td>
                Scans thousands of charts for setups like opening-range
                breakouts, flags and oversold bounces
              </td>
            </tr>
            <tr>
              <td>
                <code>/trader-news</code>
              </td>
              <td>News Monitor</td>
              <td>
                Tracks breaking news on stocks you watch and flags what moves
                them
              </td>
            </tr>
            <tr>
              <td>
                <code>/trader-entry</code>
              </td>
              <td>Entry Timer</td>
              <td>Watches a setup bar by bar and tells you when it triggers</td>
            </tr>
            <tr>
              <td>
                <code>/trader-exit</code>
              </td>
              <td>Exit Planner</td>
              <td>Sets your stop and target before you enter</td>
            </tr>
            <tr>
              <td>
                <code>/trader-timemachine</code>
              </td>
              <td>Time Machine</td>
              <td>
                Replays the trade 10,000 times and over every past session
              </td>
            </tr>
            <tr>
              <td>
                <code>/trader-risk</code>
              </td>
              <td>Risk Manager</td>
              <td>
                Checks each trade against your limits and blocks anything over
              </td>
            </tr>
            <tr>
              <td>
                <code>/trader-budget</code>
              </td>
              <td>Budget Manager</td>
              <td>Sizes the position to your budget and max loss</td>
            </tr>
            <tr>
              <td>
                <code>/trader-broker</code>
              </td>
              <td>Order Executor</td>
              <td>
                Sends approved orders to your broker, paper by default, only
                after your yes
              </td>
            </tr>
            <tr>
              <td>
                <code>/trader-alerts</code>
              </td>
              <td>Price Alerts</td>
              <td>Rings when a price, stop or the opening bell hits</td>
            </tr>
            <tr>
              <td>
                <code>/trader-analyst</code>
              </td>
              <td>Earnings Analyst</td>
              <td>Reads earnings reports and sums up what changed</td>
            </tr>
            <tr>
              <td>
                <code>/trader-pelosi</code>
              </td>
              <td>Pelosi Tracker</td>
              <td>
                Reads Congress’s public stock-trade disclosures when they’re
                filed
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        You don’t need all eleven on day one. Start with the scanner, the exit
        planner and the Time Machine, then add the rest.
      </p>
      <h2 id="timemachine">
        How does the Time Machine skill work?
        <a
          href="#timemachine"
          className="gz-anchor"
          aria-hidden="true"
          tabIndex={-1}
        >
          ★
        </a>
      </h2>
      <p>
        The Time Machine replays the rest of a trading session 10,000 times
        before you enter. Each replay is built from the stock’s own 5-minute
        candles over the previous 60 days, matched by time of day. It also
        re-runs your exact rule on each of those real past sessions. Then it
        prints the odds of hitting your target first, your stop first, or
        neither.
      </p>
      <p>
        The repo’s worked example uses Tesla on Monday 19 October 2026, with
        seed 19 so anyone can repeat it. The result: target first 29.4%, stop
        first 25.5%, still open at the close 45.1%. On the 59 real past
        sessions, the rule fired 33 times: 13 hit the target, 15 hit the stop, 5
        neither. The tool’s verdict was “close to a coin flip” (
        <a
          href="https://github.com/Jakeschincariol/day-trader-skill"
          target="_blank"
          rel="noopener"
        >
          Day Trader skill README
        </a>
        , October 2026).
      </p>
      <p>
        That’s the point of the skill. It’s not a crystal ball that finds
        winners. It’s a reality check that tells you plainly when a setup has no
        edge. A tool that says “coin flip” and saves you from a bad trade is
        doing its job.
      </p>
      <p>
        Two limits to know. It uses only the last 60 days, so it can’t see an
        earnings report, a trading halt or a surprise headline that those days
        never had. And it checks 5-minute bars, not every tick, so real fills
        can be worse than the replay.
      </p>
      <h2 id="flow">
        How do you run one trade, start to finish?
        <a href="#flow" className="gz-anchor" aria-hidden="true" tabIndex={-1}>
          ★
        </a>
      </h2>
      <p>
        The skills run in a chain, and each reads the file the last one wrote.
        The README gives this order for one trade: scanner, news, entry, exit,
        Time Machine, budget, risk, broker. Alerts then watch the trade while
        it’s open.
      </p>
      <ol>
        <li>
          <strong>
            <code>/trader-scanner</code>
          </strong>{" "}
          finds stocks that broke above their opening range.
        </li>
        <li>
          <strong>
            <code>/trader-news</code>
          </strong>{" "}
          checks the day’s headlines for the stock. Skip anything with an
          earnings report due.
        </li>
        <li>
          <strong>
            <code>/trader-entry</code>
          </strong>{" "}
          watches bar by bar and says “waiting” or “triggered”.
        </li>
        <li>
          <strong>
            <code>/trader-exit</code>
          </strong>{" "}
          sets the stop and target before you enter.
        </li>
        <li>
          <strong>
            <code>/trader-timemachine</code>
          </strong>{" "}
          shows the odds. If it says coin flip, you can stop here.
        </li>
        <li>
          <strong>
            <code>/trader-budget</code>
          </strong>{" "}
          sizes the position. With a $5,000 account and a $50 max loss, the
          example risks $5.86 a share, so it sizes 8 shares.
        </li>
        <li>
          <strong>
            <code>/trader-risk</code>
          </strong>{" "}
          returns PASS or BLOCK with a reason.
        </li>
        <li>
          <strong>
            <code>/trader-broker</code>
          </strong>{" "}
          shows you the ticket in plain words. Nothing is sent until you type
          yes.
        </li>
        <li>
          <strong>
            <code>/trader-alerts</code>
          </strong>{" "}
          rings on your stop, your target, and at 3:55 PM to flatten what’s
          left.
        </li>
      </ol>
      <p>
        The tools also run straight from the command line if you prefer, for
        example <code>python3 trader-scanner/scan.py orb --at 10:15</code> for
        opening-range breakouts so far.
      </p>
      <h2 id="safety">
        How does it keep your money safe?
        <a
          href="#safety"
          className="gz-anchor"
          aria-hidden="true"
          tabIndex={-1}
        >
          ★
        </a>
      </h2>
      <p>
        By design, no trade goes through until you say yes. Only{" "}
        <code>/trader-broker</code> can lead to an order, and only after{" "}
        <code>/trader-risk</code> passes that exact order and you type yes for
        it in the chat. Paper trading is the default, and broker keys belong in
        environment variables, never in the chat.
      </p>
      <p>
        The README adds a second lock. Set your brokerage tool to “Needs
        approval” in Claude (Customize, Connectors, tool permissions), never
        “Always allow”. Then Claude’s own Allow once / Deny card asks you one
        more time before any order leaves.
      </p>
      <p>
        My advice: stay on paper trading for at least a few weeks. Learn what
        the tools tell you. Only think about live money once you trust your own
        process, and only with money you can afford to lose.
      </p>
      <h2 id="limits">
        What can the Day Trader skill not do?
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
        It isn’t a Bloomberg Terminal, and it doesn’t predict the market. It
        reads free, unofficial data. Yahoo Finance’s chart endpoint can lag,
        change or rate-limit you, so check anything important against your
        broker.
      </p>
      <p>
        It also won’t make day trading profitable. A simulation built on the
        last 60 days can’t see the future. Day-trading gains are taxed as
        short-term gains, and frequent trading can trigger wash-sale rules. And
        the US pattern day trader rule changed: FINRA removed the $25,000
        minimum on 4 June 2026, but brokers may phase it in until 20 October
        2027, so yours may still apply the old rule (
        <a
          href="https://github.com/Jakeschincariol/day-trader-skill"
          target="_blank"
          rel="noopener"
        >
          Day Trader skill README
        </a>
        ). If you’re in India, check the rules for your broker and market first.
        This tool reads US data.
      </p>
      <h2 id="build">
        Want skills like this built for your business?
        <a href="#build" className="gz-anchor" aria-hidden="true" tabIndex={-1}>
          ★
        </a>
      </h2>
      <p>
        Skill packs like this one are a good model for how AI should work: one
        clear job per skill, with a human saying yes. That’s how I build
        marketing workflows too. I’m an AI-native digital marketer, and I set up
        the SEO content pipelines, ad reporting and Instagram automations I
        recommend. See my AI-powered digital marketing services or browse the
        projects I’ve built.
      </p>
      <h2 id="faq">
        FAQ
        <a href="#faq" className="gz-anchor" aria-hidden="true" tabIndex={-1}>
          ★
        </a>
      </h2>
      <h3 id="is-the-day-trader-skill-really-free">
        Is the Day Trader skill really free?
        <a
          href="#is-the-day-trader-skill-really-free"
          className="gz-anchor"
          aria-hidden="true"
          tabIndex={-1}
        >
          ★
        </a>
      </h3>
      <p>
        Yes. It’s MIT-licensed, with no signup and no API key. The tools read
        free public data. Claude itself may need a paid plan to use Claude Code,
        depending on your account.
      </p>
      <h3 id="do-i-need-to-know-python-or-coding-to-set-it-up">
        Do I need to know Python or coding to set it up?
        <a
          href="#do-i-need-to-know-python-or-coding-to-set-it-up"
          className="gz-anchor"
          aria-hidden="true"
          tabIndex={-1}
        >
          ★
        </a>
      </h3>
      <p>
        No. Paste the repo link into Claude with the words “install skill” and
        Claude installs it. You only need Python 3.8 or newer on your computer,
        and nothing else to install.
      </p>
      <h3 id="can-it-place-trades-without-me">
        Can it place trades without me?
        <a
          href="#can-it-place-trades-without-me"
          className="gz-anchor"
          aria-hidden="true"
          tabIndex={-1}
        >
          ★
        </a>
      </h3>
      <p>
        No. Only the broker skill can lead to an order, and only after the risk
        check passes and you type yes for that exact order. Paper trading is on
        by default, and the README says to keep order tools on “Needs approval”.
      </p>
      <h3 id="does-the-time-machine-predict-where-the-price-will-go">
        Does the Time Machine predict where the price will go?
        <a
          href="#does-the-time-machine-predict-where-the-price-will-go"
          className="gz-anchor"
          aria-hidden="true"
          tabIndex={-1}
        >
          ★
        </a>
      </h3>
      <p>
        No. It’s a simulation built from the stock’s own last 60 days of
        5-minute bars. It gives odds, not a forecast. In the author’s Tesla
        example, it called the trade close to a coin flip.
      </p>
      <h3 id="does-it-work-for-indian-stocks">
        Does it work for Indian stocks?
        <a
          href="#does-it-work-for-indian-stocks"
          className="gz-anchor"
          aria-hidden="true"
          tabIndex={-1}
        >
          ★
        </a>
      </h3>
      <p>
        Not out of the box. The scanner uses US symbol lists from Nasdaq Trader,
        and the data comes from US sources. The method of planning a stop, a
        target and the odds first applies anywhere, but the tools would need
        changes.
      </p>
      <h3 id="which-skills-should-a-beginner-start-with">
        Which skills should a beginner start with?
        <a
          href="#which-skills-should-a-beginner-start-with"
          className="gz-anchor"
          aria-hidden="true"
          tabIndex={-1}
        >
          ★
        </a>
      </h3>
      <p>
        Start with the scanner, the exit planner and the Time Machine, on paper
        only. They teach you to decide your stop and target before you enter,
        and to check the odds first.
      </p>
      <p>
        Want more free Claude setups? Read how I do SEO for a brand using 81
        free AI skills, or how to make a motion graphics video with Claude AI.
        Got the skill running? Comment on the video and tell me which one you
        tried first.
      </p>
      <div className="gz-box">
        <p>
          <strong>
            Written by{" "}
            <a
              href="https://www.instagram.com/samknows.ai/"
              target="_blank"
              rel="noopener"
            >
              samknows.ai
            </a>
          </strong>
          , an AI-native digital marketer and SEO executive in Kochi, Kerala. I
          run SEO, social and paid ads for brands in India and the UAE, and I
          teach AI workflows to students and teams. I’m not a financial adviser,
          and this post is a software setup guide, not trading advice.{" "}
          <a
            href="https://www.instagram.com/samknows.ai/"
            target="_blank"
            rel="noopener"
          >
            Work with me
          </a>
          .
        </p>
      </div>
      <p>
        <small>
          Sources: Jake Schincariol,{" "}
          <a
            href="https://github.com/Jakeschincariol/day-trader-skill"
            target="_blank"
            rel="noopener"
          >
            The Day Trader skill (README, SKILL.md files and
            config.example.json)
          </a>
          , GitHub, retrieved 2026-10-26. All figures for the Tesla example, the
          install steps and the PDT rule note come from this repository.
        </small>
      </p>
      <div className="gz-box gz-cta">
        <p>
          <strong>Ready to install it?</strong> The full skill pack is free on
          GitHub.
        </p>
        <a
          className="gz-btn gz-btn--primary"
          href="https://github.com/Jakeschincariol/day-trader-skill"
          target="_blank"
          rel="noopener"
        >
          Get the skill on GitHub
        </a>
      </div>
    </GuideLayout>
  );
}
