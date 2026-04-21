import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useWindowWidth } from "../shared";

// Nav links — "educational" points to its own page, rest are hash anchors on the main page
const navLinks = [
  { label: "Home",        href: "#home" },
  { label: "Services",    href: "#services" },
  { label: "Packages",    href: "#packages" },
  { label: "Educational", href: "/educational" },
  { label: "Reviews",     href: "#reviews" },
  { label: "About",       href: "#about" },
  { label: "Terms",       href: "#terms" },
  { label: "Booking",     href: "#booking" },
];

export default function Navbar() {
  const navigate = useNavigate();
  const width  = useWindowWidth();
  const mobile = width < 1024;
  const [menuOpen, setMenuOpen] = useState(false);
  const px = mobile ? "1.25rem" : "4rem";

  const handleNavClick = (href) => {
    if (href.startsWith("#")) {
      // Hash link: navigate to home first, then scroll to element
      navigate("/");
      setTimeout(() => {
        const element = document.querySelector(href);
        if (element) element.scrollIntoView({ behavior: "smooth" });
      }, 0);
    } else {
      // Route link
      navigate(href);
    }
  };

  return (
    <>
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        height: 60, display: "flex", alignItems: "center",
        justifyContent: "space-between", padding: `0 ${px}`,
        background: "rgba(28,43,58,0.96)", backdropFilter: "blur(16px)",
        borderBottom: "1px solid rgba(109,148,197,0.18)",
      }}>
      {/* Logo */}
        <button 
          onClick={() => handleNavClick("#home")} 
          style={{ display: "flex", alignItems: "center", gap: "0.5rem", textDecoration: "none", background: "none", border: "none", cursor: "pointer" }}
        >
          <img
            src="/logo.png"
            alt="Praised logo"
            style={{ height: 36, width: "auto", objectFit: "contain" }}
            onError={e => { e.target.style.display = "none"; e.target.nextSibling.style.display = "flex"; }}
          />
          <div style={{ display: "none", flexDirection: "column" }}>
            <span className="serif" style={{ fontSize: "1rem", color: "#CBDCEB", lineHeight: 1.1 }}>Praised</span>
            <span style={{ fontSize: "0.56rem", color: "#6D94C5", letterSpacing: "0.12em", textTransform: "uppercase" }}>Travel and Tours</span>
          </div>
        </button>

        {/* Desktop nav */}
        {!mobile ? (
          <div style={{ display: "flex", alignItems: "center", gap: "1.6rem" }}>
            {navLinks.filter(n => n.label !== "booking").map(n => (
              <button 
                key={n.label} 
                onClick={() => handleNavClick(n.href)} 
                className="nav-link"
                style={{ background: "none", border: "none", cursor: "pointer", fontSize: "inherit", color: "#CBDCEB", padding: 0 }}
              >
                {n.label}
              </button>
            ))}
            <button 
              onClick={() => handleNavClick("#booking")} 
              className="btn btn-blue" 
              style={{ padding: "0.45rem 1.2rem", fontSize: "0.76rem" }}
            >
              Book Now
            </button>
          </div>
        ) : (
          /* Hamburger */
          <button
            className="ham"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            <span style={{ transform: menuOpen ? "rotate(45deg) translateY(7px)" : "none" }} />
            <span style={{ opacity: menuOpen ? 0 : 1 }} />
            <span style={{ transform: menuOpen ? "rotate(-45deg) translateY(-7px)" : "none" }} />
          </button>
        )}
      </nav>

      {/* Mobile menu */}
      {mobile && menuOpen && (
        <div className="mmenu">
          {navLinks.map(n => (
            <button 
              key={n.label} 
              onClick={() => { handleNavClick(n.href); setMenuOpen(false); }}
              style={{ background: "none", border: "none", cursor: "pointer", fontSize: "inherit", color: "#CBDCEB", padding: 0, textAlign: "left", width: "100%" }}
            >
              {n.label}
            </button>
          ))}
        </div>
      )}
    </>
  );
}