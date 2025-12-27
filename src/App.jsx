import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { useEffect } from "react";

import Home from "./pages/Home";
import Contact from "./pages/Contact";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsConditions from "./pages/TermsConditions";
import Disclaimer from "./pages/Disclaimer";
import Faq from "./pages/Faq";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

/* ================= SCROLL HANDLER ================= */
const ScrollHandler = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // ⛔ If hash exists, scroll to section
    if (hash) {
      const id = hash.replace("#", "");
      const element = document.getElementById(id);

      if (element) {
        const yOffset = -90; // navbar height
        const y =
          element.getBoundingClientRect().top +
          window.pageYOffset +
          yOffset;

        window.scrollTo({
          top: y,
          behavior: "smooth",
        });
      }
    } else {
      // ✅ Normal route → scroll to top
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "instant",
      });
    }
  }, [pathname, hash]);

  return null;
};

function App() {
  return (
    <Router>
      <ScrollHandler />

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-conditions" element={<TermsConditions />} />
        <Route path="/disclaimer" element={<Disclaimer />} />
        <Route path="/faq" element={<Faq />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
