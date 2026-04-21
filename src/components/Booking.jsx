import { Reveal, Tag, useWindowWidth } from "../shared";
import { GOOGLE_FORM_URL } from "../data";

export default function Booking() {
  const width  = useWindowWidth();
  const mobile = width < 768;
  const tablet = width >= 768 && width < 1100;
  const px = mobile ? "1.25rem" : tablet ? "2.5rem" : "5rem";
  const py = mobile ? "4rem" : "7rem";

  return (
    <section id="booking" style={{ padding: `${py} ${px}`, background: "#F5EFE6" }}>
      <Reveal>
        <div style={{
          display: "grid",
          gridTemplateColumns: mobile || tablet ? "1fr" : "1fr 1.4fr",
          gap: mobile ? "2.5rem" : "5rem",
          alignItems: "start",
        }}>
          {/* Left info */}
          <div>
            <Tag>Start Your Journey</Tag>
            <h2 className="serif" style={{ fontSize: "clamp(1.8rem,3vw,2.8rem)", marginBottom: "0.9rem", lineHeight: 1.1 }}>
              Book Your <em style={{ color: "#6D94C5" }}>Dream Trip</em>
            </h2>
            <p style={{ fontSize: "0.92rem", color: "#4a6070", lineHeight: 1.78, marginBottom: "2rem" }}>
              Fill out the form and our travel experts will get back to you within 24 hours with a personalized itinerary and quote.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "1rem", marginBottom: "2rem" }}>
              {[
                ["1", "Fill the form",  "Tell us your dream destination, dates, and budget."],
                ["2", "Get a quote",    "We'll send a custom package within 24 hrs."],
                ["3", "Confirm & Pay",  "Flexible payment options available."],
                ["4", "Just Explore!", "We handle everything — you enjoy the trip."],
              ].map(([num, title, desc]) => (
                <div key={num} style={{ display: "flex", gap: "0.8rem", alignItems: "flex-start" }}>
                  <div style={{ minWidth: 30, height: 30, borderRadius: "50%", background: "#6D94C5", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.76rem", fontWeight: 700, flexShrink: 0 }}>{num}</div>
                  <div>
                    <strong style={{ display: "block", fontSize: "0.9rem", color: "#1C2B3A", marginBottom: "0.12rem" }}>{title}</strong>
                    <span style={{ fontSize: "0.78rem", color: "#4a6070" }}>{desc}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Direct contact */}
            <div style={{ padding: "1.2rem", background: "#E8DFCA", borderRadius: 14, border: "1px solid #CBDCEB" }}>
              <div style={{ fontSize: "0.66rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: "#6D94C5", marginBottom: "0.7rem" }}>Or reach us directly</div>
              <a href="tel:09302091648" style={{ display: "flex", alignItems: "center", gap: "0.55rem", color: "#1C2B3A", textDecoration: "none", fontSize: "0.86rem", fontWeight: 600, marginBottom: "0.55rem" }}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#6D94C5" style={{ width: 17, height: 17, flexShrink: 0 }}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                </svg>
                09302091648
              </a>
              <a href="mailto:praisedtravelandtours@gmail.com" style={{ display: "flex", alignItems: "center", gap: "0.55rem", color: "#1C2B3A", textDecoration: "none", fontSize: "0.82rem" }}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#6D94C5" style={{ width: 17, height: 17, flexShrink: 0 }}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 13.5h3.86a2.25 2.25 0 0 1 2.012 1.244l.256.512a2.25 2.25 0 0 0 2.013 1.244h3.218a2.25 2.25 0 0 0 2.013-1.244l.256-.512a2.25 2.25 0 0 1 2.013-1.244h3.859m-19.5.338V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 0 0-2.15-1.588H6.911a2.25 2.25 0 0 0-2.15 1.588L2.35 13.177a2.25 2.25 0 0 0-.1.661Z" />
                </svg>
                praisedtravelandtours@gmail.com
              </a>
            </div>
          </div>

          {/* Google Form card */}
          <div style={{ background: "#fff", borderRadius: 22, overflow: "hidden", boxShadow: "0 20px 60px rgba(109,148,197,0.14)", border: "1px solid #CBDCEB" }}>
            {/* Card header */}
            <div style={{ background: "#6D94C5", padding: "1.25rem 1.6rem", display: "flex", alignItems: "center", gap: "0.7rem" }}>
              <div style={{ width: 36, height: 36, borderRadius: 10, background: "rgba(255,255,255,0.2)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.1rem" }}>✈</div>
              <div>
                <div className="serif" style={{ color: "#fff", fontSize: "1.08rem" }}>Booking Inquiry</div>
                <div style={{ color: "rgba(245,239,230,0.72)", fontSize: "0.72rem", marginTop: "0.1rem" }}>We'll respond within 24 hours</div>
              </div>
            </div>

            {/* Google Form iframe */}
            <div style={{ padding: "1.2rem 1.5rem 1.8rem" }}>
              <div style={{ borderRadius: 12, overflow: "hidden", border: "1px solid #CBDCEB" }}>
                <iframe
                  src={GOOGLE_FORM_URL}
                  width="100%"
                  height="620"
                  frameBorder="0"
                  title="Booking Form"
                  style={{ display: "block" }}
                >
                  Loading…
                </iframe>
              </div>
              <p style={{ textAlign: "center", fontSize: "0.68rem", color: "#9ab0c8", marginTop: "0.7rem" }}>
                Powered by Google Forms · Your info is safe with us.
              </p>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}