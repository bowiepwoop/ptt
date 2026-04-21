import { Reveal, Tag, Pill, useWindowWidth } from "../shared";
import { dayhikeRates, daytourRates, overnight2D1N, overnight3D2N, domesticTours } from "../data";

function RateList({ title, items, badge, color = "#6D94C5" }) {
  return (
    <div style={{ background: "rgba(203,220,235,0.06)", borderRadius: 18, border: "1px solid rgba(109,148,197,0.2)", overflow: "hidden" }}>
      <div style={{ background: color, padding: "1rem 1.3rem", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div className="serif" style={{ color: "#fff", fontSize: "1rem" }}>{title}</div>
        <Pill style={{ background: "rgba(255,255,255,0.22)", color: "#fff" }}>{badge}</Pill>
      </div>
      <div style={{ padding: "1rem 1.3rem", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
        {items.map(item => (
          <div key={item} style={{ display: "flex", alignItems: "center", gap: "0.6rem", fontSize: "0.8rem", color: "rgba(245,239,230,0.65)", borderBottom: "1px solid rgba(109,148,197,0.12)", paddingBottom: "0.4rem" }}>
            <div style={{ minWidth: 6, height: 6, borderRadius: "50%", background: color === "#1C2B3A" ? "#6D94C5" : color, flexShrink: 0 }} />
            {item}
          </div>
        ))}
      </div>
      <div style={{ padding: "0.8rem 1.3rem", borderTop: "1px solid rgba(109,148,197,0.12)" }}>
        <a href="#booking" className="btn btn-blue" style={{ display: "block", textAlign: "center", fontSize: "0.76rem", padding: "0.5rem", width: "100%" }}>
          Inquire for Rates
        </a>
      </div>
    </div>
  );
}

export default function Packages() {
  const width  = useWindowWidth();
  const mobile = width < 768;
  const tablet = width >= 768 && width < 1100;
  const px = mobile ? "1.25rem" : tablet ? "2.5rem" : "5rem";
  const py = mobile ? "4rem" : "7rem";

  return (
    <section id="packages" style={{ padding: `${py} ${px}`, background: "#1C2B3A" }}>
      <Reveal>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <Tag>Adventure is Calling!</Tag>
          <h2 className="serif" style={{ fontSize: "clamp(1.8rem,3vw,2.8rem)", lineHeight: 1.1, marginBottom: "1rem", color: "#F5EFE6" }}>
            Tour <em style={{ color: "#CBDCEB" }}>Packages</em>
          </h2>
          <p style={{ color: "rgba(245,239,230,0.55)", fontSize: "0.92rem", lineHeight: 1.78, maxWidth: 580, margin: "0 auto" }}>
            Hassle-free travel · Affordable packages · Perfect for friends & family.
            Message us now to reserve your slot! <strong style={{ color: "#CBDCEB" }}>Limited seats only.</strong>
          </p>
        </div>

        {/* Rate lists */}
        <h3 className="serif" style={{ fontSize: "1.3rem", marginBottom: "1.2rem", color: "#F5EFE6" }}>
          All <em style={{ color: "#CBDCEB" }}>Available Tours</em>
        </h3>
        <div style={{ display: "grid", gridTemplateColumns: mobile ? "1fr" : tablet ? "1fr 1fr" : "repeat(3,1fr)", gap: "1.2rem", marginBottom: "1.2rem" }}>
          <RateList title="Dayhike Rates"  items={dayhikeRates}  badge="Day Trip"  color="#6D94C5" />
          <RateList title="Daytour Rates"  items={daytourRates}  badge="Day Trip"  color="#4a8fa8" />
          <RateList title="2D1N Packages"  items={overnight2D1N} badge="Overnight" color="#5a8fb8" />
        </div>
        <div style={{ display: "grid", gridTemplateColumns: mobile ? "1fr" : "1fr 1fr", gap: "1.2rem" }}>
          <RateList title="3D2N Packages"  items={overnight3D2N} badge="Multi-day" color="#3a7a9a" />
          <RateList title="Domestic Tours" items={domesticTours} badge="Exclusive" color="#e07b54" />
        </div>

        {/* Trust note */}
        <div style={{ marginTop: "2rem", padding: "1.3rem 1.6rem", background: "rgba(203,220,235,0.06)", borderRadius: 14, border: "1px solid rgba(109,148,197,0.25)", textAlign: "center" }}>
          <p style={{ fontSize: "0.85rem", color: "rgba(245,239,230,0.6)", lineHeight: 1.75 }}>
            We issue <strong style={{ color: "#CBDCEB" }}>official receipts</strong> and <strong style={{ color: "#CBDCEB" }}>travel insurance</strong> upon request.
            For exclusive tours, maximum of <strong style={{ color: "#CBDCEB" }}>12 guests only</strong>.{" "}
            <a href="#booking" style={{ color: "#6D94C5", fontWeight: 700 }}>Message us</a> to reserve your slot!
          </p>
        </div>
      </Reveal>
    </section>
  );
}