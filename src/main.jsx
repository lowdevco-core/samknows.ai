import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./site.css";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import Guide from "./components/Guide.jsx";
import dayTrader from "./pages/claude-day-trader-skill.html?raw";
import markitdown from "./pages/markitdown-guide.html?raw";
import videoEffects from "./pages/video-effects-guide.html?raw";
import claudeSeo from "./pages/claude-seo-guide.html?raw";

// Add a guide: put its HTML in src/pages, import it above, add a <Route> here and a card in Home.jsx.
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/claude-day-trader-skill-setup-guide"
          element={<Guide html={dayTrader} title="Claude Day Trader Skill Setup Guide: Install All 11 Skills Free (2026)" />}
        />
        <Route
          path="/markitdown-guide"
          element={<Guide html={markitdown} title="MarkItDown Guide: Save Claude Tokens by Turning Files into Markdown (2026)" />}
        />
        <Route
          path="/claude-video-effects-skill"
          element={<Guide html={videoEffects} title="51 Video Effects for Claude: Install the /effects Skill Free (2026)" />}
        />
        <Route
          path="/claude-seo-skill"
          element={<Guide html={claudeSeo} title="Claude SEO Skill: Run a Full Website Audit Inside Claude (2026)" />}
        />
        <Route path="*" element={<Home />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </StrictMode>,
);
