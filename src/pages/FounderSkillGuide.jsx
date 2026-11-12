import GuideLayout, { Code } from "../components/GuideLayout.jsx";

const REPO = "https://github.com/Jakeschincariol/founder-skill";

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

const toc = [
  { id: "what", title: "What is the Founder skill?" },
  { id: "before", title: "What do you need before you start?" },
  { id: "install", title: "How do you install the Founder skill?" },
  { id: "option-1", title: "Option 1: paste it into Claude (easiest)", sub: true },
  { id: "option-2", title: "Option 2: install as a Claude Code plugin", sub: true },
  { id: "option-3", title: "Option 3: copy the folders yourself", sub: true },
  { id: "no-code", title: "No Claude Code? Use it in a normal chat", sub: true },
  { id: "eleven", title: "What does each of the 11 skills do?" },
  { id: "flow", title: "How do you test one business, start to finish?" },
  { id: "numbers", title: "What did the CFO find for the café?" },
  { id: "verdict", title: "How does the plan decide its verdict?" },
  { id: "tools", title: "What do the four Python tools do?" },
  { id: "fine-print", title: "What should you know before trusting it?" },
  { id: "faq", title: "FAQ" },
  { id: "faq-free", title: "Is the Founder skill really free?", sub: true },
  { id: "faq-code", title: "Do I need to know how to code?", sub: true },
  { id: "faq-real", title: "Are the board members really Hormozi, Thiel and Jobs?", sub: true },
  { id: "faq-panel", title: "Can I trust the panel’s buy rate?", sub: true },
  { id: "faq-one", title: "Can I run just one skill?", sub: true },
];

const c = (cmd) => <code>/{cmd}</code>;

const SKILLS = [
  [c("founder-board"), "Board of Directors", "Three AI board members judge your idea. Each uses one famous business framework: Offers (from $100M Offers), Monopoly (from Zero to One) and Product (from Isaacson’s Steve Jobs). They score it, say what could kill it, and vote."],
  [c("founder-competitors"), "Competitor Scout", "Finds who you’re really up against: direct rivals, indirect ones and anything people use instead. You get their prices, how they pitch themselves and what their customers complain about, with a link for every fact."],
  [c("founder-consumer"), "Consumer Panel", "Creates 100 AI buyers based on your target customer. Each has its own income, habits and reason to say no. You see who buys, who doesn’t, and why."],
  [c("founder-pricing"), "Pricing Strategist", "Uses the panel’s answers to find the price range people accept, compares it with competitors and your margin, and suggests which price to test."],
  [c("founder-offer"), "Offer Architect", "Builds your offer (bonuses, a guarantee, a real reason to buy now, and a name) to answer the panel’s objections, then tests it on the panel again."],
  [c("founder-cfo"), "CFO", "Does the money math: what each sale really earns, your true profit margin, how many sales a day you need to break even, year 1 month by month, cash needed, and when you earn it back."],
  [c("founder-marketing"), "Marketing Director", "Decides how to position you, which channels your buyers actually use, a dated 30-day launch campaign, ten hooks, and the most you can afford to pay for one customer."],
  [c("founder-brand"), "Brand Designer", "Suggests names along with the trademark, domain and social handle checks to run, plus a brand voice, a promise and a brief for the look."],
  [c("founder-ops"), "Operations Manager", "Plans suppliers, staffing, day-one routines, tools, the permits to look into and a list of risks, then sends the real costs back to the CFO."],
  [c("founder-launch"), "Launch Lead", "Starts with a cheap real-world test, then gives you a dated countdown, a launch-day checklist and a plan for the first 30 days."],
  [c("founder-plan"), "Business Planner", "Puts everything into one business plan and gives a verdict calculated from your numbers: Profitable, Not yet or Incomplete."],
];

const CAFE = [
  ["Money left from each cup after its own costs", "$4.76"],
  ["Cups a day needed to break even", "186"],
  ["Planned cups a day", "383"],
  ["Profit margin at 383 cups a day", "38%"],
  ["Year 1 profit from operations (after a slow start)", "$93,926"],
  ["Startup spend", "$25,280"],
  ["When the startup spend is earned back", "Month 8"],
  ["Cash the founder needs before it pays for itself", "$34,092"],
];

const TOOLS = [
  [<code>unit_economics.py</code>, "founder-cfo", "Reads your numbers from one JSON file and reports what each sale earns, break-even, margin, year 1 by month, cash needed, payback and three what-if scenarios. If a number is missing it stops with an error instead of guessing."],
  [<code>panel.py</code>, "founder-consumer", "Creates the 100 buyer profiles from your target customer. The same seed always gives the same buyers, so you can rerun a test. It writes a brief for each buyer, checks their answers and counts them up. It never answers for a buyer itself."],
  [<code>van_westendorp.py</code>, "founder-pricing", "Takes four price questions per buyer (too cheap, a bargain, getting expensive, too expensive) and finds the price range people accept. Works with panel answers or a CSV from a real survey."],
  [<code>compile.py</code>, "founder-plan", "Puts the business plan together and calculates the verdict."],
];

export default function FounderSkillGuide() {
  return (
    <GuideLayout
      title="Founder Skill Guide: Test Your Business Idea with 11 Free Claude Skills (2026)"
      dek="A board of directors, a CFO, a marketing director and a 100-buyer consumer panel, all inside Claude. How to install the free Founder skill pack and run your idea through it before you launch."
      date="November 12, 2026"
      iso="2026-11-12"
      read="9 min read"
      toc={toc}
    >
      <p>
        <strong>
          The Founder skill is a free pack of 11 Claude skills that test your
          business idea before you spend money on it.
        </strong>{" "}
        Think of it as a startup team you can borrow for an afternoon: a board
        of directors, a CFO, a marketing director, and a room of 100 pretend
        customers who tell you whether they’d buy.
      </p>
      <p>
        The idea is simple. Find out how to launch, how to market and whether
        you’ll actually make money now, instead of spending thousands to learn
        it the hard way. It’s made by Jake Schincariol (who also made the Day
        Trader skill). Below I explain what each part does and how to use it.
      </p>
      <div className="gz-box">
        <p>
          <strong>Key takeaways</strong>
        </p>
        <ul>
          <li>
            11 skills, one job each: board, competitors, consumer panel,
            pricing, offer, CFO, marketing, brand, ops, launch and plan.
          </li>
          <li>
            Free and MIT-licensed. No signup, no API key, nothing to connect.
          </li>
          <li>
            Each skill saves its work in a <code>founder/</code> folder, and
            the next one reads it, so the plan builds itself as you go.
          </li>
          <li>
            The final verdict is calculated from your numbers, not the AI’s
            opinion: Profitable, Not yet or Incomplete.
          </li>
        </ul>
      </div>

      <H id="what">What is the Founder skill?</H>
      <p>
        A “skill” is a set of instructions Claude follows for one kind of job.
        This pack has eleven of them, and each plays one role in a startup:
      </p>
      <ul>
        <li>
          <strong>Your board of directors</strong> judges the idea using
          frameworks from Alex Hormozi, Peter Thiel and the Steve Jobs story.
        </li>
        <li>
          <strong>Your marketing director</strong> plans how you’ll find
          customers.
        </li>
        <li>
          <strong>Your CFO</strong> finds your real profit margin, not the one
          you hope for.
        </li>
        <li>
          <strong>Your consumer panel</strong> creates 100 AI buyers that match
          your target customer and runs your business past every one of them.
        </li>
      </ul>
      <p>
        The rest cover competitors, pricing, your offer, branding, operations,
        the launch and the final business plan. The source code is at{" "}
        <a href={REPO} target="_blank" rel="noopener">
          github.com/Jakeschincariol/founder-skill
        </a>
        .
      </p>

      <H id="before">What do you need before you start?</H>
      <p>
        Just Claude (Claude Code works best) and Python 3.8 or newer. The
        Python tools only use what comes with Python, so there’s nothing to{" "}
        <code>pip install</code>. They also never go online, so there are no
        accounts or keys to set up.
      </p>

      <H id="install">How do you install the Founder skill?</H>
      <p>There are three ways. Pick whichever suits you.</p>

      <H as="h3" id="option-1">Option 1: paste it into Claude (easiest)</H>
      <p>Paste the repo link into Claude and ask it to install:</p>
      <Code>{`${REPO}

install skill`}</Code>

      <H as="h3" id="option-2">Option 2: install as a Claude Code plugin</H>
      <p>Run these two commands inside Claude Code:</p>
      <Code>{`/plugin marketplace add Jakeschincariol/founder-skill
/plugin install founder-skill@founder-skill`}</Code>
      <p>
        One thing to know: Claude Code adds the plugin name in front of
        plugin skills. So instead of <code>/founder-board</code> you’ll type{" "}
        <code>/founder-skill:founder-board</code>. If you want the short
        names, use Option 3.
      </p>

      <H as="h3" id="option-3">Option 3: copy the folders yourself</H>
      <p>
        This copies the skills straight into your Claude skills folder, so they
        work with the short names. On Mac or Linux:
      </p>
      <Code>{`git clone ${REPO}.git
cp -r founder-skill/skills/founder-* ~/.claude/skills/`}</Code>
      <p>
        Only want them in one project? Copy the same folders into that
        project’s <code>.claude/skills/</code> folder instead.
      </p>

      <H as="h3" id="no-code">No Claude Code? Use it in a normal chat</H>
      <p>
        Open any skill’s <code>SKILL.md</code> file, paste it at the top of a
        Claude chat, and Claude will follow it. You lose two things: the
        sub-agents (so no 100-buyer swarm) and the Python tools. But the method
        and the questions still work.
      </p>

      <H id="eleven">What does each of the 11 skills do?</H>
      <p>Here’s every skill, in the order you run them:</p>
      <Table head={["Command", "Role", "What it does for you"]} rows={SKILLS} />

      <H id="flow">How do you test one business, start to finish?</H>
      <p>
        Run the skills in this order. Each one reads what the earlier ones
        saved in the <code>founder/</code> folder, so you never repeat
        yourself.
      </p>
      <Code>{`board -> competitors -> consumer -> pricing -> offer -> cfo -> marketing -> brand -> ops -> launch -> plan`}</Code>
      <p>
        The repo comes with a worked example you can follow: a matcha café in
        Toronto selling iced matcha lattes at $6.50 a cup. All its inputs are
        included, so you can run the tools on it yourself. Here’s what happens
        at each step:
      </p>
      <ol>
        <li>
          <strong>{c("founder-board")}</strong> turns what you told it into{" "}
          <code>founder/idea.md</code> and puts it in front of the three board
          members. Each one scores it, lists the risks and votes: fund, fund
          if, or pass. Any “fund if” conditions become a checklist for the
          other skills.
        </li>
        <li>
          <strong>{c("founder-competitors")}</strong> finds the matcha bars and
          coffee shops within walking distance, what they charge for a latte,
          and what their reviews complain about.
        </li>
        <li>
          <strong>{c("founder-consumer")}</strong> describes the target
          customer (city professionals aged 24 to 38 who buy coffee most days),
          creates 100 different buyers from that, and asks each one. You get
          back who buys, who passes, their reasons in their own words (“my
          coffee place is closer”, “$6.50 is steep for a drink”), and what
          would change a no into a yes.
        </li>
        <li>
          <strong>{c("founder-pricing")}</strong> uses four price answers from
          each buyer to find the range people accept, then checks $6.50
          against it and against the competitors.
        </li>
        <li>
          <strong>{c("founder-offer")}</strong> tackles the top objections with
          a better offer (a launch-week price, a loyalty card) and runs a quick
          panel again to see if more people buy.
        </li>
        <li>
          <strong>{c("founder-cfo")}</strong> does the money math. The results
          are in <a href="#numbers">the table below</a>.
        </li>
        <li>
          <strong>{c("founder-marketing")}</strong>,{" "}
          <strong>{c("founder-brand")}</strong>,{" "}
          <strong>{c("founder-ops")}</strong> and{" "}
          <strong>{c("founder-launch")}</strong> turn it into a real business:
          a 30-day campaign, a name and a look, suppliers and daily routines,
          and a dated launch that starts with a pop-up stall to test real
          buyers.
        </li>
        <li>
          <strong>{c("founder-plan")}</strong> puts everything into{" "}
          <code>founder/business-plan.md</code> with a final verdict.
        </li>
      </ol>
      <p>
        You don’t have to run all eleven. Any skill works on its own. If
        you’re only thinking about an idea, run{" "}
        <code>/founder-consumer --quick</code> first. It’s a fast way to find
        out whether the idea is worth more of your time.
      </p>

      <H id="numbers">What did the CFO find for the café?</H>
      <p>
        These are the numbers <code>/founder-cfo</code> gives for the matcha
        café example:
      </p>
      <Table head={["What it measures", "Result"]} rows={CAFE} />
      <p>
        In plain words: the café loses money below 186 cups a day and makes
        money above it. The plan aims for 383, about double. The founder needs
        around $34,000 in the bank to survive until the café pays for itself,
        which is more than the $25,280 setup cost because the first months are
        slow.
      </p>

      <H id="verdict">How does the plan decide its verdict?</H>
      <p>
        The verdict isn’t the AI’s opinion. It’s calculated, so it can’t just
        tell you what you want to hear.
      </p>
      <Table
        head={["Verdict", "When you get it"]}
        rows={[
          [<strong>Profitable</strong>, "Only when all four are true: every unit sold earns money, year 1 makes a profit, break-even is within what you can actually serve, and enough of the panel buys."],
          [<strong>Not yet</strong>, "The numbers are in, but at least one of those four checks fails."],
          [<strong>Incomplete</strong>, "Some of the information it needs is still missing."],
        ]}
      />

      <H id="tools">What do the four Python tools do?</H>
      <p>
        Four skills come with a small Python tool that does the exact math, so
        the numbers aren’t made up by the AI. All four use only standard
        Python and never go online. Claude runs them for you, but you can run
        them yourself too:
      </p>
      <Code>{`python3 skills/founder-cfo/unit_economics.py founder/numbers.json --out founder/cfo.md
python3 skills/founder-consumer/panel.py init --customer founder/customer.json --pitch founder/pitch.md
python3 skills/founder-pricing/van_westendorp.py founder/panel/answers --price 6.50
python3 skills/founder-plan/compile.py --dir founder`}</Code>
      <Table head={["Tool", "Used by", "What it does"]} rows={TOOLS} />
      <p>
        Want to check the tools work? The repo includes tests you can run with{" "}
        <code>python3 -m unittest discover -s tests -v</code>.
      </p>

      <H id="fine-print">What should you know before trusting it?</H>
      <Table
        head={["Thing to know", "What it means for you"]}
        rows={[
          [<strong>The board isn’t really Hormozi, Thiel or Jobs</strong>, "It uses short summaries of ideas from $100M Offers, Zero to One and Isaacson’s Steve Jobs biography. It never speaks as them, quotes them or says they endorse anything, and the project isn’t connected to any of them."],
          [<strong>The 100 buyers are simulated, not real</strong>, "Great for finding objections, customer groups and wording cheaply. But AI tends to be agreeable, so treat the buy rate as the best case, and check big decisions with real people. Never use panel answers as testimonials."],
          [<strong>The numbers depend on your inputs</strong>, "The CFO marks every guess as an estimate and asks for real quotes. Check costs with suppliers, and business structure, payroll and tax with an accountant."],
          [<strong>Research uses public sources</strong>, "Every competitor, price and review comes with a link. Nothing is invented, and it doesn’t scrape sites that forbid it."],
          [<strong>It’s not professional advice</strong>, "Permits, trademarks and claims depend on where you live. The skills tell you what to check and where, and a professional confirms it."],
        ]}
      />

      <H id="faq">FAQ</H>
      <H as="h3" id="faq-free">Is the Founder skill really free?</H>
      <p>
        Yes. It’s MIT-licensed, with no signup and no API key. Claude itself
        may need a paid plan for Claude Code, depending on your account.
      </p>
      <H as="h3" id="faq-code">Do I need to know how to code?</H>
      <p>
        No. Paste the repo link into Claude with “install skill” and Claude
        sets it up. Then you just talk to each skill in plain words.
      </p>
      <H as="h3" id="faq-real">
        Are the board members really Hormozi, Thiel and Jobs?
      </H>
      <p>
        No. Each board member is an AI applying one published framework:
        Offers, Monopoly or Product. It never pretends to be the author.
      </p>
      <H as="h3" id="faq-panel">Can I trust the panel’s buy rate?</H>
      <p>
        Treat it as the best case, not a forecast. Use it to find objections,
        then test with real people. <code>/founder-launch</code> starts with
        exactly that kind of cheap real-world test.
      </p>
      <H as="h3" id="faq-one">Can I run just one skill?</H>
      <p>
        Yes. <code>/founder-cfo</code> on your numbers or{" "}
        <code>/founder-consumer --quick</code> on a rough idea are good places
        to start.
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
          . This post is a software setup guide, not business, legal or
          financial advice.{" "}
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
          <a href={REPO} target="_blank" rel="noopener">
            The Founder skill (README)
          </a>
          , GitHub, retrieved 2026-11-12. All figures for the matcha café
          example and the install steps come from this repository.
        </small>
      </p>
      <div className="gz-box gz-cta">
        <p>
          <strong>Ready to test your idea?</strong> The full skill pack is free
          on GitHub.
        </p>
        <a
          className="gz-btn gz-btn--primary"
          href={REPO}
          target="_blank"
          rel="noopener"
        >
          Get the skill on GitHub
        </a>
      </div>
    </GuideLayout>
  );
}
