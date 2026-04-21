import { Reveal, Tag, useWindowWidth } from "../shared";
import { FACEBOOK_REVIEWS_URL, FACEBOOK_LEGIT_URL } from "../data";

export default function Reviews() {
  const width  = useWindowWidth();
  const mobile = width < 768;
  const tablet = width >= 768 && width < 1100;
  const px = mobile ? "1.25rem" : tablet ? "2.5rem" : "5rem";
  const py = mobile ? "4rem" : "7rem";

  return (
    <section id="reviews" style={{ padding: `${py} ${px}`, background: "#E8DFCA" }}>
      <Reveal>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <Tag>Happy Travelers</Tag>
          <h2 className="serif" style={{ fontSize: "clamp(1.8rem,3vw,2.8rem)", color: "#1C2B3A", lineHeight: 1.1 }}>
            What Our Clients <em style={{ color: "#6D94C5" }}>Say</em>
          </h2>
          <p style={{ color: "#5a6a78", fontSize: "0.86rem", marginTop: "0.8rem" }}>
            Real feedback from our growing community of happy travelers
          </p>
        </div>

        {/* Stats */}
        <div style={{ display: "grid", gridTemplateColumns: mobile ? "1fr 1fr" : "repeat(4, 1fr)", gap: "1rem", marginBottom: "3rem" }}>
          {[["98%","Recommend"],["100+","Happy Travelers"],["10+","Destinations"],["5+","Years of Service"]].map(([n, l]) => (
            <div key={l} style={{ background: "#fff", border: "1px solid #CBDCEB", borderRadius: 16, padding: "1.5rem", textAlign: "center" }}>
              <div className="serif" style={{ fontSize: "1.9rem", color: "#6D94C5", marginBottom: "0.3rem" }}>{n}</div>
              <div style={{ fontSize: "0.62rem", color: "#5a6a78", textTransform: "uppercase", letterSpacing: "0.08em" }}>{l}</div>
            </div>
          ))}
        </div>

        {/* Quote + CTA */}
        <div style={{ display: "grid", gridTemplateColumns: mobile || tablet ? "1fr" : "1fr 1fr", gap: "1.5rem", alignItems: "center" }}>
          {/* Quote */}
          <div style={{ background: "#fff", border: "1px solid #CBDCEB", borderRadius: 20, padding: "2rem" }}>
            <div style={{ fontSize: "2.5rem", color: "#6D94C5", lineHeight: 1, marginBottom: "0.8rem", fontFamily: "Georgia, serif" }}>"</div>
            <p style={{ fontSize: "0.96rem", color: "#4a5a68", lineHeight: 1.8, fontStyle: "italic" }}>
              Every trip carefully planned — from transport to accommodations — so you can focus on making memories. That's the Praised promise.
            </p>
            <div style={{ marginTop: "1.2rem", fontSize: "0.76rem", color: "rgba(28,43,58,0.4)", letterSpacing: "0.06em" }}>— Praised Travel and Tours</div>
          </div>

          {/* CTA card */}
          <div style={{ background: "#fff", border: "1px solid #CBDCEB", borderRadius: 20, padding: "2rem", display: "flex", flexDirection: "column", gap: "1rem" }}>
            <div className="serif" style={{ fontSize: "1.3rem", color: "#1C2B3A", lineHeight: 1.3 }}>See what our travelers are saying</div>
            <p style={{ fontSize: "0.84rem", color: "#4a5a68", lineHeight: 1.7, margin: 0 }}>
              Read real stories and reviews from clients who've traveled with us — straight from our Facebook community.
            </p>
            <a href={FACEBOOK_REVIEWS_URL} target="_blank" rel="noopener noreferrer"
              style={{ display: "inline-flex", alignItems: "center", gap: "0.6rem", padding: "0.85rem 1.6rem", borderRadius: 12, background: "#1877F2", color: "#fff", textDecoration: "none", fontWeight: 700, fontSize: "0.88rem", boxShadow: "0 8px 24px rgba(24,119,242,0.22)", transition: "all 0.22s", width: mobile ? "100%" : "auto", justifyContent: "center" }}
              onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-2px)"; }}
              onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.236 2.686.236v2.97h-1.513c-1.491 0-1.956.93-1.956 1.886v2.267h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z"/></svg>
              See What Our Clients Say
            </a>
            <a href={FACEBOOK_LEGIT_URL} target="_blank" rel="noopener noreferrer"
              style={{ display: "inline-flex", alignItems: "center", gap: "0.6rem", padding: "0.75rem 1.6rem", borderRadius: 12, background: "transparent", color: "#6D94C5", border: "1.5px solid #6D94C5", textDecoration: "none", fontWeight: 600, fontSize: "0.84rem", transition: "all 0.22s", width: mobile ? "100%" : "auto", justifyContent: "center" }}
              onMouseEnter={e => { e.currentTarget.style.background = "#6D94C5"; e.currentTarget.style.color = "#fff"; }}
              onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "#6D94C5"; }}
            >
              ✓ Check Our Legitimacy
            </a>
            <a href="#booking" className="btn btn-blue" style={{ width: mobile ? "100%" : "auto", textAlign: "center", padding: "0.85rem 1.6rem" }}>
              Book Your Trip Today
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}