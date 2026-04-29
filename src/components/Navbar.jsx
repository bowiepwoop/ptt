import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useWindowWidth } from "../shared";
import { ChevronDown, ChevronUp, Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home",    href: "#home" },
  {
    label: "Services",
    href: "#services",
    dropdown: [
      { label: "Services",    href: "#services" },
      { label: "Packages",    href: "#packages" },
      { label: "Educational", href: "/educational" },
    ],
  },
  { label: "Reviews", href: "#reviews" },
  { label: "Careers", href: "#careers" },
  {
    label: "About",
    href: "#about",
    dropdown: [
      { label: "About Us", href: "#about" },
      { label: "Terms",    href: "#terms" },
    ],
  },
];

export default function Navbar() {
  const navigate  = useNavigate();
  const width     = useWindowWidth();
  const mobile    = width < 1024;
  const px        = mobile ? "1.25rem" : "4rem";

  const [menuOpen,      setMenuOpen]      = useState(false);
  const [openDropdown,  setOpenDropdown]  = useState(null); // desktop hover
  const [mobileExpanded, setMobileExpanded] = useState(null); // mobile tap
  const closeTimer = useRef(null);

  const handleNavClick = (href) => {
    setMenuOpen(false);
    setOpenDropdown(null);
    setMobileExpanded(null);
    if (href.startsWith("#")) {
      navigate("/");
      setTimeout(() => {
        const el = document.querySelector(href);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 50);
    } else {
      navigate(href);
    }
  };

  const onMouseEnter = (label) => {
    clearTimeout(closeTimer.current);
    setOpenDropdown(label);
  };

  const onMouseLeave = () => {
    closeTimer.current = setTimeout(() => setOpenDropdown(null), 120);
  };

  const toggleMobileDropdown = (label) =>
    setMobileExpanded(prev => (prev === label ? null : label));

  return (
    <>
      <style>{`
        .dd-item {
          display: block; width: 100%;
          padding: 0.62rem 1.1rem;
          background: none; border: none; cursor: pointer;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.78rem; font-weight: 500;
          color: rgba(245,239,230,0.75);
          text-align: left; white-space: nowrap;
          transition: background 0.15s, color 0.15s;
          letter-spacing: 0.04em;
        }
        .dd-item:hover { background: rgba(109,148,197,0.18); color: #CBDCEB; }

        .nav-btn {
          display: flex; align-items: center; gap: 0.25rem;
          background: none; border: none; cursor: pointer;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.76rem; font-weight: 500;
          letter-spacing: 0.1em; text-transform: uppercase;
          color: rgba(245,239,230,0.6); padding: 0;
          transition: color 0.2s;
        }
        .nav-btn:hover { color: #CBDCEB; }
        .nav-btn .chevron { transition: transform 0.2s; }
        .nav-btn.open .chevron { transform: rotate(180deg); }

        .mmenu-btn {
          display: flex; align-items: center; justify-content: space-between;
          width: 100%; padding: 0.85rem 0;
          background: none; border: none;
          border-bottom: 1px solid rgba(255,255,255,0.06);
          cursor: pointer;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.82rem; font-weight: 500;
          letter-spacing: 0.12em; text-transform: uppercase;
          color: rgba(245,239,230,0.65); text-align: left;
          transition: color 0.2s;
        }
        .mmenu-btn:hover { color: #fff; }

        .mmenu-sub-item {
          display: block; width: 100%;
          padding: 0.65rem 0 0.65rem 1rem;
          background: none; border: none;
          border-bottom: 1px solid rgba(255,255,255,0.04);
          cursor: pointer;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.76rem; font-weight: 400;
          letter-spacing: 0.08em; text-transform: uppercase;
          color: rgba(245,239,230,0.45); text-align: left;
          transition: color 0.18s, background 0.18s;
        }
        .mmenu-sub-item:hover { color: #CBDCEB; background: rgba(109,148,197,0.08); }

        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-6px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .mobile-sub-open { animation: slideDown 0.2s ease both; }
      `}</style>

      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        height: 60, display: "flex", alignItems: "center",
        justifyContent: "space-between", padding: `0 ${px}`,
        background: "rgba(28,43,58,0.96)", backdropFilter: "blur(16px)",
        borderBottom: "1px solid rgba(109,148,197,0.18)",
      }}>
        {/* Logo */}
        <button onClick={() => handleNavClick("#home")}
          style={{ display: "flex", alignItems: "center", gap: "0.5rem", background: "none", border: "none", cursor: "pointer" }}>
          <img src="/images/logo.png" alt="Praised logo"
            style={{ height: 60, width: "auto", objectFit: "contain" }}
            onError={e => { e.target.style.display = "none"; e.target.nextSibling.style.display = "flex"; }} />
          <div style={{ display: "none", flexDirection: "column" }}>
            <span className="serif" style={{ fontSize: "1rem", color: "#CBDCEB", lineHeight: 1.1 }}>Praised</span>
            <span style={{ fontSize: "0.56rem", color: "#6D94C5", letterSpacing: "0.12em", textTransform: "uppercase" }}>Travel and Tours</span>
          </div>
        </button>

        {/* Desktop nav */}
        {!mobile ? (
          <div style={{ display: "flex", alignItems: "center", gap: "2rem" }}>
            {navLinks.map(n => (
              <div key={n.label} style={{ position: "relative" }}
                onMouseEnter={() => n.dropdown && onMouseEnter(n.label)}
                onMouseLeave={() => n.dropdown && onMouseLeave()}
              >
                <button
                  className={`nav-btn${openDropdown === n.label ? " open" : ""}`}
                  onClick={() => !n.dropdown && handleNavClick(n.href)}
                >
                  {n.label}
                  {n.dropdown && <ChevronDown size={13} className="chevron" />}
                </button>

                {n.dropdown && openDropdown === n.label && (
                  <div style={{
                    position: "absolute", top: "calc(100% + 14px)", left: "50%",
                    transform: "translateX(-50%)",
                    background: "rgba(18,30,42,0.98)", backdropFilter: "blur(16px)",
                    border: "1px solid rgba(109,148,197,0.2)", borderRadius: 12,
                    minWidth: 170, overflow: "hidden",
                    boxShadow: "0 16px 40px rgba(0,0,0,0.35)",
                    animation: "fadeUp 0.18s ease both",
                  }}>
                    <div style={{
                      position: "absolute", top: -6, left: "50%",
                      width: 10, height: 10,
                      background: "rgba(18,30,42,0.98)",
                      border: "1px solid rgba(109,148,197,0.2)",
                      borderBottom: "none", borderRight: "none",
                      transform: "translateX(-50%) rotate(45deg)",
                    }} />
                    {n.dropdown.map(d => (
                      <button key={d.label} className="dd-item" onClick={() => handleNavClick(d.href)}>
                        {d.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <button onClick={() => handleNavClick("#booking")}
              className="btn btn-blue" style={{ padding: "0.45rem 1.2rem", fontSize: "0.76rem" }}>
              Book Now
            </button>
          </div>
        ) : (
          /* Lucide hamburger / close */
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
            style={{ background: "none", border: "none", cursor: "pointer", color: "#F5EFE6", display: "flex", alignItems: "center", padding: "0.3rem" }}
          >
            {menuOpen ? <X size={24} strokeWidth={1.8} /> : <Menu size={24} strokeWidth={1.8} />}
          </button>
        )}
      </nav>

      {/* Mobile menu */}
      {mobile && menuOpen && (
        <div className="mmenu">
          {navLinks.map(n => (
            <div key={n.label}>
              {n.dropdown ? (
                /* Parent with dropdown — tap to expand */
                <>
                  <button className="mmenu-btn" onClick={() => toggleMobileDropdown(n.label)}>
                    <span>{n.label}</span>
                    {mobileExpanded === n.label
                      ? <ChevronUp size={15} color="rgba(245,239,230,0.5)" />
                      : <ChevronDown size={15} color="rgba(245,239,230,0.5)" />}
                  </button>
                  {mobileExpanded === n.label && (
                    <div className="mobile-sub-open" style={{ background: "rgba(109,148,197,0.05)" }}>
                      {n.dropdown.map(d => (
                        <button key={d.label} className="mmenu-sub-item"
                          onClick={() => handleNavClick(d.href)}>
                          {d.label}
                        </button>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                /* Plain link */
                <button className="mmenu-btn" onClick={() => handleNavClick(n.href)}>
                  <span>{n.label}</span>
                </button>
              )}
            </div>
          ))}
          {/* Book Now */}
          <button
            onClick={() => { handleNavClick("#booking"); setMenuOpen(false); }}
            style={{ display: "block", width: "100%", marginTop: "1rem", padding: "0.85rem", borderRadius: 12, background: "#6D94C5", color: "#fff", border: "none", cursor: "pointer", fontFamily: "'DM Sans', sans-serif", fontSize: "0.86rem", fontWeight: 700, letterSpacing: "0.08em" }}
          >
            Book Now
          </button>
        </div>
      )}
    </>
  );
}