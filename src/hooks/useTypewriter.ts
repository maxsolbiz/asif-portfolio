"use client";

import { useState, useEffect } from "react";

export function useTypewriter(titles: string[], speed: number = 80, deleteSpeed: number = 40, pauseTime: number = 2000) {
  const [displayed, setDisplayed] = useState("");
  const [titleIndex, setTitleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const currentTitle = titles[titleIndex];

    const timeout = setTimeout(() => {
      if (!deleting) {
        if (charIndex < currentTitle.length) {
          setDisplayed(currentTitle.slice(0, charIndex + 1));
          setCharIndex(charIndex + 1);
        } else {
          setTimeout(() => setDeleting(true), pauseTime);
        }
      } else {
        if (charIndex > 0) {
          setDisplayed(currentTitle.slice(0, charIndex - 1));
          setCharIndex(charIndex - 1);
        } else {
          setDeleting(false);
          setTitleIndex((titleIndex + 1) % titles.length);
        }
      }
    }, deleting ? deleteSpeed : charIndex === currentTitle.length ? pauseTime : speed);

    return () => clearTimeout(timeout);
  }, [charIndex, deleting, titleIndex, titles, speed, deleteSpeed, pauseTime]);

  return displayed;
}
