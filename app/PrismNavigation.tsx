"use client";

import { useEffect, useState } from "react";

const links = [
  { label: "About", href: "#about" },
  { label: "News", href: "#news" },
  { label: "Publications", href: "#publications" },
  { label: "Service", href: "#academic-service" },
  { label: "Experience", href: "#experience" },
  { label: "Honors", href: "#honors-awards" },
];

type Theme = "light" | "dark";

export default function PrismNavigation() {
  const [theme, setTheme] = useState<Theme>("light");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const current = document.documentElement.dataset.theme === "dark" ? "dark" : "light";
    setTheme(current);
  }, []);

  const toggleTheme = () => {
    const next = theme === "light" ? "dark" : "light";
    document.documentElement.dataset.theme = next;
    localStorage.setItem("prism-theme", next);
    setTheme(next);
  };

  return (
    <nav className="prism-nav" aria-label="Primary navigation">
      <div className="nav-inner">
        <a className="site-title" href="#top" onClick={() => setMenuOpen(false)}>
          Jingyi He
        </a>

        <div className={`nav-panel ${menuOpen ? "open" : ""}`} id="mobile-navigation">
          <div className="nav-links">
            {links.map((link, index) => (
              <a
                className={index === 0 ? "active" : undefined}
                href={link.href}
                key={link.href}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div className="nav-controls">
          <button
            className="theme-toggle"
            type="button"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === "light" ? "dark" : "light"} theme`}
            title={`Switch to ${theme === "light" ? "dark" : "light"} theme`}
          >
            <span className="theme-glyph" aria-hidden="true" />
          </button>
          <button
            className="menu-toggle"
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </button>
        </div>
      </div>
    </nav>
  );
}
