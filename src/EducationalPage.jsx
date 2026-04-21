/**
 * EducationalPage.jsx
 * 
 * This is the standalone page for /educational
 * Set this as the root component for your /educational route.
 * 
 * With React Router, in your router config:
 *   <Route path="/educational" element={<EducationalPage />} />
 * 
 * With Next.js (pages dir):
 *   Place this file at pages/educational.jsx
 * 
 * With Next.js (app dir):
 *   Place this file at app/educational/page.jsx
 */

import { globalCSS } from "./shared";
import Navbar          from "./components/Navbar";
import EducationalTour from "./components/Educationaltour";
import Booking         from "./components/Booking";
import Footer          from "./components/Footer";

export default function EducationalPage() {
  return (
    <div style={{ background: "#F5EFE6", color: "#1C2B3A", overflowX: "hidden" }}>
      <style>{globalCSS}</style>

      <Navbar />

      {/* Spacer for fixed navbar */}
      <div style={{ height: 60 }} />

      <EducationalTour />
      <Booking />
      <Footer />
    </div>
  );
}