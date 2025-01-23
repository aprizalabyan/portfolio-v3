"use client"

import { useState, useEffect } from "react"
import SplineWidget from "@/components/widget/SplineWidget"

export default function Home() {
  const navList = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "experiences",
      title: "Experiences",
    },
    {
      id: "projects",
      title: "Projects",
    },
  ]

  const [activeSection, setActiveSection] = useState("");

  const clickNav = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const targetPosition = element.getBoundingClientRect().top + window.scrollY - 96;
      window.scrollTo({ top: targetPosition, behavior: "smooth" });
    }
  }

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 1 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <div className="home-wrapper justify-items-center">
      <div className="flex gap-4 w-9/12">
        <header className="left-section flex flex-col justify-between sticky max-h-screen top-0 py-24 w-1/2">
          <div>
            <h1 className="text-4xl font-bold">Header</h1>
            <h2 className="text-xl font-medium mt-3">Subheader</h2>
            <p className="text-secondary-text mt-4">Description</p>
            <nav className="nav-container mt-16 w-max">
              <ul>
                {navList.map((item, index) => {
                  return (
                    <li key={index} onClick={() => clickNav(item.id)}>
                      <div className={`group flex items-center py-3 cursor-pointer ${activeSection == item.id ? "active" : ""}`}>
                        <span className="nav-indicator bg-white h-px w-8 mr-4 group-hover:w-16 opacity-50 group-hover:opacity-100 transition-all"></span>
                        <span className="nav-text text-sm text-secondary-text group-hover:text-primary-text transition-all">{item.title}</span>
                      </div>
                    </li>
                  )
                })}
              </ul>
            </nav>
          </div>
          <div>
            <SplineWidget />
          </div>
        </header>
        <main className="right-section flex flex-col pt-24 w-1/2">
          <section id="about" className="border-2 mb-24">
            About
            <div className="h-96">content</div>
            <div className="h-40">content</div>
          </section>
          <section id="experiences" className="border-2 mb-24">
            Experiences
            <div className="h-96">content</div>
            <div className="h-40">content</div>
          </section>
          <section id="projects" className="border-2 mb-24">
            Projects
            <div className="h-96">content</div>
            <div className="h-40">content</div>
          </section>
        </main>
      </div>
    </div>
  );
}
