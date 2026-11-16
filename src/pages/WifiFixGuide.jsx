import GuideLayout, { Code } from "../components/GuideLayout.jsx";

// The prompt exactly as written. Don't reword it: readers copy this.
const PROMPT = `My WiFi is slow. I pay for [X] Mbps. Find out why and fix it.
Start by making a to-do list of these 7 steps and tick them off as you go. Explain everything in plain words and show results in short tables.
1. Run a speed test. Show a table of what I pay for vs what I'm actually getting, and what % of my plan that is. Also measure my ping and jitter.
2. Check this computer: which Wi-Fi band I'm on (2.4 or 5 GHz), my DNS, VPN and power saving settings. Then show a table of the apps using the internet in the background right now: the app, how much it's using, and what it's doing.
3. Check my Wi-Fi signal strength and which channel I'm on.
4. Find the devices on my network. Show a table with name, type and maker where you can tell. Point out the ones that don't look like mine, then ask me which ones to keep, with options I can click.
5. Scan the nearby Wi-Fi networks. Show a table of each network's channel and signal, tell me how many share my channel, and which channel is emptiest.
6. Put every fix in one list, grouped into: On this computer, On my router, and Devices on my Wi-Fi, with how many changes are in each group. Then ask me with clickable options: Yes, make all of them / Let me choose / Not now. Don't change anything before I answer.
7. If I say yes, first write down the current value of everything you'll change so I can undo it. Then make the changes, run the same speed test again, and show a before/after table with download, ping and jitter.
Rules: use the tools already on my computer where you can. If you need an admin password or a permission, ask me. For router changes, open my router's admin page and let me type the password myself. If my router can only be changed in my provider's app, give me exact steps instead. Never pause, quit or block anything without my yes.`;

// Public images from Wikimedia Commons (credited on the page).
const ROUTER_IMG =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Wi-fi_router.jpg/960px-Wi-fi_router.jpg";
const ROUTER_PAGE = "https://commons.wikimedia.org/wiki/File:Wi-fi_router.jpg";
const commons = (file) => `https://commons.wikimedia.org/wiki/File:${file}`;
const CHANNELS_IMG =
  "https://thumb.wikimedia.org/wikipedia/commons/thumb/7/76/Wifi-channels.svg/960px-Wifi-channels.svg.png";
const PHOTOS = [
  {
    src: "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/bb/Microwave_Oven.jpg/960px-Microwave_Oven.jpg",
    file: "Microwave_Oven.jpg",
    credit: "Srini297, CC BY-SA 4.0",
    alt: "A microwave oven on a kitchen counter",
    title: "Microwaves and 2.4 GHz",
    text: "A running microwave leaks noise on the same band as 2.4 GHz Wi-Fi. If calls drop when someone heats lunch, move the router away or use 5 GHz.",
  },
  {
    src: "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/cf/Mesh_WiFi_System_Router_%2850551414866%29.jpg/960px-Mesh_WiFi_System_Router_%2850551414866%29.jpg",
    file: "Mesh_WiFi_System_Router_(50551414866).jpg",
    credit: "Haydn Blackey, CC BY-SA 2.0",
    alt: "A white mesh Wi-Fi unit on a shelf",
    title: "Thick walls? Add a mesh point",
    text: "This one went into a house with thick Victorian walls. Put the second unit halfway between the router and the dead room, not inside the dead room.",
  },
];

// Our own drawing: no public floor-plan diagram of Wi-Fi in a home exists on Commons.
// One floor plan: rooms, a router, and signal rings that fade with distance.
function Plan({ x, rx, ry, good }) {
  const id = good ? "good" : "bad";
  return (
    <g transform={`translate(${x} 0)`}>
      <clipPath id={`house-${id}`}>
        <rect x="10" y="40" width="280" height="200" rx="6" />
      </clipPath>
      <g clipPath={`url(#house-${id})`}>
        <rect x="10" y="40" width="280" height="200" fill="var(--paper)" />
        {[150, 110, 75, 42].map((r, i) => (
          <circle key={r} cx={rx} cy={ry} r={r} fill="var(--yellow)" opacity={0.16 + i * 0.14} />
        ))}
      </g>
      {/* walls */}
      <g stroke="var(--ink)" strokeWidth="4" fill="none" strokeLinecap="round">
        <rect x="10" y="40" width="280" height="200" rx="6" />
        <path d="M150 40v70M150 150v90M10 140h100M190 140h100" />
      </g>
      <text x="150" y="26" textAnchor="middle" className="gz-house__title">
        {good ? "✓ Centre of the home, up high" : "✗ Corner, low, in a cupboard"}
      </text>
      <text x="22" y="62" className="gz-house__room">Bedroom</text>
      <text x="278" y="62" textAnchor="end" className="gz-house__room">Office</text>
      <text x="22" y="228" className="gz-house__room">Kitchen</text>
      <text x="278" y="228" textAnchor="end" className="gz-house__room">Living</text>
      {/* router */}
      <rect x={rx - 12} y={ry - 7} width="24" height="14" rx="3" fill="var(--ink)" />
      <path d={`M${rx - 7} ${ry - 7}l-4 -10M${rx + 7} ${ry - 7}l4 -10`} stroke="var(--ink)" strokeWidth="2.5" strokeLinecap="round" />
      {good ? (
        <text x="150" y="258" textAnchor="middle" className="gz-house__note">
          Every room gets a usable signal
        </text>
      ) : (
        <>
          <text x="232" y="96" textAnchor="middle" className="gz-house__dead">dead zone</text>
          <text x="150" y="258" textAnchor="middle" className="gz-house__note">
            Far rooms get little or no signal
          </text>
        </>
      )}
    </g>
  );
}

const icon = (name, hash) =>
  `https://upload.wikimedia.org/wikipedia/commons/${hash}/Tabler-icons_${name}.svg`;

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

const STEPS = [
  ["gauge", "3/32", "Speed test", "What you pay for vs what you get, plus ping and jitter."],
  ["device-laptop", "4/43", "Check this computer", "Wi-Fi band, DNS, VPN, power saving and background apps."],
  ["antenna-bars-5", "0/06", "Signal and channel", "How strong your Wi-Fi is and which channel it uses."],
  ["devices", "7/7a", "Who’s on your Wi-Fi", "Every device, with the strange ones flagged for you."],
  ["radar", "e/e8", "Scan the neighbours", "Nearby networks, how crowded your channel is, the emptiest one."],
  ["list-check", "d/d3", "One list of fixes", "Grouped by computer, router and devices. Nothing changes yet."],
  ["arrows-exchange", "c/cf", "Fix and re-test", "Saves your old settings, makes the changes, shows before vs after."],
];

const toc = [
  { id: "what", title: "What does this prompt do?" },
  { id: "map", title: "The 7 steps at a glance" },
  { id: "prompt", title: "The prompt (copy it)" },
  { id: "use", title: "How do you use it?" },
  { id: "use-x", title: "Fill in your plan speed", sub: true },
  { id: "use-where", title: "Where to paste it", sub: true },
  { id: "causes", title: "What does it usually find?" },
  { id: "physical", title: "What in your home slows Wi-Fi down?" },
  { id: "physical-map", title: "Where to put your router", sub: true },
  { id: "physical-walls", title: "What blocks the signal", sub: true },
  { id: "physical-channels", title: "Why your neighbours matter", sub: true },
  { id: "physical-check", title: "A 2-minute walk-around checklist", sub: true },
  { id: "safe", title: "Is it safe to let Claude change things?" },
  { id: "results", title: "How do you read the results?" },
  { id: "faq", title: "FAQ" },
  { id: "faq-free", title: "Is it free?", sub: true },
  { id: "faq-phone", title: "Can I run it from my phone?", sub: true },
  { id: "faq-undo", title: "What if a fix makes it worse?", sub: true },
  { id: "faq-isp", title: "What if the problem is my provider?", sub: true },
];

export default function WifiFixGuide() {
  return (
    <GuideLayout
      title="Slow WiFi? One Claude Prompt That Finds Why and Fixes It (2026)"
      dek="Copy one prompt into Claude and it runs a speed test, checks your computer, router, signal and neighbours, then fixes what it finds, but only after you say yes."
      date="November 16, 2026"
      iso="2026-11-16"
      read="6 min read"
      toc={toc}
    >
      <figure className="gz-figure">
        <img
          src={ROUTER_IMG}
          alt="A home Wi-Fi router with its antennas up"
          width="960"
          height="720"
          loading="lazy"
        />
        <figcaption>
          Most slow Wi-Fi isn’t your provider’s fault. Photo:{" "}
          <a href={ROUTER_PAGE} target="_blank" rel="noopener">
            Wikimedia Commons
          </a>
          , CC BY-SA 4.0.
        </figcaption>
      </figure>

      <p>
        <strong>
          This guide gives you one prompt that turns Claude into a Wi-Fi
          technician.
        </strong>{" "}
        You tell it what speed you pay for. It tests your connection, checks
        your computer, your signal, the devices on your network and your
        neighbours’ Wi-Fi, then hands you one list of fixes.
      </p>
      <p>
        It doesn’t touch anything until you click yes. And before it changes
        a setting, it writes down the old value so you can put it back.
      </p>
      <div className="gz-box">
        <p>
          <strong>Key takeaways</strong>
        </p>
        <ul>
          <li>No app to install, no repo to clone. Just copy and paste.</li>
          <li>
            7 steps, each with a short table, so you see the problem instead
            of guessing.
          </li>
          <li>
            Every fix waits for your <strong>yes</strong>. Router passwords
            are typed by you, never by Claude.
          </li>
          <li>Ends with a before/after speed test, so you know it worked.</li>
        </ul>
      </div>

      <H id="what">What does this prompt do?</H>
      <p>
        When Wi-Fi feels slow, there are a dozen possible reasons: you’re on
        the slower 2.4 GHz band, a neighbour’s router is shouting on your
        channel, an app is uploading in the background, a VPN is slowing you
        down, or a device you don’t recognise is on your network.
      </p>
      <p>
        Checking all of that by hand takes an evening of searching. This
        prompt makes Claude check each one in order, show you what it found
        in plain words, and only then suggest fixes.
      </p>

      <H id="map">The 7 steps at a glance</H>
      <p>Here’s what Claude does, in order, once you paste the prompt:</p>
      <ol className="gz-steps">
        {STEPS.map(([name, hash, title, text]) => (
          <li key={name}>
            <img src={icon(name, hash)} alt="" width="32" height="32" loading="lazy" />
            <strong>{title}</strong>
            <span>{text}</span>
          </li>
        ))}
      </ol>
      <p>
        <small>
          Icons:{" "}
          <a href="https://commons.wikimedia.org/wiki/Category:Tabler_icons" target="_blank" rel="noopener">
            Tabler Icons
          </a>{" "}
          via Wikimedia Commons, MIT licence.
        </small>
      </p>
      <p>
        Steps 1 to 5 only look. Step 6 is where it stops and asks. Step 7
        only happens if you say yes.
      </p>

      <H id="prompt">The prompt (copy it)</H>
      <p>
        Hit <strong>Copy</strong>, then change <code>[X]</code> to your plan
        speed before you send it.
      </p>
      <Code lang="Prompt">{PROMPT}</Code>

      <H id="use">How do you use it?</H>

      <H as="h3" id="use-x">Fill in your plan speed</H>
      <p>
        Replace <code>[X]</code> with the download speed on your bill, for
        example <code>I pay for 100 Mbps</code>. Not sure? It’s on your
        provider’s app or your last bill. Claude uses it to work out what
        percentage of your plan you’re really getting.
      </p>

      <H as="h3" id="use-where">Where to paste it</H>
      <p>
        Claude needs to run checks on <em>your</em> computer, so use a Claude
        that can reach it:
      </p>
      <Table
        head={["Where", "Does it work?"]}
        rows={[
          [<strong>Claude Code</strong>, "Yes, best. It runs the speed test, network scans and settings checks straight on your machine."],
          [<strong>Claude desktop app</strong>, "Yes, when it has access to your computer (computer use or a connected tool). It asks before each permission."],
          [<strong>Claude on the web or phone</strong>, "Only partly. It can’t test your network from there, but it can still walk you through the steps."],
        ]}
      />
      <p>
        Run it on the computer that feels slow, connected to the Wi-Fi you
        want fixed. Close big downloads first so the speed test is fair.
      </p>

      <H id="causes">What does it usually find?</H>
      <p>
        These are the usual suspects, and the step of the prompt that
        catches each one:
      </p>
      <Table
        head={["Problem", "Caught in", "Typical fix"]}
        rows={[
          [<strong>On 2.4 GHz instead of 5 GHz</strong>, "Step 2", "Join the 5 GHz network. It’s much faster when you’re near the router."],
          [<strong>Crowded channel</strong>, "Steps 3 and 5", "Move your router to the emptiest channel it found."],
          [<strong>Background apps</strong>, "Step 2", "Pause cloud backups, game updates or sync while you work. Only with your yes."],
          [<strong>VPN or slow DNS</strong>, "Step 2", "Turn the VPN off when you don’t need it, or switch to a faster DNS."],
          [<strong>Power saving on Wi-Fi</strong>, "Step 2", "Turn off Wi-Fi power saving so the adapter runs at full speed."],
          [<strong>Weak signal</strong>, "Step 3", "Move closer, lift the router off the floor, or add a mesh point."],
          [<strong>Unknown devices</strong>, "Step 4", "Remove them and change your Wi-Fi password."],
        ]}
      />

      <H id="physical">What in your home slows Wi-Fi down?</H>
      <p>
        The prompt checks everything a computer can see. But some of the
        biggest problems are physical: where the router sits and what’s in
        the way. Claude can’t see your living room, so walk around and check
        these yourself.
      </p>
      <p>
        Wi-Fi is radio waves spreading out from the router in every
        direction, like ripples in a pond. Each wall, floor and big object
        they pass through makes them weaker. Metal and water bounce or soak
        them up almost completely.
      </p>

      <H as="h3" id="physical-map">Where to put your router</H>
      <figure className="gz-figure gz-house">
        <svg
          viewBox="0 0 620 270"
          role="img"
          aria-labelledby="house-title"
        >
          <title id="house-title">
            Two floor plans. On the left, a router in a corner cupboard
            leaves the far rooms in a dead zone. On the right, a router in
            the centre of the home reaches every room.
          </title>
          <Plan x={0} rx={38} ry={188} good={false} />
          <Plan x={320} rx={150} ry={128} good />
        </svg>
        <figcaption>
          The yellow rings are the signal getting weaker with distance. Same
          router, same home, very different coverage. Diagram: samknows.ai.
        </figcaption>
      </figure>
      <p>
        Waves spread out in a circle. Put the router in a corner and half of
        that circle is wasted on the street or your neighbour’s flat. Put it
        in the middle and the whole home sits inside the strong rings.
      </p>
      <ul>
        <li>
          <strong>Central:</strong> as close to the middle of the home as the
          cable allows.
        </li>
        <li>
          <strong>High:</strong> on a shelf or wall mount, at least a metre
          off the floor. Signal spreads out and slightly down.
        </li>
        <li>
          <strong>In the open:</strong> never inside a cupboard, behind the
          TV or under the desk.
        </li>
        <li>
          <strong>Antennas:</strong> if it has two, point one straight up and
          one sideways. That helps phones and laptops held at different
          angles.
        </li>
      </ul>

      <H as="h3" id="physical-walls">What blocks the signal</H>
      <p>From mild to severe, here’s what eats your Wi-Fi:</p>
      <Table
        head={["What’s in the way", "How much it blocks", "What to do"]}
        rows={[
          [<strong>Wood, plasterboard, open doors</strong>, "A little", "Nothing. Wi-Fi passes through fine."],
          [<strong>Glass and windows</strong>, "Some (more if tinted or coated)", "Don’t put the router right against a window."],
          [<strong>Brick and concrete walls</strong>, "A lot per wall", "Count the walls between router and device. Two or more? Consider a mesh point."],
          [<strong>Floors between storeys</strong>, "A lot", "One router rarely covers two floors well. Put it on the floor you use most."],
          [<strong>Water: fish tanks, water heaters, people</strong>, "A lot", "Keep the router out from behind aquariums and boilers."],
          [<strong>Metal: mirrors, fridges, filing cabinets, foil insulation</strong>, "Almost all of it", "Move the router so these aren’t between it and your desk."],
        ]}
      />
      <p>
        One more trap: 5 GHz is faster, but it fades through walls quicker
        than 2.4 GHz. If you’re two rooms away, 2.4 GHz can actually win.
        Step 2 and step 3 of the prompt tell you which band you’re on and how
        strong it is.
      </p>
      <div className="gz-photos">
        {PHOTOS.map((p) => (
          <figure key={p.file}>
            <img src={p.src} alt={p.alt} loading="lazy" />
            <figcaption>
              <strong>{p.title}</strong>
              <span>{p.text}</span>
              <small>
                Photo:{" "}
                <a href={commons(p.file)} target="_blank" rel="noopener">
                  {p.credit}
                </a>
              </small>
            </figcaption>
          </figure>
        ))}
      </div>
      <p>
        Cordless home phones, baby monitors, Bluetooth speakers and some
        wireless cameras also use 2.4 GHz, so keep them a little away from
        the router too.
      </p>

      <H as="h3" id="physical-channels">Why your neighbours matter</H>
      <figure className="gz-figure">
        <img
          src={CHANNELS_IMG}
          alt="Diagram of the 14 Wi-Fi channels in the 2.4 GHz band, each a curve 22 MHz wide. Only channels 1, 6 and 11 do not overlap."
          loading="lazy"
        />
        <figcaption>
          The 2.4 GHz band. Each arch is one channel. Diagram:{" "}
          <a href={commons("Wifi-channels.svg")} target="_blank" rel="noopener">
            Michael Gauthier, Wikimedia Commons
          </a>
          , CC BY-SA 3.0.
        </figcaption>
      </figure>
      <p>
        Walls don’t stop your neighbours’ Wi-Fi either. In the 2.4 GHz band,
        each channel is wide enough to spill into the ones next to it. Only{" "}
        <strong>1, 6 and 11</strong> sit apart without overlapping, the three
        solid arches above. If your router is on channel 3 and a neighbour is
        on 1, you both slow each other down.
      </p>
      <p>
        Step 5 of the prompt scans the networks around you and tells you the
        emptiest channel. On 2.4 GHz, it should almost always be 1, 6 or 11.
      </p>

      <H as="h3" id="physical-check">A 2-minute walk-around checklist</H>
      <ol>
        <li>Is the router out in the open, not in a cupboard or behind the TV?</li>
        <li>Is it at least a metre off the floor?</li>
        <li>Is it roughly central, or pushed into a corner?</li>
        <li>Is there a mirror, fridge, fish tank or metal cabinet between it and where you work?</li>
        <li>Is it at least a couple of metres from the microwave?</li>
        <li>How many brick or concrete walls are between you and it? Two or more means a mesh point is worth it.</li>
        <li>Are the cables firmly clicked in, and are the lights normal (no red or orange)?</li>
      </ol>
      <p>
        Fix what you can, then run the prompt. Its before/after speed test
        shows how much the move helped.
      </p>

      <H id="safe">Is it safe to let Claude change things?</H>
      <p>The prompt has its safety rules written in. Here’s what they mean:</p>
      <Table
        head={["Rule in the prompt", "What it means for you"]}
        rows={[
          [<strong>“Don’t change anything before I answer”</strong>, "Steps 1 to 6 only read. Nothing changes until you click Yes, make all of them or pick fixes with Let me choose."],
          [<strong>“Write down the current value”</strong>, "Before each change, Claude notes the old setting. If something feels worse, ask it to undo."],
          [<strong>“Let me type the password myself”</strong>, "Claude opens your router page, and you type the password. It never sees or stores it."],
          [<strong>“Ask me” for admin access</strong>, "If Windows or macOS needs admin rights, you approve it yourself."],
          [<strong>“Never pause, quit or block anything without my yes”</strong>, "No app is closed and no device is kicked off without you saying so."],
          [<strong>Provider-app routers</strong>, "If your router is only managed in your provider’s app, Claude gives you exact steps to tap instead of guessing."],
        ]}
      />

      <H id="results">How do you read the results?</H>
      <Table
        head={["Number", "What it means", "Good to aim for"]}
        rows={[
          [<strong>Download</strong>, "How fast things come to you: videos, downloads, web pages.", "70% or more of your plan on Wi-Fi"],
          [<strong>Ping</strong>, "How long one message takes to go and come back.", "Under 30 ms for calls and games"],
          [<strong>Jitter</strong>, "How much the ping jumps around. High jitter makes calls choppy.", "Under 10 ms"],
          [<strong>Signal</strong>, "How loud your router sounds to your computer, in dBm. Closer to 0 is better.", "-50 to -67 dBm"],
        ]}
      />
      <p>
        Wi-Fi never quite reaches your full plan speed, even when everything
        is perfect. A cable to the router is the only way to see 100%.
      </p>

      <H id="faq">FAQ</H>
      <H as="h3" id="faq-free">Is it free?</H>
      <p>
        The prompt is free to copy. You only need Claude, and Claude Code may
        need a paid plan depending on your account.
      </p>
      <H as="h3" id="faq-phone">Can I run it from my phone?</H>
      <p>
        Not fully. A phone chat can’t scan your network. Run it on a computer
        with Claude Code or the desktop app.
      </p>
      <H as="h3" id="faq-undo">What if a fix makes it worse?</H>
      <p>
        Ask Claude to undo it. Step 7 makes it write down every old value
        before it changes anything, so it can put each one back.
      </p>
      <H as="h3" id="faq-isp">What if the problem is my provider?</H>
      <p>
        If everything on your side checks out and the speed is still low,
        Claude will say so. Then you have a speed-test table to show your
        provider when you complain.
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
          . Only run network scans on Wi-Fi you own or manage.{" "}
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
      <div className="gz-box gz-cta">
        <p>
          <strong>Ready to fix your Wi-Fi?</strong> Copy the prompt and paste
          it into Claude.
        </p>
        <a className="gz-btn gz-btn--primary" href="#prompt">
          Copy the prompt
        </a>
      </div>
    </GuideLayout>
  );
}
