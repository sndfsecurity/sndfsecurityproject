import { useEffect, useState } from "react";
import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";

const FloatingButtons = () => {
  const [hide, setHide] = useState(false);
  const [show, setShow] = useState(false);

  useEffect(() => {
    let observer;

    // ✅ FOOTER DETECTION
    const timer = setTimeout(() => {
      const footer = document.getElementById("footer");

      if (!footer) return;

      observer = new IntersectionObserver(
        ([entry]) => {
          setHide(entry.isIntersecting);
        },
        { threshold: 0.1 }
      );

      observer.observe(footer);
    }, 300);

    // ✅ SCROLL DETECTION
    const handleScroll = () => {
      if (window.scrollY > 150) {
        setShow(true);
      } else {
        setShow(false);
      }
    };

    // 🔥 VERY IMPORTANT
    window.addEventListener("scroll", handleScroll);

    // 👇 RUN ON FIRST LOAD
    handleScroll();

    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", handleScroll);
      if (observer) observer.disconnect();
    };
  }, []);

  return (
    <div
      className={`floating-buttons ${
        show && !hide ? "visible" : "hidden"
      }`}
    >
      <a
        href="https://wa.me/919970383155"
        target="_blank"
        rel="noopener noreferrer"
        className="float-btn whatsapp"
        aria-label="Chat on WhatsApp"
        data-tooltip="Chat on WhatsApp"
      >
        <FaWhatsapp aria-hidden="true"/>
      </a>

      <a href="tel:+919970383155" className="float-btn call"  aria-label="Call Us"  data-tooltip="Call Us">
        <FaPhoneAlt aria-hidden="true"/>
      </a>
    </div>
  );
};

export default FloatingButtons;