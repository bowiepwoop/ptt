import { useState, useEffect, useRef } from "react";
import { Reveal, Tag, useWindowWidth } from "../shared";
import { GOOGLE_FORM_URL } from "../data";
import { MapPin, Clock, CreditCard, Smile, Phone, Mail, PlaneTakeoff, Loader2 } from "lucide-react";
import { gsap } from "gsap";

export default function Booking() {
  const width  = useWindowWidth();
  const mobile = width < 768;
  const tablet = width >= 768 && width < 1100;
  const px = mobile ? "1.25rem" : tablet ? "2.5rem" : "5rem";
  const py = mobile ? "4rem" : "7rem";

  const [formLoaded, setFormLoaded] = useState(false);
  const loaderRef   = useRef(null);
  const formRef     = useRef(null);
  const spinnerRef  = useRef(null);

  // Spinner rotation
  useEffect(() => {
    if (spinnerRef.current) {
      gsap.to(spinnerRef.current, {
        rotation: 360,
        duration: 1,
        repeat: -1,
        ease: "linear",
      });
    }
  }, []);

  // Fade out loader, fade in form on load
  const handleLoad = () => {
    if (loaderRef.current && formRef.current) {
      gsap.to(loaderRef.current, {
        opacity: 0, y: -8, duration: 0.4, ease: "power2.in",
        onComplete: () => setFormLoaded(true),
      });
      gsap.fromTo(formRef.current,
        { opacity: 0, y: 12 },
        { opacity: 1, y: 0, duration: 0.5, ease: "power2.out", delay: 0.35 }
      );
    }
  };

  const steps = [
    { icon: <MapPin size={16} />,     title: "Fill the form",  desc: "Tell us your dream destination, dates, and budget." },
    { icon: <Clock size={16} />,      title: "Get a quote",    desc: "We'll send a custom package within 24 hrs." },
    { icon: <CreditCard size={16} />, title: "Confirm & Pay",  desc: "Flexible payment options available." },
    { icon: <Smile size={16} />,      title: "Just Explore!",  desc: "We handle everything — you enjoy the trip." },
  ];

  return (
    <section id="booking" style={{ padding: `${py} ${px}`, background: "#E8DFCA" }}>
      <Reveal>
        <div style={{ display: "grid", gridTemplateColumns: mobile || tablet ? "1fr" : "1fr 1.4fr", gap: mobile ? "2.5rem" : "5rem", alignItems: "start" }}>

          {/* Left */}
          <div>
            <Tag>Start Your Journey</Tag>
            <h2 className="serif" style={{ fontSize: "clamp(1.8rem,3vw,2.8rem)", marginBottom: "0.9rem", lineHeight: 1.1, color: "#1C2B3A" }}>
              Book Your <em style={{ color: "#6D94C5" }}>Dream Trip</em>
            </h2>
            <p style={{ fontSize: "0.92rem", color: "#4a6070", lineHeight: 1.78, marginBottom: "2rem" }}>
              Fill out the form and our travel experts will get back to you within 24 hours with a personalized itinerary and quote.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "1rem", marginBottom: "2rem" }}>
              {steps.map(({ icon, title, desc }) => (
                <div key={title} style={{ display: "flex", gap: "0.8rem", alignItems: "flex-start" }}>
                  <div style={{ minWidth: 34, height: 34, borderRadius: "50%", background: "#6D94C5", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    {icon}
                  </div>
                  <div>
                    <strong style={{ display: "block", fontSize: "0.9rem", color: "#1C2B3A", marginBottom: "0.12rem" }}>{title}</strong>
                    <span style={{ fontSize: "0.78rem", color: "#4a6070" }}>{desc}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Contact */}
            <div style={{ padding: "1.2rem", background: "#fff", borderRadius: 14, border: "1px solid #CBDCEB" }}>
              <div style={{ fontSize: "0.66rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: "#6D94C5", marginBottom: "0.7rem" }}>Or reach us directly</div>
              <a href="tel:09302091648" style={{ display: "flex", alignItems: "center", gap: "0.55rem", color: "#1C2B3A", textDecoration: "none", fontSize: "0.86rem", fontWeight: 600, marginBottom: "0.55rem" }}>
                <Phone size={17} color="#6D94C5" strokeWidth={1.5} />
                09302091648
              </a>
              <a href="mailto:praisedtravelandtours@gmail.com" style={{ display: "flex", alignItems: "center", gap: "0.55rem", color: "#1C2B3A", textDecoration: "none", fontSize: "0.82rem" }}>
                <Mail size={17} color="#6D94C5" strokeWidth={1.5} />
                praisedtravelandtours@gmail.com
              </a>
            </div>
          </div>

          {/* Form card */}
          <div style={{ background: "#fff", borderRadius: 22, overflow: "hidden", boxShadow: "0 20px 60px rgba(109,148,197,0.14)", border: "1px solid #CBDCEB" }}>
            {/* Header */}
            <div style={{ background: "#6D94C5", padding: "1.25rem 1.6rem", display: "flex", alignItems: "center", gap: "0.7rem" }}>
              <div style={{ width: 36, height: 36, borderRadius: 10, background: "rgba(255,255,255,0.2)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <PlaneTakeoff size={20} color="#fff" strokeWidth={1.5} />
              </div>
              <div>
                <div className="serif" style={{ color: "#fff", fontSize: "1.08rem" }}>Booking Inquiry</div>
                <div style={{ color: "rgba(245,239,230,0.72)", fontSize: "0.72rem", marginTop: "0.1rem" }}>We'll respond within 24 hours</div>
              </div>
            </div>

            {/* iframe + loader */}
            <div style={{ padding: "1.2rem 1.5rem 1.8rem" }}>
              <div style={{ borderRadius: 12, overflow: "hidden", border: "1px solid #CBDCEB", position: "relative", minHeight: 620 }}>

                {/* Loading state */}
                {!formLoaded && (
                  <div ref={loaderRef} style={{
                    position: "absolute", inset: 0,
                    display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
                    background: "#F5EFE6", gap: "1rem", zIndex: 2,
                  }}>
                    <div ref={spinnerRef} style={{ display: "flex", alignItems: "center", justifyContent: "center", color: "#6D94C5" }}>
                      <Loader2 size={36} strokeWidth={1.5} />
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "0.3rem" }}>
                      <span style={{ fontSize: "0.84rem", color: "#1C2B3A", fontWeight: 600 }}>Loading booking form…</span>
                      <span style={{ fontSize: "0.72rem", color: "#9ab0c8" }}>Please wait a moment</span>
                    </div>
                    {/* Animated dots */}
                    <div style={{ display: "flex", gap: "0.4rem" }}>
                      {[0, 1, 2].map(i => (
                        <LoadingDot key={i} delay={i * 0.18} />
                      ))}
                    </div>
                  </div>
                )}

                {/* iframe */}
                <div ref={formRef} style={{ opacity: 0 }}>
                  <iframe
                    src={GOOGLE_FORM_URL}
                    width="100%"
                    height="620"
                    frameBorder="0"
                    title="Booking Form"
                    style={{ display: "block" }}
                    onLoad={handleLoad}
                  />
                </div>
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

// Animated bouncing dot
function LoadingDot({ delay }) {
  const dotRef = useRef(null);
  useEffect(() => {
    if (dotRef.current) {
      gsap.to(dotRef.current, {
        y: -8,
        duration: 0.45,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
        delay,
      });
    }
  }, [delay]);

  return (
    <div ref={dotRef} style={{ width: 8, height: 8, borderRadius: "50%", background: "#6D94C5" }} />
  );
}