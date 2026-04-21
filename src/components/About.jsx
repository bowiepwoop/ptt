import { Reveal, Tag, useWindowWidth } from "../shared";
import { whyUs } from "../data";

export default function About() {
  const width  = useWindowWidth();
  const mobile = width < 768;
  const tablet = width >= 768 && width < 1100;
  const px = mobile ? "1.25rem" : tablet ? "2.5rem" : "5rem";
  const py = mobile ? "4rem" : "7rem";

  return (
    <section id="about" style={{ padding: `${py} ${px}`, background: "#1C2B3A" }}>
      <Reveal>
        {/* About content */}
        <div style={{ display: "grid", gridTemplateColumns: mobile || tablet ? "1fr" : "1fr 1fr", gap: mobile ? "2.5rem" : "5rem", alignItems: "center", marginBottom: mobile ? "3.5rem" : "5rem" }}>
          <div>
            <Tag>About Us</Tag>
            <h2 className="serif" style={{ fontSize: "clamp(1.8rem,3vw,2.8rem)", lineHeight: 1.1, marginBottom: "1.2rem", color: "#F5EFE6" }}>
              Your Travel, <em style={{ color: "#CBDCEB" }}>Our Praise</em>
            </h2>
            <p style={{ fontSize: "0.94rem", color: "rgba(245,239,230,0.58)", lineHeight: 1.82, marginBottom: "1rem" }}>
              Praised Travel and Tours was born out of a simple belief: every Filipino deserves to experience the beauty of their own country without breaking the bank. We are a passionate team of travel organizers dedicated to crafting affordable, safe, and unforgettable journeys across the Philippines.
            </p>
            <p style={{ fontSize: "0.94rem", color: "rgba(245,239,230,0.58)", lineHeight: 1.82, marginBottom: "1.8rem" }}>
              From the pristine beaches of Palawan to the rolling hills of Batanes, we handle every detail so you can focus on making memories. Whether you're a solo adventurer, a barkada, a family, or a school group — there's a Praised tour for you.
            </p>
            <div style={{ display: "flex", gap: "2.5rem", paddingTop: "1.5rem", borderTop: "1px solid rgba(109,148,197,0.22)" }}>
              {[["100+","Happy Travelers"],["10+","Destinations"],["5+","Years Serving"]].map(([n,l]) => (
                <div key={l}>
                  <div className="serif" style={{ fontSize: "2rem", color: "#CBDCEB" }}>{n}</div>
                  <div style={{ fontSize: "0.62rem", color: "rgba(245,239,230,0.38)", letterSpacing: "0.08em", textTransform: "uppercase", marginTop: "0.15rem" }}>{l}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Image collage */}
          <div style={{ position: "relative", height: mobile ? 260 : 420 }}>
            <img src="/images/logo.png" alt="Logo"
              style={{ width: "60%", height: "100%", objectFit: "cover", borderRadius: 18, position: "absolute", top: 0, right: 0, boxShadow: "0 18px 50px rgba(0,0,0,0.45)" }} />
          </div>
        </div>

        {/* Why Us */}
        <div style={{ marginBottom: mobile ? "3.5rem" : "5rem" }}>
          <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
            <Tag>Why Choose Us</Tag>
            <h2 className="serif" style={{ fontSize: "clamp(1.6rem,3vw,2.4rem)", color: "#F5EFE6" }}>
              Travel <em style={{ color: "#CBDCEB" }}>Better</em> With Us
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: mobile ? "1fr 1fr" : tablet ? "1fr 1fr" : "repeat(4,1fr)", gap: "1rem" }}>
            {whyUs.map(w => (
              <div key={w.title} style={{ textAlign: "center", padding: "1.8rem 1.4rem", background: "rgba(203,220,235,0.06)", borderRadius: 18, border: "1px solid rgba(109,148,197,0.18)" }}>
                <div className="serif" style={{ fontSize: "1rem", marginBottom: "0.45rem", color: "#F5EFE6" }}>{w.title}</div>
                <p style={{ fontSize: "0.78rem", color: "rgba(245,239,230,0.5)", lineHeight: 1.65 }}>{w.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Owner */}
        <div>
          <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
            <Tag>Meet the Owner</Tag>
            <h2 className="serif" style={{ fontSize: "clamp(1.6rem,3vw,2.4rem)", color: "#F5EFE6" }}>
              The Person <em style={{ color: "#CBDCEB" }}>Behind Praised</em>
            </h2>
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div style={{ maxWidth: 360, width: "100%", borderRadius: 20, overflow: "hidden", border: "1px solid rgba(109,148,197,0.2)", background: "rgba(203,220,235,0.06)" }}>
              <img src="/images/owner.webp" alt="Praised Owner" style={{ width: "100%", height: 260, objectFit: "cover", display: "block" }}
                onError={e => { e.target.style.display = "none"; e.target.nextSibling.style.display = "flex"; }} />
              <div style={{ display: "none", width: "100%", height: 260, background: "linear-gradient(135deg,#2a3f57,#6D94C5)", alignItems: "center", justifyContent: "center" }}>
                <div style={{ width: 80, height: 80, borderRadius: "50%", background: "rgba(255,255,255,0.15)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "2rem" }}>👤</div>
              </div>
              <div style={{ padding: "1.5rem", textAlign: "center" }}>
                <div className="serif" style={{ fontSize: "1.2rem", marginBottom: "0.2rem", color: "#F5EFE6" }}>Praised Organizer</div>
                <div style={{ fontSize: "0.7rem", color: "#6D94C5", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "0.8rem" }}>Founder & Lead Organizer</div>
                <p style={{ fontSize: "0.82rem", color: "rgba(245,239,230,0.55)", lineHeight: 1.72 }}>Passionate traveler turned full-time tour organizer. Built Praised Travel and Tours to make travel accessible, well-organized, and memorable for every Filipino.</p>
                <div style={{ display: "flex", justifyContent: "center", gap: "0.7rem", marginTop: "1.2rem" }}>
                  <a href="tel:09302091648" className="btn btn-blue" style={{ fontSize: "0.76rem", padding: "0.45rem 1.1rem" }}>Call</a>
                  <a href="mailto:praisedtravelandtours@gmail.com" className="btn" style={{ fontSize: "0.76rem", padding: "0.45rem 1.1rem", background: "transparent", border: "1.5px solid #CBDCEB", color: "#CBDCEB", borderRadius: 100 }}>Email</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}