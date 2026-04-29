import { useWindowWidth } from "../shared";
import { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import gsap from "gsap";

const stories = [
  { id: "video", type: "video", src: "/videos/siquijor.mp4", label: "Siquijor" },
  { id: "travelschedule", type: "video", src: "/videos/travelschedule.mp4", label: "May & June Travel Schedule" },
];

function StoryCard({ story, currentIndex, total }) {
  const [isHovering, setIsHovering] = useState(false);
  const isSecondVideo = currentIndex === 1;
  const places = ["Boracay", "Palawan", "Siargao", "Banaue", "Tagaytay", "Intramuros", "Coron"];
  const badgeRef = useRef(null);
  const dropdownRef = useRef(null);
  
  useEffect(() => {
    if (isSecondVideo && isHovering && dropdownRef.current) {
      gsap.fromTo(dropdownRef.current, 
        { opacity: 0, y: -10 },
        { opacity: 1, y: 0, duration: 0.3, ease: "power2.out" }
      );
    }
  }, [isHovering, isSecondVideo]);

  const handleBadgeHover = () => {
    if (!isSecondVideo) return;
    setIsHovering(true);
    gsap.to(badgeRef.current, {
      scale: 1.05,
      duration: 0.3,
      ease: "power2.out"
    });
  };

  const handleBadgeLeave = () => {
    setIsHovering(false);
    gsap.to(badgeRef.current, {
      scale: 1,
      duration: 0.3,
      ease: "power2.out"
    });
  };
  
  return (
    <div style={{
      position: "relative",
      width: "100%",
      height: "100%",
      borderRadius: 32,
      overflow: "hidden",
      boxShadow: "0 30px 80px rgba(0,0,0,0.35)",
      border: "1px solid rgba(255,255,255,0.08)",
      background: "#0f1a28",
      flexShrink: 0,
    }}>
      {/* Progress bars */}
      <div style={{ position: "absolute", top: 10, left: 10, right: 10, display: "flex", gap: "2px", zIndex: 3 }}>
        {Array.from({ length: total }, (_, i) => (
          <div key={i} style={{
            flex: 1,
            height: 2,
            background: i <= currentIndex ? "#fff" : "rgba(255,255,255,0.3)",
            borderRadius: 1
          }} />
        ))}
      </div>

      <div style={{ position: "absolute", inset: 0, background: "radial-gradient(circle at 50% 20%, rgba(255,255,255,0.08) 0%, transparent 30%)", pointerEvents: "none" }} />
      {story.type === "video" ? (
        <video
          src={story.src}
          autoPlay
          muted
          loop
          playsInline
          style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", filter: isSecondVideo && isHovering ? "blur(6px)" : "none" }}
        />
      ) : (
        <img
          src={story.src}
          alt={story.label}
          style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", filter: isSecondVideo && isHovering ? "blur(6px)" : "none" }}
        />
      )}

      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(28,43,58,0.86) 0%, transparent 35%)", pointerEvents: "none" }} />

      <div style={{ position: "absolute", top: 18, left: 18, right: 18, display: "flex", justifyContent: "space-between", alignItems: "center", zIndex: 2 }}>
        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
          <img src="/images/logo.png" alt="logo" style={{ width: 36, height: 36, borderRadius: "50%", border: "1px solid rgba(255,255,255,0.2)", objectFit: "cover" }} />
          <div>
            <div style={{ fontSize: "0.85rem", fontWeight: 700, color: "#F5EFE6" }}>Praised Travel</div>
            <div style={{ fontSize: "0.72rem", color: "rgba(245,239,230,0.65)", marginTop: "0.14rem" }}>Stories</div>
          </div>
        </div>
        <div style={{ fontSize: "0.72rem", color: "rgba(245,239,230,0.7)", fontWeight: 500 }}>2h</div>
      </div>

      <div style={{ position: "absolute", inset: 0, zIndex: 2, display: "flex", flexDirection: "column", justifyContent: "flex-end", padding: "1.3rem 1.3rem 1.4rem" }}>
        <div 
          onMouseEnter={() => isSecondVideo && setIsHovering(true)}
          onMouseLeave={() => isSecondVideo && setIsHovering(false)}
          style={{ 
            marginBottom: "0.8rem", 
            display: "inline-flex", 
            alignItems: "center", 
            gap: "0.5rem", 
            background: isSecondVideo && isHovering ? "rgba(255,255,255,0.2)" : "rgba(255,255,255,0.14)", 
            padding: "0.45rem 0.85rem", 
            borderRadius: 999, 
            border: "1px solid rgba(255,255,255,0.12)", 
            fontSize: "0.7rem", 
            letterSpacing: "0.14em", 
            textTransform: "uppercase", 
            color: "#E8EFF8",
            cursor: isSecondVideo ? "pointer" : "default",
            transition: "all 0.3s ease",
            position: "relative",
            width: "fit-content"
          }}
        >
          Now Booking
          {isSecondVideo && isHovering && (
            <div style={{
              position: "absolute",
              bottom: "100%",
              left: 0,
              background: "rgba(20, 30, 45, 0.98)",
              border: "1px solid rgba(255,255,255,0.2)",
              borderRadius: "8px",
              padding: "0.8rem",
              marginBottom: "0.8rem",
              backdropFilter: "blur(10px)",
              zIndex: 1000,
              minWidth: "140px",
              boxShadow: "0 10px 40px rgba(0,0,0,0.4)"
            }}>
              {places.map((place, idx) => (
                <div 
                  key={idx} 
                  style={{
                    fontSize: "0.75rem",
                    color: "rgba(245,239,230,0.8)",
                    padding: "0.5rem 0.3rem",
                    borderBottom: idx < places.length - 1 ? "1px solid rgba(255,255,255,0.08)" : "none",
                    cursor: "pointer",
                    transition: "color 0.2s",
                    borderRadius: "4px",
                    paddingLeft: "0.4rem"
                  }}
                  onMouseEnter={(e) => e.target.style.color = "#CBDCEB"}
                  onMouseLeave={(e) => e.target.style.color = "rgba(245,239,230,0.8)"}
                >
                  • {place}
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="serif" style={{ fontSize: "1.05rem", lineHeight: 1.25, color: "#FFFFFF", marginBottom: "0.15rem" }}>
          Praised Travel & Tours
        </div>
        <div style={{ fontSize: "0.82rem", color: "rgba(255,255,255,0.72)", marginBottom: "0.9rem" }}>
          Inquire for rates
        </div>
        <div style={{ fontSize: "0.88rem", color: "rgba(245,239,230,0.9)", letterSpacing: "0.05em", textTransform: "uppercase" }}>
          {story.label}
        </div>
      </div>
    </div>
  );
}

export default function Hero() {
  const width  = useWindowWidth();
  const mobile = width < 768;
  const tablet = width >= 768 && width < 1100;

  const [currentStory, setCurrentStory] = useState(0);
  const storyRef = useRef(null);
  const storyCardRef = useRef(null);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const minSwipeDistance = 50;

  // Animate story transitions
  useEffect(() => {
    if (storyCardRef.current) {
      gsap.fromTo(storyCardRef.current,
        { opacity: 0, scale: 0.95 },
        { opacity: 1, scale: 1, duration: 0.5, ease: "power2.out" }
      );
    }
  }, [currentStory]);

  const handleStoryChange = (newIndex) => {
    gsap.to(storyCardRef.current, {
      opacity: 0,
      scale: 0.95,
      duration: 0.3,
      ease: "power2.in",
      onComplete: () => {
        setCurrentStory(newIndex);
      }
    });
  };

  const handleNavButtonHover = (e) => {
    gsap.to(e.currentTarget, {
      scale: 1.15,
      background: "rgba(255,255,255,0.18)",
      duration: 0.3,
      ease: "back.out"
    });
  };

  const handleNavButtonLeave = (e) => {
    gsap.to(e.currentTarget, {
      scale: 1,
      background: "rgba(255,255,255,0.12)",
      duration: 0.3,
      ease: "back.out"
    });
  };

  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX);

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    if (isLeftSwipe) {
      handleStoryChange((currentStory + 1) % stories.length);
    }
    if (isRightSwipe) {
      handleStoryChange((currentStory - 1 + stories.length) % stories.length);
    }
  };

  return (
    <section id="home" style={{
      minHeight: "100vh", paddingTop: 60,
      display: "flex", flexDirection: "column",
      background: "linear-gradient(135deg,#1C2B3A 0%,#2a3f57 50%,#1C2B3A 100%)",
      position: "relative", overflow: "hidden",
    }}>
      <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at 70% 40%, rgba(109,148,197,0.2) 0%, transparent 60%)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at 20% 80%, rgba(203,220,235,0.07) 0%, transparent 50%)", pointerEvents: "none" }} />

      {mobile ? (
        <div style={{ flex: 1, display: "flex", flexDirection: "column", overflow: "hidden" }}>
          <div style={{ position: "relative", width: "100%", maxWidth: "360px", aspectRatio: "9 / 16", margin: "0 auto", overflow: "hidden" }}>
            <div
              ref={storyRef}
              onTouchStart={onTouchStart}
              onTouchMove={onTouchMove}
              onTouchEnd={onTouchEnd}
              onClick={() => handleStoryChange((currentStory + 1) % stories.length)}
              style={{ width: "100%", height: "100%" }}
            >
              <div ref={storyCardRef}>
                <StoryCard story={stories[currentStory]} currentIndex={currentStory} total={stories.length} />
              </div>
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
        <div style={{ flex: 1, display: "grid", gridTemplateColumns: "1fr 1.25fr", overflow: "hidden" }}>
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
              <a href="#packages" style={{ color: "rgba(245,239,230,0.5)", textDecoration: "none", fontSize: "0.86rem" }}>Explore Packages →</a>
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

          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", overflow: "visible", padding: "2rem 2rem 2rem 0" }}>
            <div style={{ width: "100%", maxWidth: "320px", position: "relative", aspectRatio: "9 / 16", overflow: "visible" }}>
              <button
                onClick={() => handleStoryChange((currentStory - 1 + stories.length) % stories.length)}
                onMouseEnter={handleNavButtonHover}
                onMouseLeave={handleNavButtonLeave}
                style={{
                  position: "absolute",
                  left: "8px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  background: "rgba(255,255,255,0.12)",
                  border: "none",
                  borderRadius: "50%",
                  width: "40px",
                  height: "40px",
                  color: "#fff",
                  cursor: "pointer",
                  zIndex: 10,
                  boxShadow: "0 8px 20px rgba(0,0,0,0.25)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center"
                }}
              >
                <ChevronLeft size={24} />
              </button>
              <div ref={storyCardRef} onClick={() => handleStoryChange((currentStory + 1) % stories.length)} style={{ cursor: "pointer", width: "100%", height: "100%" }}>
                <StoryCard story={stories[currentStory]} currentIndex={currentStory} total={stories.length} />
              </div>
              <button
                onClick={() => handleStoryChange((currentStory + 1) % stories.length)}
                onMouseEnter={handleNavButtonHover}
                onMouseLeave={handleNavButtonLeave}
                style={{
                  position: "absolute",
                  right: "8px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  background: "rgba(255,255,255,0.12)",
                  border: "none",
                  borderRadius: "50%",
                  width: "40px",
                  height: "40px",
                  color: "#fff",
                  cursor: "pointer",
                  zIndex: 10,
                  boxShadow: "0 8px 20px rgba(0,0,0,0.25)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center"
                }}
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}