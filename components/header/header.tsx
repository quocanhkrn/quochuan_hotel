"use client";

import { useEffect, useState } from "react";
import Navbar from "./navbar/navbar";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  const handleScrolledNavbar = () => {
    if (window.scrollY >= 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    handleScrolledNavbar();
    window.addEventListener("scroll", handleScrolledNavbar);
    return () => window.removeEventListener("scroll", handleScrolledNavbar);
  }, []);

  return (
    <header className="absolute left-1/2 z-10 w-full -translate-x-1/2 py-5 sm:py-10">
      <Navbar />
    </header>
  );
};

export default Header;
