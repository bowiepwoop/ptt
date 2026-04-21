import { useWindowWidth } from "../shared";

export default function Hero() {
  const width  = useWindowWidth();
  const mobile = width < 768;
  const tablet = width >= 768 && width < 1100;

  return (
    <section id="home" style={{
      height: "100vh", paddingTop: 60,
      display: "flex", flexDirection: "column",
      background: "linear-gradient(135deg,#1C2B3A 0%,#2a3f57 50%,#1C2B3A 100%)",
      position: "relative", overflow: "hidden",
    }}>
      <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at 70% 40%, rgba(109,148,197,0.2) 0%, transparent 60%)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at 20% 80%, rgba(203,220,235,0.07) 0%, transparent 50%)", pointerEvents: "none" }} />

      {mobile ? (
        /* Mobile hero */
        <div style={{ flex: 1, display: "flex", flexDirection: "column", overflow: "hidden" }}>
          <div style={{ flex: "0 0 45%", position: "relative", overflow: "hidden" }}>
            <video
              src="/images/siquijor.mp4"
              autoPlay
              muted
              loop
              playsInline
              style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
            />
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, transparent 40%, #1C2B3A)" }} />
            <div style={{ position: "absolute", bottom: "1rem", left: "1rem", background: "rgba(245,239,230,0.95)", backdropFilter: "blur(8px)", padding: "0.6rem 1rem", borderRadius: 10, border: "1px solid #CBDCEB" }}>
              <div style={{ fontSize: "0.56rem", textTransform: "uppercase", letterSpacing: "0.1em", color: "#6D94C5", fontWeight: 700, marginBottom: "0.1rem" }}>Now Booking</div>
              <div className="serif" style={{ fontSize: "0.92rem", color: "#1C2B3A" }}>Praised Travel & Tours</div>
              <div style={{ fontSize: "0.72rem", color: "#6D94C5", fontWeight: 500 }}>Inquire for rates</div>
            </div>
          </div>
          <div style={{ flex: 1, padding: "1.8rem 1.25rem 2rem", position: "relative", zIndex: 1, overflowY: "auto" }}>
            <div className="a1" style={{ display: "flex", alignItems: "center", gap: "0.6rem", marginBottom: "0.9rem" }}>
              <div style={{ width: "1.4rem", height: 1, background: "#6D94C5" }} />
              <span style={{ fontSize: "0.6rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#CBDCEB", fontWeight: 500 }}>Adventure Starts Here</span>
            </div>
            <h1 className="serif a2" style={{ fontSize: "clamp(2rem,8vw,2.6rem)", lineHeight: 1.08, color: "#F5EFE6", letterSpacing: "-0.02em", marginBottom: "0.9rem" }}>
              Journeys That<br /><em style={{ color: "#CBDCEB" }}>Stir the Soul</em>
            </h1>
            <p className="a3" style={{ color: "rgba(245,239,230,0.58)", fontSize: "0.88rem", lineHeight: 1.72, marginBottom: "1.5rem" }}>
              Affordable, well-organized, and memorable travel experiences for individuals, families, and groups across the Philippines.
            </p>
            <div className="a4" style={{ display: "flex", gap: "0.8rem", flexWrap: "wrap", alignItems: "center" }}>
              <a href="#services" className="btn btn-blue" style={{ boxShadow: "0 8px 24px rgba(109,148,197,0.38)" }}>Our Services</a>
              <a href="#destinations" style={{ color: "rgba(245,239,230,0.5)", textDecoration: "none", fontSize: "0.86rem" }}>Explore →</a>
            </div>
            <div className="a5" style={{ display: "flex", gap: "2rem", marginTop: "2rem", paddingTop: "1.2rem", borderTop: "1px solid rgba(109,148,197,0.22)" }}>
              {[["100+","Happy Travelers"],["10+","Destinations"],["100%","Dedicated"]].map(([n,l]) => (
                <div key={l}>
                  <div className="serif" style={{ fontSize: "1.5rem", color: "#CBDCEB" }}>{n}</div>
                  <div style={{ fontSize: "0.6rem", color: "rgba(245,239,230,0.38)", letterSpacing: "0.08em", textTransform: "uppercase" }}>{l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        /* Desktop hero */
        <div style={{ flex: 1, display: "grid", gridTemplateColumns: "1fr 1fr", overflow: "hidden" }}>
          {/* Left text */}
          <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", padding: tablet ? "3rem 2.5rem" : "5rem 4rem 5rem 5rem", position: "relative", zIndex: 1 }}>
            <div className="a1" style={{ display: "flex", alignItems: "center", gap: "0.8rem", marginBottom: "1.4rem" }}>
              <div style={{ width: "2rem", height: 1, background: "#6D94C5" }} />
              <span style={{ fontSize: "0.66rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "#CBDCEB", fontWeight: 500 }}>Adventure Starts Here</span>
            </div>
            <h1 className="serif a2" style={{ fontSize: "clamp(2.6rem,4vw,4.4rem)", lineHeight: 1.05, color: "#F5EFE6", letterSpacing: "-0.02em", marginBottom: "1.4rem" }}>
              Your Travel<br /><em style={{ color: "#CBDCEB" }}>Our Praise</em>
            </h1>
            <p className="a3" style={{ color: "rgba(245,239,230,0.58)", fontSize: "0.98rem", lineHeight: 1.78, maxWidth: 400, marginBottom: "2.2rem" }}>
              Affordable, well-organized and memorable travel experiences for individuals, families and groups across the Philippines.
            </p>
            <div className="a4" style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
              <a href="#services" className="btn btn-blue" style={{ padding: "0.85rem 2rem", fontSize: "0.88rem", boxShadow: "0 8px 24px rgba(109,148,197,0.38)" }}>Our Services</a>
              <a href="#destinations" style={{ color: "rgba(245,239,230,0.5)", textDecoration: "none", fontSize: "0.86rem" }}>Explore Destinations →</a>
            </div>
            <div className="a5" style={{ display: "flex", gap: "3rem", marginTop: "3.5rem", paddingTop: "1.8rem", borderTop: "1px solid rgba(109,148,197,0.22)" }}>
              {[["100+","Happy Travelers"],["10+","Destinations"],["100%","Dedicated"]].map(([n,l]) => (
                <div key={l}>
                  <div className="serif" style={{ fontSize: "1.75rem", color: "#CBDCEB" }}>{n}</div>
                  <div style={{ fontSize: "0.66rem", color: "rgba(245,239,230,0.38)", letterSpacing: "0.08em", textTransform: "uppercase", marginTop: "0.15rem" }}>{l}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — portrait video */}
          <div style={{ position: "relative", width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden", padding: "2rem 2rem 2rem 0" }}>
            {/* Left-side fade so video blends into the dark background */}
            <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: "6rem", background: "linear-gradient(to right, #1C2B3A, transparent)", zIndex: 2, pointerEvents: "none" }} />

            {/* Portrait video container — centered, natural aspect ratio */}
            <div style={{
              position: "relative",
              height: "calc(100% - 2rem)",
              maxHeight: 640,
              aspectRatio: "9 / 16",
              borderRadius: 20,
              overflow: "hidden",
              boxShadow: "0 24px 64px rgba(0,0,0,0.5)",
              flexShrink: 0,
            }}>
              <video
                src="/images/siquijor.mp4"
                autoPlay
                muted
                loop
                playsInline
                style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
              />
              {/* Bottom gradient overlay */}
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(28,43,58,0.65) 0%, transparent 50%)", pointerEvents: "none" }} />

              {/* Badge */}
              <div style={{ position: "absolute", bottom: "1.2rem", left: "50%", transform: "translateX(-50%)", whiteSpace: "nowrap", background: "rgba(245,239,230,0.96)", backdropFilter: "blur(8px)", padding: "0.7rem 1.2rem", borderRadius: 12, border: "1px solid #CBDCEB", zIndex: 2 }}>
                <div style={{ fontSize: "0.56rem", textTransform: "uppercase", letterSpacing: "0.1em", color: "#6D94C5", fontWeight: 700, marginBottom: "0.15rem" }}>Now Booking</div>
                <div className="serif" style={{ fontSize: "0.95rem", color: "#1C2B3A" }}>Praised Travel & Tours</div>
                <div style={{ fontSize: "0.72rem", color: "#6D94C5", fontWeight: 500, marginTop: "0.1rem" }}>Inquire for rates</div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}