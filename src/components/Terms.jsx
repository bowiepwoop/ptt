import { Reveal, Tag, useWindowWidth } from "../shared";
import { terms } from "../data";

export default function Terms() {
  const width  = useWindowWidth();
  const mobile = width < 768;
  const tablet = width >= 768 && width < 1100;
  const px = mobile ? "1.25rem" : tablet ? "2.5rem" : "5rem";
  const py = mobile ? "4rem" : "7rem";

  return (
    <section id="terms" style={{ padding: `${py} ${px}`, background: "#1C2B3A" }}>
      <Reveal>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <Tag>Please Read Before Booking</Tag>
            <h2 className="serif" style={{ fontSize: "clamp(1.8rem,3vw,2.8rem)", color: "#F5EFE6", lineHeight: 1.1 }}>
              Terms & <em style={{ color: "#CBDCEB" }}>Conditions</em>
            </h2>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {terms.map(t => (
              <div
                key={t.num}
                style={{
                  display: "flex", gap: "1.2rem", alignItems: "flex-start",
                  background: "rgba(203,220,235,0.05)",
                  border: "1px solid rgba(109,148,197,0.18)",
                  borderRadius: 16, padding: "1.35rem 1.5rem",
                  transition: "background 0.2s",
                }}
                onMouseEnter={e => { e.currentTarget.style.background = "rgba(203,220,235,0.11)"; }}
                onMouseLeave={e => { e.currentTarget.style.background = "rgba(203,220,235,0.05)"; }}
              >
                <div style={{
                  minWidth: 40, height: 40, borderRadius: "50%", background: t.color,
                  color: "#fff", display: "flex", alignItems: "center", justifyContent: "center",
                  fontWeight: 700, fontSize: "1rem", flexShrink: 0,
                  boxShadow: `0 4px 14px ${t.color}55`,
                }}>
                  {t.num}
                </div>
                <p style={{
                  color: t.highlight ? "#CBDCEB" : "rgba(245,239,230,0.76)",
                  fontSize: t.highlight ? "1rem" : "0.88rem",
                  fontWeight: t.highlight ? 700 : 400,
                  lineHeight: 1.72, margin: 0,
                }}>
                  {t.text}
                </p>
              </div>
            ))}
          </div>

          <div style={{ textAlign: "center", marginTop: "2.5rem", padding: "1.4rem", background: "rgba(109,148,197,0.1)", borderRadius: 14, border: "1px solid rgba(109,148,197,0.22)" }}>
            <p style={{ color: "#CBDCEB", fontSize: "0.86rem", lineHeight: 1.75 }}>
              By booking with Praised Travel and Tours, you agree to these terms and conditions.<br />
              Contact us at{" "}
              <a href="tel:09302091648" style={{ color: "#6D94C5", fontWeight: 700 }}>09302091648</a>
              {" "}or{" "}
              <a href="mailto:praisedtravelandtours@gmail.com" style={{ color: "#6D94C5", fontWeight: 700 }}>praisedtravelandtours@gmail.com</a>
            </p>
          </div>
        </div>
      </Reveal>
    </section>
  );
}