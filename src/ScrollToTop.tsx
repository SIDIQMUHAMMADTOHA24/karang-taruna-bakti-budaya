// src/components/ScrollToTop.tsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" }); // Ganti ke "smooth" kalau mau animasi
  }, [pathname]);

  return null;
};

export default ScrollToTop;
