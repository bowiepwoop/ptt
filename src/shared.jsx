import { useState, useEffect, useRef } from "react";

// ─── hooks ────────────────────────────────────────────────────────────────────

// eslint-disable-next-line react-refresh/only-export-components
export function useWindowWidth() {
  const [w, setW] = useState(typeof window !== "undefined" ? window.innerWidth : 1200);
  useEffect(() => {
    const fn = () => setW(window.innerWidth);
    window.addEventListener("resize", fn);
    return () => window.removeEventListener("resize", fn);
  }, []);
  return w;
}

// eslint-disable-next-line react-refresh/only-export-components
export function useReveal() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.08 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return [ref, visible];
}

// ─── small components ─────────────────────────────────────────────────────────

export function Reveal({ children }) {
  const [ref, visible] = useReveal();
  return (
    <div ref={ref} style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(32px)", transition: "opacity 0.7s ease, transform 0.7s ease" }}>
      {children}
    </div>
  );
}

export function Tag({ children }) {
  return (
    <div style={{ fontSize: "0.66rem", fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", color: "#6D94C5", marginBottom: "0.55rem" }}>
      {children}
    </div>
  );
}

export function Pill({ children, style = {} }) {
  return (
    <span style={{ display: "inline-block", padding: "0.25rem 0.75rem", borderRadius: 100, fontSize: "0.62rem", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", background: "#CBDCEB", color: "#1C2B3A", ...style }}>
      {children}
    </span>
  );
}

// Global CSS — inject once at the root level
export const globalCSS = `
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,500;0,700;1,400;1,600&family=DM+Sans:wght@300;400;500;600&display=swap');
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  html { scroll-behavior: smooth; }
  body { margin: 0; font-family: 'DM Sans', sans-serif; }
  .serif { font-family: 'Playfair Display', serif; }

  .btn { display: inline-block; padding: 0.55rem 1.4rem; border-radius: 100px; font-size: 0.82rem; font-weight: 600; cursor: pointer; border: none; text-decoration: none; transition: all 0.22s; font-family: 'DM Sans', sans-serif; }
  .btn-blue  { background: #6D94C5; color: #fff; }
  .btn-blue:hover  { background: #1C2B3A; transform: translateY(-2px); box-shadow: 0 8px 24px rgba(109,148,197,0.35); }
  .btn-dark  { background: #1C2B3A; color: #fff; }
  .btn-dark:hover  { background: #6D94C5; transform: translateY(-2px); }
  .btn-outline { background: transparent; color: #6D94C5; border: 1.5px solid #6D94C5; }
  .btn-outline:hover { background: #6D94C5; color: #fff; transform: translateY(-2px); }

  .dest-card { position: relative; overflow: hidden; border-radius: 16px; cursor: pointer; }
  .dest-card img { width: 100%; height: 100%; object-fit: cover; display: block; transition: transform 0.55s; }
  .dest-card:hover img { transform: scale(1.07); }
  .dest-overlay { position: absolute; inset: 0; background: linear-gradient(to top, rgba(28,43,58,0.88) 0%, transparent 55%); display: flex; flex-direction: column; justify-content: flex-end; padding: 1.2rem; }

  .svc-card { border-radius: 18px; overflow: hidden; background: #fff; border: 1px solid #CBDCEB; transition: transform 0.28s, box-shadow 0.28s; }
  .svc-card:hover { transform: translateY(-6px); box-shadow: 0 16px 48px rgba(109,148,197,0.2); }
  .svc-card img { width: 100%; height: 188px; object-fit: cover; display: block; transition: transform 0.5s; }
  .svc-card:hover img { transform: scale(1.06); }

  .pkg-card { border-radius: 18px; overflow: hidden; background: #fff; border: 1px solid #CBDCEB; transition: transform 0.28s, box-shadow 0.28s; }
  .pkg-card:hover { transform: translateY(-6px); box-shadow: 0 16px 48px rgba(109,148,197,0.2); }
  .pkg-card img { width: 100%; height: 200px; object-fit: cover; display: block; transition: transform 0.5s; }
  .pkg-card:hover img { transform: scale(1.06); }

  .why-card { text-align: center; padding: 1.8rem 1.4rem; background: #fff; border-radius: 18px; border: 1px solid #CBDCEB; transition: transform 0.28s, box-shadow 0.28s; }
  .why-card:hover { transform: translateY(-5px); box-shadow: 0 18px 48px rgba(109,148,197,0.15); }

  .edu-tile { background: #fff; border: 1.5px solid #CBDCEB; border-radius: 14px; padding: 1rem 0.8rem; text-align: center; transition: all 0.22s; cursor: default; }
  .edu-tile:hover { border-color: #6D94C5; transform: translateY(-4px); box-shadow: 0 8px 24px rgba(109,148,197,0.18); }

  .review-card { background: #fff; border-radius: 18px; border: 1px solid #CBDCEB; padding: 1.6rem; transition: transform 0.28s, box-shadow 0.28s; }
  .review-card:hover { transform: translateY(-5px); box-shadow: 0 16px 48px rgba(109,148,197,0.18); }

  .team-card { background: #fff; border-radius: 20px; overflow: hidden; border: 1px solid #CBDCEB; transition: transform 0.28s, box-shadow 0.28s; }
  .team-card:hover { transform: translateY(-6px); box-shadow: 0 18px 48px rgba(109,148,197,0.2); }

  .finput { border: 1.5px solid #CBDCEB; border-radius: 10px; padding: 0.72rem 1rem; font-family: 'DM Sans', sans-serif; font-size: 0.88rem; color: #1C2B3A; background: #F5EFE6; outline: none; width: 100%; transition: border-color 0.2s, box-shadow 0.2s; }
  .finput:focus { border-color: #6D94C5; box-shadow: 0 0 0 3px rgba(109,148,197,0.14); }

  .nav-link { text-decoration: none; font-size: 0.76rem; font-weight: 500; letter-spacing: 0.1em; text-transform: uppercase; color: rgba(245,239,230,0.6); transition: color 0.2s; }
  .nav-link:hover { color: #CBDCEB; }
  .nav-link.active { color: #CBDCEB; }

  .ham { display: flex; flex-direction: column; gap: 5px; cursor: pointer; padding: 6px; background: none; border: none; }
  .ham span { display: block; width: 22px; height: 2px; background: #F5EFE6; border-radius: 2px; transition: all 0.28s; }

  .mmenu { position: fixed; top: 60px; left: 0; right: 0; z-index: 99; background: rgba(18,30,42,0.98); backdrop-filter: blur(16px); padding: 0.4rem 1.25rem 1.4rem; border-bottom: 1px solid rgba(109,148,197,0.18); }
  .mmenu a { display: block; padding: 0.85rem 0; color: rgba(245,239,230,0.65); text-decoration: none; font-size: 0.82rem; font-weight: 500; letter-spacing: 0.12em; text-transform: uppercase; border-bottom: 1px solid rgba(255,255,255,0.05); transition: color 0.2s; }
  .mmenu a:last-child { border-bottom: none; color: #CBDCEB; }
  .mmenu a:hover { color: #fff; }

  @keyframes fadeUp { from { opacity:0; transform:translateY(32px); } to { opacity:1; transform:translateY(0); } }
  .a1 { animation: fadeUp 0.8s 0.10s ease both; }
  .a2 { animation: fadeUp 0.8s 0.24s ease both; }
  .a3 { animation: fadeUp 0.8s 0.38s ease both; }
  .a4 { animation: fadeUp 0.8s 0.52s ease both; }
  .a5 { animation: fadeUp 0.8s 0.66s ease both; }

  @media (max-width: 480px) { .two-col { grid-template-columns: 1fr !important; } }
`;