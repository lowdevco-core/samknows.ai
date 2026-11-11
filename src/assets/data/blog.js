import CertificatesGuide from "../../pages/CertificatesGuide.jsx";
import MarkItDownGuide from "../../pages/MarkItDownGuide.jsx";
import ClaudeSeoGuide from "../../pages/ClaudeSeoGuide.jsx";
import VideoEffectsGuide from "../../pages/VideoEffectsGuide.jsx";
import DayTraderGuide from "../../pages/DayTraderGuide.jsx";

// Every guide on the site, newest first. Adding one here creates its route (App.jsx) and its homepage card.
export const GUIDES = [
  {
    path: "/free-ai-certificates",
    Page: CertificatesGuide,
    tag: "Career",
    title: "15 Free AI and Tech Certificates to Add to Your Resume (2026)",
    dek: "Free courses and certificates from Anthropic, NVIDIA, Google, Microsoft, AWS, IBM and more, with what each one gives you and where to sign up.",
    meta: "November 11, 2026 · 9 min read",
  },
  {
    path: "/markitdown-guide",
    Page: MarkItDownGuide,
    tag: "AI",
    title:
      "MarkItDown Guide: Save Claude Tokens by Turning Files into Markdown (2026)",
    dek: "Turn PDFs, Word, PowerPoint and Excel files into lean Markdown with Microsoft's free MarkItDown, so Claude reads less and your usage goes further.",
    meta: "November 10, 2026 · 7 min read",
  },
  {
    path: "/claude-seo-skill",
    Page: ClaudeSeoGuide,
    tag: "AI",
    title: "Claude SEO Skill: Run a Full Website Audit Inside Claude (2026)",
    dek: "A free Claude Code skill for SEO audits, technical SEO and AI search optimisation. One /seo command gives you a prioritised roadmap of what to fix.",
    meta: "November 9, 2026 · 5 min read",
  },
  {
    path: "/claude-video-effects-skill",
    Page: VideoEffectsGuide,
    tag: "AI",
    title:
      "51 Video Effects for Claude: Install the /effects Skill Free (2026)",
    dek: "A free Claude Code skill that adds 51 visual effects to your talking-head videos, with your original audio kept.",
    meta: "November 8, 2026 · 6 min read",
  },
  {
    path: "/claude-day-trader-skill-setup-guide",
    Page: DayTraderGuide,
    tag: "AI",
    title:
      "Claude Day Trader Skill Setup Guide: Install All 11 Skills Free (2026)",
    dek: "A step-by-step setup guide for the free Day Trader skill pack: 11 Claude skills including the Time Machine, installed in about 5 minutes.",
    meta: "October 26, 2026 · 10 min read",
  },
];
