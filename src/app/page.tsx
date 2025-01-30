"use client"

import { useState, useEffect } from "react"
import SplineWidget from "@/components/widget/SplineWidget"
import { ProgressBar } from "primereact/progressbar"
import { Chip } from "primereact/chip";
import axios from "axios"

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
  const [dataAbout, setDataAbout] = useState<any>({});
  const [dataExperience, setDataExperience] = useState<any>([]);
  const [dataExpertise, setDataExpertise] = useState<any>([]);
  const [dataProject, setDataProject] = useState<any>([]);

  const clickNav = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const targetPosition = element.getBoundingClientRect().top + window.scrollY - 96;
      window.scrollTo({ top: targetPosition, behavior: "smooth" });
    }
  }

  const getDataContent = async () => {
    try {
      const res = await axios({
        method: "GET",
        url: "/api/content/all-data"
      })
      setDataAbout(res.data.data.about)
      setDataExperience(res.data.data.experience)
      setDataExpertise(res.data.data.expertise)
      setDataProject(res.data.data.project)
    } catch (error) { }
  }

  const intersectObv = () => {
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
  }

  useEffect(() => {
    intersectObv();
    getDataContent();
  }, []);

  return (
    <div className="home-wrapper justify-items-center">
      <div className="flex gap-4 w-9/12">
        <header className="left-section flex flex-col justify-between sticky max-h-screen top-0 py-24 w-1/2">
          <div>
            <h1 className="text-4xl font-bold">{dataAbout.header}</h1>
            <h2 className="text-xl font-medium mt-3">{dataAbout.subheader}</h2>
            <p className="text-base text-secondary-text mt-4">{dataAbout.description}</p>
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
          <section id="about" className="flex flex-col gap-16 mb-28">
            <div className="text-base text-secondary-text">
              <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam cursus fermentum nunc sed tristique. In vitae nibh interdum tellus luctus efficitur. Vivamus sit amet molestie quam. Pellentesque non dui porta, dignissim velit nec, scelerisque massa.</span>
            </div>
            <div className="grid grid-cols-4">
              <div className="col-span-1 flex">
                <span className="text-base text-secondary-text">Expertise</span>
              </div>
              <div className="col-span-3 flex flex-col gap-3">
                {dataExpertise.map((item: any) => (
                  <div key={item._id} className="flex flex-col gap-1">
                    <span className="text-base text-primary-text">{item.category}</span>
                    <div>
                      {item.sub_category.map((sub: any, i: number) => (
                        <div key={i} className="grid grid-cols-2 items-center text-sm text-secondary-text">
                          <span>{sub.name}</span>
                          <div className="w-full">
                            <ProgressBar
                              showValue={false}
                              value={sub.value}
                              pt={{ value: { className: "bg-accent-blue" } }}
                              className="h-1.5 bg-primary-text rounded-full"
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
          <section id="experiences" className="flex flex-col gap-10 mb-24">
            <span className="text-base text-secondary-text">Experiences</span>
            {dataExperience.map((item: any) => (
              <div key={item._id} className="grid grid-cols-4">
                <div className="col-span-1 flex">
                  <span className="text-base text-secondary-text">{item.year}</span>
                </div>
                <div className="col-span-3 flex flex-col gap-3">
                  <span className="text-base text-primary-text">{item.company}</span>
                  <span className="text-sm text-secondary-text">{item.description}</span>
                  <div className="flex gap-2">
                    {item.tags.map((tag: any, i: number) => (
                      <Chip
                        key={i}
                        label={tag}
                        pt={{ label: { className: "text-xs text-accent-blue" } }}
                        className="bg-gradient-1 rounded-full px-3 py-1"
                      />
                    ))}
                  </div>
                </div>
              </div>
            ))}
            <div className="flex items-center gap-2 text-base cursor-pointer text-primary-text hover:text-secondary-text w-fit">
              <span className="">View Full Resume</span>
              <i className="pi pi-arrow-up-right"></i>
            </div>
            <div className="h-96">content</div>
          </section>
          <section id="projects" className="flex flex-col gap-8 mb-24">
            {dataProject.map((item: any) => (
              <div key={item._id} className="grid grid-cols-4 p-4">
                <div className="col-span-1 flex">
                  <img src={item.image} alt="img" height={80} width={80} />
                </div>
                <div className="col-span-3 flex flex-col gap-3">
                  <span className="text-base text-primary-text">{item.title}</span>
                  <span className="text-sm text-secondary-text">{item.description}</span>
                </div>
              </div>
            ))}
            <div className="h-96">content</div>
          </section>
        </main>
      </div>
    </div>
  );
}
