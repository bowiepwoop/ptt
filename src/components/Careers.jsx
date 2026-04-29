import { useState, useEffect, useRef } from "react";
import { Reveal, Tag, useWindowWidth } from "../shared";
import { Briefcase, GraduationCap, Mail, FileText, ChevronRight, MapPin, Clock, Users, Loader2 } from "lucide-react";
import { gsap } from "gsap";

// Replace with your actual Google Form embed URL
const APPLICANT_FORM_URL = "https://docs.google.com/forms/d/e/YOUR_APPLICANT_FORM_ID/viewform?embedded=true";

// Animated bouncing dot
function LoadingDot({ delay }) {
  const dotRef = useRef(null);
  useEffect(() => {
    if (dotRef.current) {
      gsap.to(dotRef.current, { y: -7, duration: 0.42, repeat: -1, yoyo: true, ease: "power1.inOut", delay });
    }
  }, [delay]);
  return <div ref={dotRef} style={{ width: 7, height: 7, borderRadius: "50%", background: "#6D94C5" }} />;
}
const COMPANY_EMAIL      = "praisedtravelandtours@gmail.com";

const perks = [
  { icon: <MapPin size={18} />,   label: "Travel Exposure",    desc: "Experience destinations firsthand with the team." },
  { icon: <Users size={18} />,    label: "Great Team Culture", desc: "Work with passionate, fun-loving travel enthusiasts." },
  { icon: <Clock size={18} />,    label: "Flexible Setup",     desc: "We value output and hustle, not just clock hours." },
  { icon: <FileText size={18} />, label: "Learning & Growth",  desc: "Hands-on experience in tourism and events management." },
];

export default function Careers() {
  const width  = useWindowWidth();
  const mobile = width < 768;
  const tablet = width >= 768 && width < 1100;
  const px = mobile ? "1.25rem" : tablet ? "2.5rem" : "5rem";
  const py = mobile ? "4rem" : "7rem";

  const [formLoaded, setFormLoaded] = useState(false);
  const loaderRef  = useRef(null);
  const formRef    = useRef(null);
  const spinnerRef = useRef(null);

  useEffect(() => {
    if (spinnerRef.current) {
      gsap.to(spinnerRef.current, { rotation: 360, duration: 1, repeat: -1, ease: "linear" });
    }
  }, []);

  const handleLoad = () => {
    if (loaderRef.current && formRef.current) {
      gsap.to(loaderRef.current, { opacity: 0, y: -8, duration: 0.4, ease: "power2.in", onComplete: () => setFormLoaded(true) });
      gsap.fromTo(formRef.current, { opacity: 0, y: 12 }, { opacity: 1, y: 0, duration: 0.5, ease: "power2.out", delay: 0.35 });
    }
  };

  return (
    <section id="careers" style={{ padding: `${py} ${px}`, background: "#1C2B3A" }}>
      <Reveal>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
          <Tag>Join the Team</Tag>
          <h2 className="serif" style={{ fontSize: "clamp(1.8rem,3vw,2.8rem)", color: "#F5EFE6", lineHeight: 1.1, marginBottom: "1rem" }}>
            Careers <em style={{ color: "#CBDCEB" }}>With Us</em>
          </h2>
          <p style={{ color: "rgba(245,239,230,0.55)", fontSize: "0.93rem", lineHeight: 1.78, maxWidth: 520, margin: "0 auto" }}>
            Be part of a growing travel community. Whether you're starting your career or looking to grow — there's a place for you at Praised Travel and Tours.
          </p>
        </div>

        {/* Perks */}
        <div style={{ display: "grid", gridTemplateColumns: mobile ? "1fr 1fr" : "repeat(4,1fr)", gap: "1rem", marginBottom: "3.5rem" }}>
          {perks.map(p => (
            <div key={p.label} style={{ background: "rgba(203,220,235,0.06)", border: "1px solid rgba(109,148,197,0.18)", borderRadius: 16, padding: "1.4rem 1.1rem", textAlign: "center" }}>
              <div style={{ width: 46, height: 46, borderRadius: 12, background: "linear-gradient(135deg,#6D94C5,#CBDCEB)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 0.9rem", color: "#1C2B3A" }}>
                {p.icon}
              </div>
              <div className="serif" style={{ fontSize: "0.92rem", color: "#F5EFE6", marginBottom: "0.35rem" }}>{p.label}</div>
              <p style={{ fontSize: "0.74rem", color: "rgba(245,239,230,0.45)", lineHeight: 1.6, margin: 0 }}>{p.desc}</p>
            </div>
          ))}
        </div>

        {/* Two cards */}
        <div style={{ display: "grid", gridTemplateColumns: mobile || tablet ? "1fr" : "1fr 1fr", gap: "1.5rem" }}>

          {/* Applicant card */}
          <div style={{ background: "rgba(203,220,235,0.06)", border: "1px solid rgba(109,148,197,0.2)", borderRadius: 22, overflow: "hidden" }}>
            {/* Card header */}
            <div style={{ background: "#6D94C5", padding: "1.4rem 1.6rem", display: "flex", alignItems: "center", gap: "0.9rem" }}>
              <div style={{ width: 42, height: 42, borderRadius: 12, background: "rgba(255,255,255,0.18)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Briefcase size={20} color="#fff" strokeWidth={1.5} />
              </div>
              <div>
                <div className="serif" style={{ color: "#fff", fontSize: "1.1rem" }}>Job Applicants</div>
                <div style={{ color: "rgba(245,239,230,0.7)", fontSize: "0.72rem", marginTop: "0.1rem" }}>Fill out our application form</div>
              </div>
            </div>

            <div style={{ padding: "1.6rem" }}>
              <p style={{ fontSize: "0.86rem", color: "rgba(245,239,230,0.58)", lineHeight: 1.75, marginBottom: "1.4rem" }}>
                We're always on the lookout for passionate individuals who love travel, people, and adventure. Send your application through our form and we'll get back to you.
              </p>

              <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem", marginBottom: "1.6rem" }}>
                {["Tour Coordinator", "Tour Guide", "Social Media Manager", "Admin Staff"].map(role => (
                  <div key={role} style={{ display: "flex", alignItems: "center", gap: "0.6rem", fontSize: "0.82rem", color: "rgba(245,239,230,0.65)" }}>
                    <ChevronRight size={14} color="#6D94C5" />
                    {role}
                  </div>
                ))}
              </div>

              {/* Google Form with loader */}
              <div style={{ borderRadius: 12, overflow: "hidden", border: "1px solid rgba(109,148,197,0.2)", marginBottom: "0.8rem", position: "relative", minHeight: 480 }}>
                {!formLoaded && (
                  <div ref={loaderRef} style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", background: "rgba(28,43,58,0.95)", gap: "1rem", zIndex: 2 }}>
                    <div ref={spinnerRef} style={{ color: "#6D94C5" }}>
                      <Loader2 size={32} strokeWidth={1.5} />
                    </div>
                    <div style={{ textAlign: "center" }}>
                      <div style={{ fontSize: "0.82rem", color: "#F5EFE6", fontWeight: 600, marginBottom: "0.2rem" }}>Loading application form…</div>
                      <div style={{ fontSize: "0.7rem", color: "rgba(245,239,230,0.4)" }}>Please wait a moment</div>
                    </div>
                    <div style={{ display: "flex", gap: "0.4rem" }}>
                      {[0, 1, 2].map(i => <LoadingDot key={i} delay={i * 0.18} />)}
                    </div>
                  </div>
                )}
                <div ref={formRef} style={{ opacity: 0 }}>
                  <iframe src={APPLICANT_FORM_URL} width="100%" height="480" frameBorder="0" title="Job Application Form" style={{ display: "block" }} onLoad={handleLoad} />
                </div>
              </div>
              <p style={{ textAlign: "center", fontSize: "0.66rem", color: "rgba(245,239,230,0.3)", margin: 0 }}>
                Powered by Google Forms
              </p>
            </div>
          </div>

          {/* Intern card */}
          <div style={{ background: "rgba(203,220,235,0.06)", border: "1px solid rgba(109,148,197,0.2)", borderRadius: 22, overflow: "hidden" }}>
            {/* Card header */}
            <div style={{ background: "#4a8fa8", padding: "1.4rem 1.6rem", display: "flex", alignItems: "center", gap: "0.9rem" }}>
              <div style={{ width: 42, height: 42, borderRadius: 12, background: "rgba(255,255,255,0.18)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <GraduationCap size={20} color="#fff" strokeWidth={1.5} />
              </div>
              <div>
                <div className="serif" style={{ color: "#fff", fontSize: "1.1rem" }}>Internship Program</div>
                <div style={{ color: "rgba(245,239,230,0.7)", fontSize: "0.72rem", marginTop: "0.1rem" }}>Send your resume via email</div>
              </div>
            </div>

            <div style={{ padding: "1.6rem" }}>
              <p style={{ fontSize: "0.86rem", color: "rgba(245,239,230,0.58)", lineHeight: 1.75, marginBottom: "1.6rem" }}>
                Are you a student looking for OJT or internship hours? We welcome interns from hospitality, marketing and related courses. Gain real-world travel industry experience with our team.
              </p>

              {/* What you'll do */}
              <div style={{ marginBottom: "1.8rem" }}>
                <div style={{ fontSize: "0.66rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.12em", color: "#6D94C5", marginBottom: "0.8rem" }}>What you'll experience</div>
                <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
                  {[
                    "Social media content creation",
                    "Client communication and booking",
                  ].map(item => (
                    <div key={item} style={{ display: "flex", alignItems: "center", gap: "0.6rem", fontSize: "0.82rem", color: "rgba(245,239,230,0.65)" }}>
                      <ChevronRight size={14} color="#4a8fa8" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              {/* How to apply */}
              <div style={{ background: "rgba(109,148,197,0.1)", borderRadius: 14, padding: "1.3rem", border: "1px solid rgba(109,148,197,0.2)" }}>
                <div style={{ fontSize: "0.66rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.12em", color: "#CBDCEB", marginBottom: "0.9rem" }}>How to Apply</div>

                <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                  {[
                    ["1", "Prepare your resume and Memorandun of Agreement (MOA) from your school."],
                    ["2", "Email us with the subject line: \"Intern\""],
                    ["3", "We'll reply within 2 - 3 business days with next steps."],
                  ].map(([num, text]) => (
                    <div key={num} style={{ display: "flex", gap: "0.7rem", alignItems: "flex-start" }}>
                      <div style={{ minWidth: 22, height: 22, borderRadius: "50%", background: "#4a8fa8", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.65rem", fontWeight: 700, flexShrink: 0 }}>{num}</div>
                      <span style={{ fontSize: "0.8rem", color: "rgba(245,239,230,0.6)", lineHeight: 1.6 }}>{text}</span>
                    </div>
                  ))}
                </div>

                {/* Email button */}
                <a
                  href={`mailto:${COMPANY_EMAIL}?subject=Internship Application – Your Name&body=Hi Praised Travel and Tours,%0A%0AI am interested in applying for an internship. Please find my resume attached.%0A%0AThank you!`}
                  style={{
                    display: "flex", alignItems: "center", justifyContent: "center", gap: "0.6rem",
                    marginTop: "1.2rem", padding: "0.85rem 1.2rem", borderRadius: 12,
                    background: "#4a8fa8", color: "#fff",
                    textDecoration: "none", fontWeight: 700, fontSize: "0.86rem",
                    transition: "all 0.2s", boxShadow: "0 6px 20px rgba(74,143,168,0.3)",
                  }}
                  onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-2px)"; }}
                  onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; }}
                >
                  <Mail size={17} strokeWidth={1.5} />
                  Send Resume to {COMPANY_EMAIL}
                </a>
              </div>
            </div>
          </div>

        </div>
      </Reveal>
    </section>
  );
}