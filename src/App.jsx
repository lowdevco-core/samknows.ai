import { useEffect } from "react";
import { Routes, Route, Outlet, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import NotFound from "./pages/NotFound.jsx";
import { GUIDES } from "./assets/data/blog.js";

// Wraps every page: navbar on top, footer at the bottom, the current route in between.
function Layout() {
  const { pathname, hash } = useLocation();

  // New page: start at the top, or jump to #section when the link has one.
  useEffect(() => {
    const target =
      hash && document.getElementById(decodeURIComponent(hash.slice(1)));
    if (target) target.scrollIntoView({ behavior: "instant" });
    else window.scrollTo(0, 0);
  }, [pathname]); // not [hash]: in-page #links already scroll natively

  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        {GUIDES.map(({ path, Page }) => (
          <Route key={path} path={path} element={<Page />} />
        ))}
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
