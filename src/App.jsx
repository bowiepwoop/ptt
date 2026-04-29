import { globalCSS } from "./shared";

// Layout
import Navbar       from "./components/Navbar";
import Footer       from "./components/Footer";

// Sections (main page)
import Hero         from "./components/Hero";
import Services     from "./components/Services";
import Packages     from "./components/Packages";
import Reviews      from "./components/Reviews";
import About        from "./components/About";
import Booking      from "./components/Booking";
import Terms        from "./components/Terms";
import WorkWithUs   from "./components/Careers";

export default function App() {
  return (
    <div style={{ background: "#F5EFE6", color: "#1C2B3A", overflowX: "hidden" }}>
      <style>{globalCSS}</style>

      <Navbar />
      <Hero />
      <Services />
      <Packages />
      <Reviews />
      <About />
      <Booking />
      <Terms />
      <Footer />
    </div>
  );
}