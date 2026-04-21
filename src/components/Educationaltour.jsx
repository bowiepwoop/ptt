import { Reveal, Tag, Pill, useWindowWidth } from "../shared";
import { eduDestinations, activities, included, eduHighlights } from "../data";

export default function EducationalTour() {
  const width  = useWindowWidth();
  const mobile = width < 768;
  const tablet = width >= 768 && width < 1100;
  const px = mobile ? "1.25rem" : tablet ? "2.5rem" : "5rem";
  const py = mobile ? "4rem" : "7rem";

  return (
    <section id="educational" style={{ padding: `${py} ${px}`, background: "#F5EFE6" }}>
      <Reveal>
        {/* Hero banner */}
        <div style={{
          borderRadius: 24, overflow: "hidden", marginBottom: "4rem", position: "relative",
          background: "linear-gradient(135deg, #1C2B3A 0%, #2a3f57 100%)",
          padding: mobile ? "3rem 1.5rem" : "4.5rem 4rem",
        }}>
          <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at 70% 50%, rgba(109,148,197,0.25) 0%, transparent 60%)", pointerEvents: "none" }} />
          <div style={{ position: "relative", zIndex: 1, maxWidth: 620 }}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.8rem", marginBottom: "1.2rem" }}>
              <div style={{ width: "2rem", height: 1, background: "#6D94C5" }} />
              <span style={{ fontSize: "0.66rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "#CBDCEB", fontWeight: 500 }}>Learn · Explore · Experience</span>
            </div>
            <h1 className="serif" style={{ fontSize: "clamp(2rem,4vw,3.2rem)", lineHeight: 1.08, color: "#F5EFE6", marginBottom: "1.2rem" }}>
              Educational <em style={{ color: "#CBDCEB" }}>Tour 2026</em>
            </h1>
            <p style={{ color: "rgba(245,239,230,0.62)", fontSize: "0.96rem", lineHeight: 1.78, marginBottom: "1.8rem" }}>
              Praised Travel and Tours offers fun and educational trips designed for students to explore different destinations while learning about science, history, culture, and nature.
            </p>
            <div style={{ display: "flex", gap: "0.7rem", flexWrap: "wrap", marginBottom: "2rem" }}>
              {["Schools", "Student Groups", "Young Explorers"].map(t => <Pill key={t}>{t}</Pill>)}
            </div>
            <a href="#booking" className="btn btn-blue" style={{ padding: "0.85rem 2.2rem", fontSize: "0.9rem", boxShadow: "0 8px 24px rgba(109,148,197,0.38)" }}>
              Book Educational Tour
            </a>
          </div>
        </div>

        {/* Destinations */}
        <div style={{ marginBottom: "3.5rem" }}>
          <div style={{ textAlign: "center", marginBottom: "2rem" }}>
            <Tag>Destinations</Tag>
            <h2 className="serif" style={{ fontSize: "clamp(1.6rem,3vw,2.4rem)" }}>
              Featured <em style={{ color: "#6D94C5" }}>Destinations</em>
            </h2>
          </div>
          <div style={{
            display: "grid",
            gridTemplateColumns: mobile ? "repeat(2,1fr)" : tablet ? "repeat(3,1fr)" : "repeat(5,1fr)",
            gap: "1rem",
          }}>
            {eduDestinations.map(d => (
              <div key={d.name} className="edu-tile" style={{
                borderRadius: 16,
                overflow: "hidden",
                background: "#fff",
                border: "1px solid rgba(109,148,197,0.15)",
                transition: "transform 0.3s, box-shadow 0.3s",
                cursor: "pointer"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-4px)";
                e.currentTarget.style.boxShadow = "0 12px 24px rgba(109,148,197,0.15)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 1px 3px rgba(0,0,0,0.08)";
              }}>
                <img 
                  src={d.img} 
                  alt={d.name}
                  style={{
                    width: "100%",
                    height: mobile ? 140 : tablet ? 160 : 180,
                    objectFit: "cover",
                    display: "block"
                  }}
                />
                <div style={{
                  padding: "1rem",
                  textAlign: "center"
                }}>
                  <div style={{
                    fontSize: mobile ? "0.75rem" : "0.83rem",
                    fontWeight: 600,
                    color: "#1C2B3A",
                    lineHeight: 1.3
                  }}>
                    {d.name}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 3 info cards */}
        <div style={{
          display: "grid",
          gridTemplateColumns: mobile ? "1fr" : tablet ? "1fr 1fr" : "1fr 1fr 1fr",
          gap: "1.4rem",
        }}>
          {/* Activities */}
          <div style={{ background: "#1C2B3A", borderRadius: 20, padding: "1.7rem", border: "1px solid rgba(109,148,197,0.2)" }}>
            <div className="serif" style={{ color: "#CBDCEB", fontSize: "1.08rem", marginBottom: "1.2rem", fontWeight: 700 }}>Sample Activities</div>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {activities.map(a => (
                <div key={a.title} style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start" }}>
                  <div style={{ minWidth: 6, height: 6, borderRadius: "50%", background: "#6D94C5", marginTop: "0.5rem", flexShrink: 0 }} />
                  <div>
                    <div style={{ fontWeight: 600, fontSize: "0.83rem", color: "#F5EFE6", marginBottom: "0.15rem" }}>{a.title}</div>
                    <div style={{ fontSize: "0.73rem", color: "rgba(245,239,230,0.48)", lineHeight: 1.58 }}>{a.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Inclusions */}
          <div style={{ background: "#fff", borderRadius: 20, padding: "1.7rem", border: "1.5px solid #CBDCEB" }}>
            <div className="serif" style={{ color: "#1C2B3A", fontSize: "1.08rem", marginBottom: "1.2rem", fontWeight: 700 }}>What's Included</div>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", marginBottom: "1.4rem" }}>
              {included.map(item => (
                <div key={item} style={{ display: "flex", alignItems: "center", gap: "0.7rem" }}>
                  <div style={{ width: 28, height: 28, borderRadius: 8, background: "#CBDCEB", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#6D94C5" }} />
                  </div>
                  <span style={{ fontSize: "0.83rem", color: "#1C2B3A", fontWeight: 500 }}>{item}</span>
                </div>
              ))}
            </div>
            <div style={{ padding: "1rem", background: "#F5EFE6", borderRadius: 12, border: "1px solid #CBDCEB" }}>
              <div style={{ fontSize: "0.66rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: "#6D94C5", marginBottom: "0.5rem" }}>Travel Tips</div>
              {["Wear comfortable clothes and shoes", "Bring water and snacks", "Follow tour guide instructions", "Capture memories and photos"].map(t => (
                <div key={t} style={{ fontSize: "0.76rem", color: "#4a6070", marginBottom: "0.28rem" }}>— {t}</div>
              ))}
            </div>
          </div>

          {/* Highlights */}
          <div style={{ background: "#E8DFCA", borderRadius: 20, padding: "1.7rem", border: "1px solid #CBDCEB" }}>
            <div className="serif" style={{ color: "#1C2B3A", fontSize: "1.08rem", marginBottom: "1.2rem", fontWeight: 700 }}>Highlights of the Tour</div>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.85rem", marginBottom: "1.6rem" }}>
              {eduHighlights.map(h => (
                <div key={h} style={{ display: "flex", gap: "0.7rem", alignItems: "flex-start" }}>
                  <div style={{ minWidth: 20, height: 20, borderRadius: "50%", background: "#6D94C5", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.62rem", fontWeight: 700, flexShrink: 0 }}>+</div>
                  <span style={{ fontSize: "0.83rem", color: "#1C2B3A", lineHeight: 1.58 }}>{h}</span>
                </div>
              ))}
            </div>
            <div style={{ padding: "1rem", background: "#1C2B3A", borderRadius: 12, marginBottom: "1.2rem" }}>
              <div style={{ fontStyle: "italic", color: "#CBDCEB", fontSize: "0.83rem", lineHeight: 1.65, textAlign: "center" }}>
                "Learn, Explore, and Make Memories Beyond the Classroom!"
              </div>
            </div>
            <a href="#booking" className="btn btn-blue" style={{ display: "block", textAlign: "center", fontSize: "0.86rem", padding: "0.82rem", boxShadow: "0 6px 20px rgba(109,148,197,0.28)" }}>
              Book Educational Tour
            </a>
          </div>
        </div>

        {/* CTA strip */}
        <div style={{ marginTop: "3rem", background: "#6D94C5", borderRadius: 20, padding: mobile ? "2rem 1.5rem" : "2.5rem 3rem", display: "flex", flexDirection: mobile ? "column" : "row", alignItems: mobile ? "flex-start" : "center", justifyContent: "space-between", gap: "1.2rem" }}>
          <div>
            <div className="serif" style={{ fontSize: "1.4rem", color: "#fff", marginBottom: "0.4rem" }}>Ready to book for your school?</div>
            <p style={{ color: "rgba(245,239,230,0.78)", fontSize: "0.88rem" }}>Get in touch with us and we'll tailor a package for your group and budget.</p>
          </div>
          <div style={{ display: "flex", gap: "0.8rem", flexShrink: 0 }}>
            <a href="#booking" className="btn" style={{ background: "#fff", color: "#6D94C5", fontWeight: 700 }}>Book Now</a>
            <a href="tel:09302091648" className="btn" style={{ background: "transparent", border: "1.5px solid rgba(255,255,255,0.6)", color: "#fff" }}>Call Us</a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}