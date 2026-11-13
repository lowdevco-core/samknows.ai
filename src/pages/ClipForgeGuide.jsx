import GuideLayout, { Code } from "../components/GuideLayout.jsx";

const REPO = "https://github.com/lowdevco/Clip-Forge";

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
  { id: "what", title: "What is ClipForge?" },
  { id: "how", title: "How does it pick the best moments?" },
  { id: "score", title: "How is each clip scored?", sub: true },
  { id: "install", title: "How do you install ClipForge?" },
  { id: "install-code", title: "In Claude Code (best)", sub: true },
  { id: "install-chat", title: "In Claude chat or the desktop app", sub: true },
  { id: "needs", title: "What does your computer need?" },
  { id: "commands", title: "Which command should you use?" },
  { id: "use", title: "How do you make your first Shorts?" },
  { id: "use-code", title: "From a YouTube link (Claude Code)", sub: true },
  { id: "use-chat", title: "From a video file (Claude chat)", sub: true },
  { id: "styles", title: "Which edit style should you pick?" },
  { id: "editor", title: "What does the editor actually do?" },
  { id: "recipes", title: "Ready-to-copy prompts" },
  { id: "fine-print", title: "What should you know before posting?" },
  { id: "faq", title: "FAQ" },
  { id: "faq-free", title: "Is ClipForge free?", sub: true },
  { id: "faq-time", title: "How long does it take?", sub: true },
  { id: "faq-ml", title: "Does it really do Malayalam captions?", sub: true },
  { id: "faq-own", title: "Can I clip someone else’s video?", sub: true },
];

const c = (cmd) => <code>/{cmd}</code>;

const COMMANDS = [
  [c("clip-gameplay"), "Game recordings and streams", "Looks for action: sound spikes, fast motion and kill-feed changes. Handles a facecam by stacking it on top."],
  [c("clip-podcast"), "Podcasts, interviews, talking to camera", "Reads the transcript. The moment is in the words: a strong claim, a story, a disagreement."],
  [c("clip-sports"), "Matches and broadcasts", "Watches the scoreboard and crowd noise to catch goals, wickets, points and finishes."],
  [c("clip-tutorial"), "How-to videos, lessons, screen recordings", "Cuts one complete idea per clip, so each Short teaches something on its own."],
  [c("clip-video"), "Everything else", "Vlogs, reviews, events, travel, reactions."],
  [c("clip-edit"), "A clip you’ve already cut", "Skips the hunt. You give it the clip (or the times) and it only does the edit."],
];

const SCORE = [
  [<strong>Hook</strong>, "30", "The first 3 seconds make a stranger stop scrolling: a bold claim, a question, or action already happening."],
  [<strong>Payoff</strong>, "25", "It delivers: the answer, the punchline, the kill, the fail."],
  [<strong>Stands alone</strong>, "20", "Makes sense to someone who never saw the full video."],
  [<strong>Emotion</strong>, "15", "Surprise, laughter, tension, awe or a strong disagreement."],
  [<strong>Pace</strong>, "10", "No dead stretch, and the length fits the content."],
];

const STYLES = [
  [<code>hype</code>, "Gameplay, sports", "Vivid colour, zoom hits with shake and flash, a bass thump on big moments, a bold all-caps headline and a progress bar."],
  [<code>premium</code>, "Most videos (the default)", "Punchy colour, a slow push-in and zoom hits with a soft thump."],
  [<code>story</code>, "Podcasts, talking to camera", "Soft colour, zoom cuts between sentences and animated captions."],
  [<code>clean</code>, "Business, tutorials", "Soft colour and animated text. Nothing else."],
  [<code>raw</code>, "When you want it untouched", "A plain cut with a simple headline."],
];

const EDITOR = [
  [<strong>Framing</strong>, "Fills the 9:16 screen. Full screen, follow the speaker, two speakers stacked, facecam on top, or a blurred background behind the original."],
  [<strong>Speaker tracking</strong>, "Spots camera cuts, finds the faces in each shot and keeps whoever is talking in frame."],
  [<strong>Big moments</strong>, "Zoom hit, shake, flash or slow motion, plus a pop-up word like “GOAL” or “CLUTCH”."],
  [<strong>Headline</strong>, "Animated, with your key words in an accent colour."],
  [<strong>Captions</strong>, <>Word by word, in four looks: <code>bold</code>, <code>clean</code>, <code>neon</code> and <code>fire</code>. English and Malayalam.</>],
  [<strong>Sound</strong>, "Evens out the volume and adds thump, whoosh and pop effects. The skill makes these sounds itself, so there’s no copyright music to worry about."],
  [<strong>Finishing touches</strong>, "Outro tag, channel watermark, progress bar and trimmed silences."],
  [<strong>Safe area</strong>, "Keeps text clear of the like, comment and share buttons on Shorts, Reels and TikTok."],
];

export default function ClipForgeGuide() {
  return (
    <GuideLayout
      title="ClipForge Guide: Turn Any YouTube Video into Edited Shorts with Claude (2026)"
      dek="Paste a link, pick your favourite moments, and get vertical clips that look edited, not just cut. How to install the free ClipForge skill and make your first Shorts, Reels and TikToks."
      date="November 13, 2026"
      iso="2026-11-13"
      read="8 min read"
      toc={toc}
    >
      <p>
        <strong>
          ClipForge is a free Claude skill that turns a long video into
          finished, ready-to-post Shorts.
        </strong>{" "}
        You give it a YouTube link or a video file. It finds the best moments,
        scores them, waits for you to pick, then renders each one as a
        1080×1920 clip with real editing on top.
      </p>
      <p>
        Most “AI clipping” tools just chop a video and slap captions on it.
        ClipForge does what an editor would do: fills the screen, grades the
        colour, punches in on the big moment, adds sound effects and animates
        the headline and captions. I built it, and below I’ll show you how to
        set it up and get good clips out of it.
      </p>
      <div className="gz-box">
        <p>
          <strong>Key takeaways</strong>
        </p>
        <ul>
          <li>
            Six commands, one per kind of video: gameplay, podcast, sports,
            tutorial, everything else, and edit-only.
          </li>
          <li>
            It finds 8 to 12 moments and scores each out of 100.{" "}
            <strong>Nothing renders until you choose.</strong>
          </li>
          <li>
            Five edit styles, from <code>hype</code> to <code>raw</code>, and
            four caption looks in English and Malayalam.
          </li>
          <li>
            Each clip comes with a title, caption and hashtags, ready to post.
          </li>
          <li>Free and MIT-licensed.</li>
        </ul>
      </div>

      <H id="what">What is ClipForge?</H>
      <p>
        A “skill” is a set of instructions plus tools that Claude follows for
        one kind of job. ClipForge’s job is long video in, a handful of edited
        vertical clips out. Here’s the whole flow:
      </p>
      <ol>
        <li>
          <strong>Gets the video.</strong> Downloads it from YouTube (in Claude
          Code) or uses the file you attach.
        </li>
        <li>
          <strong>Finds the moments.</strong> 8 to 12 candidates, each 20 to 60
          seconds (action clips can be as short as 12).
        </li>
        <li>
          <strong>Shows you a scored table and waits.</strong> You reply with
          your picks, like <code>top 3</code> or <code>1, 4, 7</code>.
        </li>
        <li>
          <strong>Edits and renders</strong> the ones you chose.
        </li>
        <li>
          <strong>Writes a title, caption and hashtags</strong> for each clip.
        </li>
      </ol>
      <p>
        That pause at step 3 matters. Rendering is the slow part, so you never
        wait for clips you’d throw away.
      </p>

      <H id="how">How does it pick the best moments?</H>
      <p>
        It depends on the video. A podcast’s best moment is in what people
        say. A game’s best moment is in what happens on screen. So ClipForge
        looks in different places:
      </p>
      <ul>
        <li>
          <strong>Talk (podcasts, tutorials):</strong> it makes a word-timed
          transcript and reads the whole thing, looking for strong claims,
          stories and punchlines.
        </li>
        <li>
          <strong>Action (gameplay, sports):</strong> it ranks stretches by
          sound and motion, finds sudden loud moments like a shout or a crowd
          roar, and watches the kill feed or scoreboard for changes. Then
          Claude looks at the frames to see what actually happened.
        </li>
      </ul>

      <H as="h3" id="score">How is each clip scored?</H>
      <p>
        Every candidate gets a score out of 100, split across five things. It’s
        the same checklist a good Shorts editor runs in their head:
      </p>
      <Table head={["Part", "Points", "What earns them"]} rows={SCORE} />
      <p>
        The scores are meant to be honest. If a long video only has three
        strong moments, it says so instead of padding the list.
      </p>

      <H id="install">How do you install ClipForge?</H>

      <H as="h3" id="install-code">In Claude Code (best)</H>
      <p>Paste this as a message in Claude Code:</p>
      <Code>{`Install the ClipForge skill from ${REPO}`}</Code>
      <p>
        Claude downloads the repo and runs the installer, asking before it
        runs any commands. When it’s done, start a new session so the skill
        loads.
      </p>
      <p>Prefer doing it yourself? Two commands:</p>
      <Code lang="Terminal">{`git clone ${REPO}
python Clip-Forge/tools/build.py --install`}</Code>

      <H as="h3" id="install-chat">In Claude chat or the desktop app</H>
      <ol>
        <li>
          Download <code>clip-forge.zip</code> from the{" "}
          <a href={`${REPO}/releases/latest`} target="_blank" rel="noopener">
            latest release
          </a>
          .
        </li>
        <li>
          In Claude, open <strong>Settings</strong>, find{" "}
          <strong>Skills</strong> and upload the zip.
        </li>
        <li>
          On the same page, make sure <strong>code execution and file
          creation</strong> is switched on. Without it, Claude can’t render
          video.
        </li>
      </ol>

      <H id="needs">What does your computer need?</H>
      <p>
        This only matters for Claude Code, because there the tools run on your
        own machine. Claude chat runs everything in its own workspace, so you
        can skip this section if that’s what you use.
      </p>
      <Table
        head={["You need", "How to get it"]}
        rows={[
          [<strong>Python 3.9 or newer</strong>, <a href="https://www.python.org/downloads/" target="_blank" rel="noopener">python.org</a>],
          [<strong>ffmpeg (full build)</strong>, <>Windows: <code>winget install Gyan.FFmpeg</code></>],
          [<strong>Python packages</strong>, <code>pip install opencv-python numpy yt-dlp faster-whisper</code>],
          [<strong>Visual C++ runtime (Windows only)</strong>, "Needed for turning speech into text."],
        ]}
      />
      <p>
        Not sure what you have? You don’t need to check by hand. The first
        time you use it, Claude runs a setup check and tells you exactly what
        to install. You can run that check yourself too:
      </p>
      <Code lang="Terminal">{`python scripts/check_setup.py`}</Code>

      <H id="commands">Which command should you use?</H>
      <p>
        Pick the one that matches your video. The command tells ClipForge where
        to look for the good parts.
      </p>
      <Table head={["Command", "Best for", "How it hunts"]} rows={COMMANDS} />
      <p>
        No command? Just ask for shorts in plain words. ClipForge looks at the
        title and a few frames and works out what kind of video it is. If it
        still can’t tell, it asks you in one line.
      </p>
      <p>Anything you type after the link is treated as a request:</p>
      <Code>{`/clip-gameplay <link> top 3, neon captions, watermark @myname`}</Code>

      <H id="use">How do you make your first Shorts?</H>

      <H as="h3" id="use-code">From a YouTube link (Claude Code)</H>
      <p>Claude Code downloads the video itself, so the link is all it needs.</p>
      <ol>
        <li>
          Type a command with your link, for example{" "}
          <code>/clip-podcast https://youtu.be/...</code>
        </li>
        <li>
          Wait for the scored table. Reply with your picks, for example{" "}
          <code>top 3</code>.
        </li>
        <li>
          Find the finished clips in the <code>shorts</code> folder Claude
          points you to.
        </li>
      </ol>
      <p>
        Tip: for videos over about 90 minutes, Claude will ask whether you want
        the whole thing or just a section. Picking a section is much faster.
      </p>

      <H as="h3" id="use-chat">From a video file (Claude chat)</H>
      <p>
        Claude chat can’t download from YouTube, so you give it the file
        instead.
      </p>
      <ol>
        <li>
          Open{" "}
          <a href="https://vidssave.com" target="_blank" rel="noopener">
            vidssave.com
          </a>
          , paste the YouTube link and download it as MP4. 720p is enough.
        </li>
        <li>
          Attach the file to a new chat (up to 500 MB) and type a command, for
          example <code>/clip-podcast</code>.
        </li>
        <li>
          Wait for the scored table, then reply with your picks, for example{" "}
          <code>top 3</code>.
        </li>
        <li>Download the finished clips Claude sends back.</li>
      </ol>

      <H id="styles">Which edit style should you pick?</H>
      <p>
        Say the style’s name in your message to use it. Each command already
        has a sensible default, so you only need this when you want a
        different feel.
      </p>
      <Table head={["Style", "Good for", "The look"]} rows={STYLES} />
      <p>
        Not sure? Leave it out. <code>premium</code> works for almost
        anything.
      </p>

      <H id="editor">What does the editor actually do?</H>
      <p>
        This is what makes the clips look edited rather than just cut out:
      </p>
      <Table head={["Feature", "What it does"]} rows={EDITOR} />

      <H id="recipes">Ready-to-copy prompts</H>
      <p>Swap in your own link and handle:</p>
      <Code>{`/clip-podcast https://youtu.be/... top 3, story style, bold captions

/clip-gameplay https://youtu.be/... hype, neon captions, watermark @myname

/clip-sports https://youtu.be/... only the goals, slow motion on each

/clip-tutorial https://youtu.be/... clean style, 45 seconds max

/clip-edit my-clip.mp4 premium, fire captions, Malayalam`}</Code>

      <H id="fine-print">What should you know before posting?</H>
      <Table
        head={["Thing to know", "What it means for you"]}
        rows={[
          [<strong>Check the speaker tracking</strong>, "It guesses who’s talking from mouth movement. It can pick the wrong person in a busy shot, so watch the preview before posting."],
          [<strong>Kill feeds and scoreboards</strong>, "ClipForge spots that something changed on screen. Claude then reads the frame to work out what it was."],
          [<strong>Malayalam captions need a read-through</strong>, "Speech-to-text is less accurate in Malayalam than English. Skim the captions before you post."],
          [<strong>Only clip videos you’re allowed to use</strong>, "Your own videos, or ones you have permission to reuse. Re-uploading someone else’s content needs the owner’s OK."],
          [<strong>Nobody can promise views</strong>, "The edits follow what good editors do, so your clips look finished. Whether they go viral is still up to the content."],
        ]}
      />

      <H id="faq">FAQ</H>
      <H as="h3" id="faq-free">Is ClipForge free?</H>
      <p>
        Yes. It’s MIT-licensed, with no signup and no API key. Claude itself
        may need a paid plan, depending on your account.
      </p>
      <H as="h3" id="faq-time">How long does it take?</H>
      <p>
        Finding moments in a 17-minute 1080p video takes a couple of minutes.
        Transcribing a long podcast on a small computer can take about as long
        as the video itself, so Claude runs it in the background and tells
        you. Rendering only happens for the clips you pick.
      </p>
      <H as="h3" id="faq-ml">Does it really do Malayalam captions?</H>
      <p>
        Yes, with a proper Malayalam font bundled in. Add{" "}
        <code>Malayalam</code> to your message. Just read them over before
        posting.
      </p>
      <H as="h3" id="faq-own">Can I clip someone else’s video?</H>
      <p>
        Only with their permission. ClipForge will remind you once if it looks
        like someone else’s channel, then do what you asked.
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
          . This post is a software setup guide.{" "}
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
          Sources: lowdevco,{" "}
          <a href={REPO} target="_blank" rel="noopener">
            ClipForge (README and SKILL.md)
          </a>
          , GitHub, retrieved 2026-11-13.
        </small>
      </p>
      <div className="gz-box gz-cta">
        <p>
          <strong>Ready to make your first Shorts?</strong> The skill is free
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
