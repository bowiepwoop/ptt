import { Reveal, Tag, Pill, useWindowWidth } from "../shared";
import { destinations } from "../data";

export default function Destinations() {
  const width  = useWindowWidth();
  const mobile = width < 768;
  const tablet = width >= 768 && width < 1100;
  const px = mobile ? "1.25rem" : tablet ? "2.5rem" : "5rem";
  const py = mobile ? "4rem" : "7rem";

  return (
    <section id="destinations" style={{ padding: `${py} ${px}`, background: "#F5EFE6" }}>
      <Reveal>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "2rem", flexWrap: "wrap", gap: "0.8rem" }}>
          <div>
            <Tag>Where to Go</Tag>
            <h2 className="serif" style={{ fontSize: "clamp(1.8rem,3vw,2.8rem)", lineHeight: 1.1 }}>
              Top <em style={{ color: "#6D94C5" }}>Destinations</em>
            </h2>
          </div>
          <a href="#booking" style={{ color: "#6D94C5", textDecoration: "none", fontSize: "0.82rem", borderBottom: "1px solid #6D94C5", paddingBottom: 2, fontWeight: 600 }}>
            See all →
          </a>
        </div>

        {mobile ? (
          <div style={{ display: "flex", flexDirection: "column", gap: "0.8rem" }}>
            {destinations.map(d => (
              <div key={d.name} className="dest-card" style={{ height: 170 }}>
                <img src={d.img} alt={d.name} />
                <div className="dest-overlay">
                  <div style={{ position: "absolute", top: "0.8rem", left: "0.8rem" }}><Pill>{d.badge}</Pill></div>
                  <div className="serif" style={{ color: "#fff", fontSize: "1.2rem", marginBottom: "0.15rem" }}>{d.name}</div>
                  <div style={{ color: "rgba(255,255,255,0.62)", fontSize: "0.7rem" }}>{d.country} · {d.tours}</div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div style={{
            display: "grid",
            gridTemplateColumns: tablet ? "1fr 1fr" : "1.5fr 1fr 1fr",
            gridTemplateRows: tablet ? "auto" : "380px 280px",
            gap: "1rem",
          }}>
            {destinations.map((d, i) => (
              <div
                key={d.name}
                className="dest-card"
                style={{ gridRow: !tablet && i === 0 ? "1 / 3" : "auto", height: tablet ? 210 : "auto" }}
              >
                <img src={d.img} alt={d.name} />
                <div className="dest-overlay">
                  <div style={{ position: "absolute", top: "1rem", left: "1rem" }}><Pill>{d.badge}</Pill></div>
                  <div className="serif" style={{ color: "#fff", fontSize: !tablet && i === 0 ? "1.7rem" : "1.15rem", marginBottom: "0.2rem" }}>{d.name}</div>
                  <div style={{ color: "rgba(255,255,255,0.62)", fontSize: "0.7rem" }}>{d.country} · {d.tours}</div>
                </div>
              </div>
            ))}
          </div>
        )}
      </Reveal>
    </section>
  );
}