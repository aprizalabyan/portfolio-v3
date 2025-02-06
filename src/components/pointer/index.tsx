"use client"

import React from "react"
import { useState, useEffect } from "react"

export default function Pointer() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", updateMousePosition);
    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);

  return (
    <div
      className="fixed inset-0 pointer-events-none transition duration-300 z-10"
      style={{
        background: `radial-gradient(600px at ${position.x}px ${position.y}px, rgba(89, 202, 238, 0.04), transparent 80%)`,
      }}
    ></div>
  )
}
