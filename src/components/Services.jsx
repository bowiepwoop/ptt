import { Reveal, Tag, Pill, useWindowWidth } from "../shared";
import { services } from "../data";

export default function Services() {
  const width  = useWindowWidth();
  const mobile = width < 768;
  const tablet = width >= 768 && width < 1100;
  const px = mobile ? "1.25rem" : tablet ? "2.5rem" : "5rem";
  const py = mobile ? "4rem" : "7rem";

  return (
    <section id="services" style={{ padding: `${py} ${px}`, background: "#E8DFCA" }}>
      <Reveal>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "2rem", flexWrap: "wrap", gap: "0.8rem" }}>
          <div>
            <Tag>What We Offer</Tag>
            <h2 className="serif" style={{ fontSize: "clamp(1.8rem,3vw,2.8rem)", color: "#1C2B3A", lineHeight: 1.1 }}>
              Our <em style={{ color: "#6D94C5" }}>Services</em>
            </h2>
          </div>
          <span style={{ color: "rgba(28,43,58,0.4)", fontSize: "0.8rem" }}>Affordable · Well-organized</span>
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: mobile ? "1fr" : tablet ? "1fr 1fr" : "repeat(3,1fr)",
          gap: "1.2rem",
        }}>
          {services.map(s => (
            <div key={s.name} className="svc-card">
              <div style={{ overflow: "hidden" }}>
                <img src={s.img} alt={s.name} />
              </div>
              <div style={{ padding: "1.25rem" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.45rem" }}>
                  <span style={{ fontSize: "0.66rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "#6D94C5", fontWeight: 700 }}>{s.duration}</span>
                  <Pill>{s.tag}</Pill>
                </div>
                <div className="serif" style={{ fontSize: "1.15rem", marginBottom: "0.28rem", color: "#1C2B3A" }}>{s.name}</div>
                <div style={{ fontSize: "0.7rem", color: "#6D94C5", marginBottom: "0.6rem", fontWeight: 600 }}>— {s.dest}</div>
                <p style={{ fontSize: "0.82rem", color: "#4a6070", lineHeight: 1.65, marginBottom: "1.1rem" }}>{s.desc}</p>
                <a href="#booking" className="btn btn-blue" style={{ fontSize: "0.76rem", padding: "0.45rem 1.1rem" }}>Book This</a>
              </div>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}