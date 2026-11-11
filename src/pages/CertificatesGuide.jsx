import GuideLayout from "../components/GuideLayout.jsx";

const CERTS = [
  {
    id: "anthropic-academy",
    name: "Anthropic Academy",
    logo: "https://www.google.com/s2/favicons?domain=anthropic.com&sz=128",
    url: "https://anthropic.skilljar.com",
    topics: "Claude, Claude Code, the Claude API, MCP, AI fluency",
    about:
      "Anthropic's own free course library, from the company that makes Claude. It covers using Claude well, building with the Claude API, Claude Code and the Model Context Protocol (MCP), plus an AI Fluency track for non-developers.",
    get: "A certificate of completion for each course you finish.",
  },
  {
    id: "nvidia-dli",
    name: "NVIDIA Deep Learning Institute",
    logo: "https://www.google.com/s2/favicons?domain=nvidia.com&sz=128",
    url: "https://www.nvidia.com/en-us/training/",
    topics: "Generative AI, LLMs, RAG, deep learning, CUDA",
    about:
      "NVIDIA's training arm. Alongside paid instructor-led workshops, it has a set of free self-paced courses on generative AI, building RAG agents, deep learning basics and accelerated computing. Filter the catalogue for free courses.",
    get: "A certificate of completion for finished courses. Paid courses and NVIDIA's professional certifications cost extra.",
  },
  {
    id: "meta-blueprint",
    name: "Meta Blueprint",
    logo: "https://www.google.com/s2/favicons?domain=meta.com&sz=128",
    url: "https://www.facebook.com/business/learn",
    topics: "Facebook and Instagram ads, social media marketing",
    about:
      "Meta's free e-learning for marketers: how to run Facebook and Instagram ads, measure results, grow a page and use Meta's business tools. Short, practical lessons you can finish in an afternoon.",
    get: "Free courses and learning paths. The official Meta Certification exams are paid, so add the course names, not “Meta Certified”, unless you pass an exam.",
  },
  {
    id: "google-cloud-skills-boost",
    name: "Google Cloud Skills Boost",
    logo: "https://www.google.com/s2/favicons?domain=cloud.google.com&sz=128",
    url: "https://www.cloudskillsboost.google",
    topics: "Google Cloud, generative AI, Gemini, data, Kubernetes",
    about:
      "Google's hands-on learning platform for Google Cloud. You work in real cloud consoles through guided labs, and many courses, including the beginner generative AI path, are free.",
    get: "Shareable skill badges for completed paths. Some labs use credits, and Google Cloud certification exams are paid.",
  },
  {
    id: "deloitte-forage",
    name: "Deloitte on Forage",
    logo: "https://www.google.com/s2/favicons?domain=deloitte.com&sz=128",
    url: "https://www.theforage.com",
    topics: "Job simulations: tech, data analytics, cyber, consulting",
    about:
      "Forage hosts free virtual job simulations built by real companies, Deloitte among them. You do tasks like the ones a new hire would do, which gives you something concrete to talk about in interviews.",
    get: "A certificate of completion for each simulation, plus project work you can describe on your resume.",
  },
  {
    id: "ibm-skillsbuild",
    name: "IBM SkillsBuild",
    logo: "https://commons.wikimedia.org/wiki/Special:FilePath/IBM_logo.svg",
    url: "https://skillsbuild.org",
    topics: "AI, cybersecurity, data, cloud, professional skills",
    about:
      "IBM's free learning platform for students and career changers. Courses range from AI fundamentals and data analysis to cybersecurity and workplace skills.",
    get: "Digital credentials (badges) you can verify and share on LinkedIn.",
  },
  {
    id: "microsoft-learn",
    name: "Microsoft Learn",
    logo: "https://www.google.com/s2/favicons?domain=microsoft.com&sz=128",
    url: "https://learn.microsoft.com",
    topics: "Azure, AI, Power Platform, Microsoft 365, security",
    about:
      "Microsoft's free training site, with thousands of modules and learning paths. Look for Microsoft Applied Skills: short, hands-on assessments that prove one specific skill.",
    get: "Free Applied Skills credentials, and progress trophies for modules. Full Microsoft Certification exams are paid.",
  },
  {
    id: "aws-skill-builder",
    name: "AWS Skill Builder",
    logo: "https://www.google.com/s2/favicons?domain=aws.amazon.com&sz=128",
    url: "https://skillbuilder.aws",
    topics: "Cloud basics, AWS services, generative AI, machine learning",
    about:
      "Amazon's training platform, with hundreds of free digital courses. AWS Cloud Practitioner Essentials is a good free starting point if you're new to cloud.",
    get: "Free courses, and digital badges for some learning plans. Labs need a subscription, and AWS Certification exams are paid.",
  },
  {
    id: "deeplearning-ai",
    name: "DeepLearning.AI short courses",
    logo: "https://www.google.com/s2/favicons?domain=deeplearning.ai&sz=128",
    url: "https://www.deeplearning.ai/short-courses",
    topics: "Prompting, AI agents, RAG, LLM apps",
    about:
      "Andrew Ng's DeepLearning.AI runs one- to two-hour short courses with AI companies like OpenAI, Anthropic and LangChain. Each one teaches a single practical skill with code you can run.",
    get: "The courses are free to take. Check each course page for whether a certificate is included, as some need a paid membership.",
  },
  {
    id: "simplilearn-skillup",
    name: "Simplilearn SkillUp",
    logo: "https://www.google.com/s2/favicons?domain=simplilearn.com&sz=128",
    url: "https://www.simplilearn.com/skillup-free-online-courses",
    topics: "AI, data science, programming, digital marketing, cloud",
    about:
      "Simplilearn's free tier, with beginner courses across tech and business topics. A good place to fill a gap quickly, like Python basics or an intro to machine learning.",
    get: "A free certificate of completion when you finish a course.",
  },
  {
    id: "freecodecamp",
    name: "freeCodeCamp",
    logo: "https://www.google.com/s2/favicons?domain=freecodecamp.org&sz=128",
    url: "https://www.freecodecamp.org/learn",
    topics: "Web development, JavaScript, Python, data analysis",
    about:
      "A non-profit that teaches coding for free. Each certification track has you build real projects, so you finish with a portfolio as well as a certificate.",
    get: "Free, verifiable certifications once you complete the required projects.",
  },
  {
    id: "hubspot-academy",
    name: "HubSpot Academy",
    logo: "https://www.google.com/s2/favicons?domain=hubspot.com&sz=128",
    url: "https://academy.hubspot.com",
    topics: "Inbound marketing, content, email, SEO, sales",
    about:
      "HubSpot's free marketing and sales school. Its certifications, like Inbound Marketing and Content Marketing, are well known in marketing hiring.",
    get: "Free certifications after a course and exam. They expire after a set time, so renew them to keep them on your profile.",
  },
  {
    id: "google-skillshop",
    name: "Google Skillshop",
    logo: "https://www.google.com/s2/favicons?domain=google.com&sz=128",
    url: "https://skillshop.withgoogle.com",
    topics: "Google Analytics, Google Ads, YouTube",
    about:
      "Google's free training for its own business tools. The Google Analytics and Google Ads certifications are a standard ask in digital marketing roles.",
    get: "Free Google certifications after passing an exam. They need renewing periodically.",
  },
  {
    id: "cisco-networking-academy",
    name: "Cisco Networking Academy",
    logo: "https://www.google.com/s2/favicons?domain=netacad.com&sz=128",
    url: "https://www.netacad.com",
    topics: "Cybersecurity, networking, IT, Python",
    about:
      "Cisco's education programme. Its free self-paced courses, like Introduction to Cybersecurity, are a solid first step into IT and security.",
    get: "Certificates of completion and digital badges for free courses. Cisco's CCNA and other certification exams are paid.",
  },
  {
    id: "kaggle-learn",
    name: "Kaggle Learn",
    logo: "https://www.google.com/s2/favicons?domain=kaggle.com&sz=128",
    url: "https://www.kaggle.com/learn",
    topics: "Python, pandas, machine learning, SQL, data visualisation",
    about:
      "Short, free data science courses from Kaggle, Google's data science community. Each one is a few hours of hands-on exercises in a notebook, no setup needed.",
    get: "A free certificate of completion for each course.",
  },
];

const toc = [
  { id: "how", title: "How should you pick?" },
  ...CERTS.map(({ id, name }) => ({ id, title: name })),
  { id: "resume", title: "How do you add them to your resume?" },
  { id: "faq", title: "FAQ" },
];

function Anchor({ id }) {
  return (
    <a href={`#${id}`} className="gz-anchor" aria-hidden="true" tabIndex={-1}>
      ★
    </a>
  );
}

function Cert({ id, name, logo, url, topics, about, get }) {
  return (
    <section className="gz-cert" aria-labelledby={id}>
      <div className="gz-cert__head">
        <img
          className="gz-cert__logo"
          src={logo}
          alt={`${name} logo`}
          width="48"
          height="48"
          loading="lazy"
        />
        <div>
          <h2 id={id}>
            {name}
            <Anchor id={id} />
          </h2>
          <p className="gz-cert__topics">{topics}</p>
        </div>
      </div>
      <p>{about}</p>
      <p>
        <strong>What you get:</strong> {get}
      </p>
      <a
        className="gz-btn gz-btn--primary"
        href={url}
        target="_blank"
        rel="noopener"
      >
        Start learning →
      </a>
    </section>
  );
}

export default function CertificatesGuide() {
  return (
    <GuideLayout
      title="15 Free AI and Tech Certificates to Add to Your Resume (2026)"
      dek="Free courses and certificates from Anthropic, NVIDIA, Google, Microsoft, AWS, IBM and more, with what each one gives you and where to sign up."
      date="November 11, 2026"
      iso="2026-11-11"
      read="9 min read"
      toc={toc}
    >
      <p>
        <strong>
          You don't need to pay for a certificate to make your resume stronger.
        </strong>{" "}
        The companies building AI and cloud tools all run free training, and
        most of it ends with a certificate or badge you can share. Here are 15
        legit free options, what each one teaches, and what you actually get at
        the end.
      </p>

      <div className="gz-box">
        <p>
          <strong>Key takeaways</strong>
        </p>
        <ul>
          <li>
            All 15 have free courses. Several also sell paid exams, and each
            entry says which part is free.
          </li>
          <li>
            For AI skills, start with Anthropic Academy, DeepLearning.AI and
            NVIDIA. For cloud, Google Cloud, AWS and Microsoft.
          </li>
          <li>
            Hands-on proof beats a long list: a Forage job simulation or
            freeCodeCamp project says more than ten quizzes.
          </li>
          <li>
            Add them to a Certifications section and to LinkedIn, with the
            issuer and the month you finished.
          </li>
        </ul>
      </div>

      <h2 id="how">
        How should you pick?
        <Anchor id="how" />
      </h2>
      <p>
        Pick two or three that match the job you want, not fifteen. A marketer
        gets more from Meta Blueprint, HubSpot and Google Skillshop. Someone
        moving into AI or development gets more from Anthropic Academy,
        DeepLearning.AI and freeCodeCamp. Finish them properly, then move on to
        the next.
      </p>
      <p>
        Free courses and free certificates aren't always the same thing. Where a
        provider charges for its official exam, the entry below says so, so you
        know exactly what you can claim.
      </p>

      {CERTS.map((c) => (
        <Cert key={c.id} {...c} />
      ))}

      <h2 id="resume">
        How do you add them to your resume?
        <Anchor id="resume" />
      </h2>
      <ul>
        <li>
          <strong>Use a Certifications section.</strong> List the course or
          credential name, the issuer and the month you finished, for example:{" "}
          <em>Claude Code in Action, Anthropic, November 2026.</em>
        </li>
        <li>
          <strong>Put them on LinkedIn.</strong> Add each one under Licenses
          &amp; certifications, with the credential link if there is one. Badges
          from IBM, Google Cloud and Cisco can be verified by anyone who clicks.
        </li>
        <li>
          <strong>Name them honestly.</strong> A course certificate is not the
          same as a professional certification exam. Write “completed” or the
          course name, not “certified”, unless you passed the exam.
        </li>
        <li>
          <strong>Show what you built.</strong> In interviews, talk about the
          project or lab, not the badge. That's what makes it stick.
        </li>
      </ul>

      <h2 id="faq">
        FAQ
        <Anchor id="faq" />
      </h2>
      <h3>Are these certificates really free?</h3>
      <p>
        The courses on this list are free. Some providers, like AWS, Microsoft,
        Google Cloud, Meta and Cisco, also sell official certification exams,
        and those cost money. Each entry above says what's free.
      </p>
      <h3>Do employers care about free certificates?</h3>
      <p>
        They won't land you a job on their own, but they show you're learning
        and they help you get past keyword filters. Pair them with a project you
        can talk about.
      </p>
      <h3>Which one should I start with for AI?</h3>
      <p>
        Anthropic Academy if you use Claude, then a DeepLearning.AI short course
        on the topic you need, like agents or RAG. Both take hours, not weeks.
      </p>
      <h3>Do any of them expire?</h3>
      <p>
        Some do. HubSpot and Google Skillshop certifications need renewing after
        a set time. Course completion certificates usually don't expire.
      </p>
    </GuideLayout>
  );
}
