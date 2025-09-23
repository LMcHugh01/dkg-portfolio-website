"use client";
import React, { useEffect, useState } from "react";

export default function TypingText({ texts = [], typingSpeed = 150, deletingSpeed = 75, pause = 1000 }) {
  const [currentText, setCurrentText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const handleTyping = () => {
      const fullText = texts[textIndex];

      if (!isDeleting) {
        // Typing
        setCurrentText(fullText.substring(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);

        if (charIndex + 1 === fullText.length) {
          setTimeout(() => setIsDeleting(true), pause);
        }
      } else {
        // Deleting
        setCurrentText(fullText.substring(0, charIndex - 1));
        setCharIndex((prev) => prev - 1);

        if (charIndex - 1 === 0) {
          setIsDeleting(false);
          setTextIndex((prev) => (prev + 1) % texts.length);
        }
      }
    };

    const timeout = setTimeout(handleTyping, isDeleting ? deletingSpeed : typingSpeed);
    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, texts, textIndex, typingSpeed, deletingSpeed, pause]);

  return <span className="text-white font-mono">{currentText}</span>;
}
