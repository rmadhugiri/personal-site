// components/Header.js
"use client";

import React, { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation"; // Import usePathname
import Link from "next/link";

export default function Header() {
  const [isLightMode, setIsLightMode] = useState(false);
  const [isScrollable, setIsScrollable] = useState(false);
  const router = useRouter();
  const pathname = usePathname(); // Get the current route

  // Function to check if the page is scrollable
  const checkScrollable = () => {
    const scrollHeight = document.documentElement.scrollHeight;
    const clientHeight = window.innerHeight;
    setIsScrollable(scrollHeight > clientHeight);
  };

  useEffect(() => {
    // Check for light mode
    const isLight = document.body.classList.contains("light-mode");
    setIsLightMode(isLight);

    const observer = new MutationObserver(() => {
      setIsLightMode(document.body.classList.contains("light-mode"));
    });
    observer.observe(document.body, { attributes: true, attributeFilter: ["class"] });

    // Check if page is scrollable on mount and on resize
    checkScrollable();
    window.addEventListener("resize", checkScrollable);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", checkScrollable);
    };
  }, []);

  // Determine if the current page is the About page
  const isAboutPage = pathname === "/about";

  return (
    <header
      className={`navbar ${isScrollable ? "glassmorphic" : ""} ${
        isAboutPage ? "has-background" : ""
      }`}
    >
      <Link href="/">
      </Link>
      <nav className="nav">
        <a href="#login">Sign In</a>
      </nav>
    </header>
  );
}