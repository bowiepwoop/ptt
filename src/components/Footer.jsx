import { useWindowWidth } from "../shared";
import { services } from "../data";

export default function Footer() {
  const width  = useWindowWidth();
  const mobile = width < 768;
  const tablet = width >= 768 && width < 1100;
  const px = mobile ? "1.25rem" : tablet ? "2.5rem" : "5rem";

  return (
    <footer style={{ background: "#111b26", color: "#F5EFE6", padding: `3.5rem ${px} 2rem` }}>
      <div style={{
        display: "grid",
        gridTemplateColumns: mobile ? "1fr 1fr" : tablet ? "1fr 1fr 1fr" : "2fr 1fr 1fr 1fr",
        gap: mobile ? "2rem" : "3rem",
        paddingBottom: "2.5rem",
        borderBottom: "1px solid rgba(109,148,197,0.14)",
        marginBottom: "1.5rem",
      }}>
        {/* Brand */}
        <div style={{ gridColumn: mobile ? "1 / -1" : "auto" }}>
          <div style={{ marginBottom: "0.8rem" }}>
            <img
              src="/logo.png"
              alt="Praised"
              style={{ height: 42, width: "auto", objectFit: "contain", filter: "brightness(0) invert(1)", opacity: 0.88 }}
              onError={e => { e.target.style.display = "none"; e.target.nextSibling.style.display = "block"; }}
            />
            <div className="serif" style={{ display: "none", fontSize: "1.5rem", color: "#CBDCEB" }}>Praised</div>
          </div>
          <p style={{ fontSize: "0.8rem", color: "rgba(245,239,230,0.38)", lineHeight: 1.72, maxWidth: 240 }}>
            Affordable, well-organized, and memorable travel experiences across the Philippines.
          </p>
          <div style={{ marginTop: "1.1rem", display: "flex", flexDirection: "column", gap: "0.6rem" }}>
            <a href="tel:09302091648" style={{ color: "#6D94C5", textDecoration: "none", fontSize: "0.8rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" style={{ width: 15, height: 15, flexShrink: 0 }}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
              </svg>
              09302091648
            </a>
            <a href="mailto:praisedtravelandtours@gmail.com" style={{ color: "#6D94C5", textDecoration: "none", fontSize: "0.8rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" style={{ width: 15, height: 15, flexShrink: 0 }}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 13.5h3.86a2.25 2.25 0 0 1 2.012 1.244l.256.512a2.25 2.25 0 0 0 2.013 1.244h3.218a2.25 2.25 0 0 0 2.013-1.244l.256-.512a2.25 2.25 0 0 1 2.013-1.244h3.859m-19.5.338V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 0 0-2.15-1.588H6.911a2.25 2.25 0 0 0-2.15 1.588L2.35 13.177a2.25 2.25 0 0 0-.1.661Z" />
              </svg>
              praisedtravelandtours@gmail.com
            </a>
            <a href="https://www.facebook.com/praisedtravelandtours/" target="_blank" rel="noopener noreferrer" style={{ color: "#6D94C5", textDecoration: "none", fontSize: "0.8rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="currentColor" style={{ flexShrink: 0 }}>
                <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.236 2.686.236v2.97h-1.513c-1.491 0-1.956.93-1.956 1.886v2.267h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z"/>
              </svg>
              Facebook Page
            </a>
          </div>
        </div>

        {/* Link columns */}
        {[
          ["Services", services.map(s => ({ label: s.name, href: "#services" }))],
          ["Company",  [{ label: "About Us", href: "#about" }, { label: "Our Team", href: "#about" }, { label: "Reviews", href: "#reviews" }, { label: "Contact", href: "#booking" }]],
          ["Support",  [{ label: "Terms & Conditions", href: "#terms" }, { label: "FAQs", href: "#" }, { label: "Booking Policy", href: "#terms" }, { label: "Refunds", href: "#terms" }]],
        ].map(([title, links]) => (
          <div key={title}>
            <div style={{ fontSize: "0.62rem", textTransform: "uppercase", letterSpacing: "0.15em", color: "rgba(203,220,235,0.32)", marginBottom: "1rem", fontWeight: 700 }}>{title}</div>
            <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "0.55rem" }}>
              {links.map(l => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    style={{ color: "rgba(245,239,230,0.52)", textDecoration: "none", fontSize: "0.82rem", transition: "color 0.2s" }}
                    onMouseEnter={e => { e.target.style.color = "#CBDCEB"; }}
                    onMouseLeave={e => { e.target.style.color = "rgba(245,239,230,0.52)"; }}
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "0.5rem", fontSize: "0.72rem", color: "rgba(245,239,230,0.22)" }}>
        <span>© {new Date().getFullYear()} Praised Travel and Tours. All rights reserved.</span>
        <span>Your Travel Our Praise</span>
      </div>
    </footer>
  );
}