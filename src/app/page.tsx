"use client"

import { useState, useEffect } from "react"
import SplineWidget from "@/components/widget/SplineWidget"
import Navigation from "@/components/base/navigation"
import LoaderExpertise from "@/components/base/loader/Expertise"
import LoaderExperience from "@/components/base/loader/Experience"
import LoaderProject from "@/components/base/loader/Project"
import LoaderHeader from "@/components/base/loader/Header"
import LoaderParagraph from "@/components/base/loader/Paragraph"
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
  const contactList = [
    {
      type: "github",
      url: "https://github.com/aprizalabyan",
      icon: "pi-github"
    },
    {
      type: "linkedin",
      url: "https://www.linkedin.com/in/muhammad-aprizal-abyan-598012268/",
      icon: "pi-linkedin"
    },
    {
      type: "instagram",
      url: "https://www.instagram.com/aprzla_/",
      icon: "pi-instagram"
    },
    {
      type: "mail",
      url: "mailto:aprizalabyan@gmail.com",
      icon: "pi-envelope"
    },
  ]

  const [activeSection, setActiveSection] = useState("");
  const [dataAbout, setDataAbout] = useState<any>({});
  const [dataExperience, setDataExperience] = useState<any>([]);
  const [dataExpertise, setDataExpertise] = useState<any>([]);
  const [dataProject, setDataProject] = useState<any>([]);
  const [loading, setLoading] = useState(true);

  const clickNav = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const targetPosition = element.getBoundingClientRect().top + window.scrollY - 96;
      window.scrollTo({ top: targetPosition, behavior: "smooth" });
    }
  }

  const getDataContent = async () => {
    setLoading(true)
    try {
      const res = await axios({
        method: "GET",
        url: "/api/content/all-data"
      })
      setDataAbout(res.data.data.about)
      setDataExperience(res.data.data.experience)
      setDataExpertise(res.data.data.expertise)
      setDataProject(res.data.data.project)
    } catch (error) {
    } finally {
      setLoading(false)
    }
  }

  const intersectObv = () => {
    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target.id == "footer") return;
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
      <div className="flex gap-4 w-3/5">
        <header className="left-section flex flex-col justify-between sticky max-h-screen top-0 py-24 w-1/2">
          <div>
            {loading ?
              <LoaderHeader /> :
              <div>
                <h1 className="text-4xl font-bold">{dataAbout.header}</h1>
                <h2 className="text-xl font-medium mt-3">{dataAbout.subheader}</h2>
                <p className="text-base text-secondary-text mt-4">{dataAbout.description}</p>
              </div>
            }
            <Navigation
              navList={navList}
              activeSection={activeSection}
              clickNav={(e) => clickNav(e)}
            />
          </div>
          <div>
            <SplineWidget />
            <div className="flex gap-5">
              {contactList.map((item, i) => (
                <a href={item.url} target="_blank" className="text-xl" key={i}>
                  <i className={"pi " + item.icon}></i>
                </a>
              ))}
            </div>
          </div>
        </header>
        <main className="right-section flex flex-col pt-24 w-1/2">
          <section id="about" className="flex flex-col gap-16 mb-28">
            <div className="text-base text-secondary-text">
              {loading ?
                <LoaderParagraph /> :
                <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam cursus fermentum nunc sed tristique. In vitae nibh interdum tellus luctus efficitur. Vivamus sit amet molestie quam. Pellentesque non dui porta, dignissim velit nec, scelerisque massa.</span>
              }
            </div>
            <div className="grid grid-cols-4">
              <div className="col-span-1 flex">
                <span className="text-base text-secondary-text">Expertise</span>
              </div>
              <div className="col-span-3 flex flex-col gap-3">
                {loading ?
                  <div className="flex flex-col gap-2">
                    {[...Array(3)].map((_, i) => (
                      <LoaderExpertise key={i} />
                    ))}
                  </div> :
                  dataExpertise.map((item: any) => (
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
            {loading ?
              <div className="flex flex-col gap-2">
                {[...Array(3)].map((_, i) => (
                  <LoaderExperience key={i} />
                ))}
              </div> :
              dataExperience.map((item: any) => (
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
          </section>
          <section id="projects" className="flex flex-col gap-8 mb-24">
            <span className="text-base text-secondary-text">Projects</span>
            {loading ?
              <div className="flex flex-col gap-2">
                {[...Array(3)].map((_, i) => (
                  <LoaderProject key={i} />
                ))}
              </div> :
              dataProject.map((item: any) => (
                <div key={item._id} className="grid grid-cols-4 p-4 hover:bg-hover rounded-md">
                  <div className="col-span-1 flex">
                    <img src={item.image} alt="img" className="w-[100px] h-[100px] object-cover" />
                  </div>
                  <div className="col-span-3 flex flex-col gap-3">
                    <span className="text-base text-primary-text hover:text-accent-blue cursor-pointer w-fit">
                      {item.title}
                      <i className="pi pi-arrow-up-right ms-2"></i>
                    </span>
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
              <span className="">View All Project</span>
              <i className="pi pi-arrow-up-right"></i>
            </div>
          </section>
          <section id="footer" className="footer flex flex-col gap-8 mb-24 w-3/4">
            <span>
              Interactive 3D designed with <a href="https://spline.design">Spline</a>. 
              Built with <a href="https://nextjs.org">Next.js</a> and <a href="https://tailwindcss.com">Tailwind CSS</a>, 
              UI component with <a href="https://primereact.org">PrimeReact</a>, and 
              deployed with <a href="https://pages.github.com">Github Pages</a>. All text uses <a href="https://rsms.me/inter/">Inter</a> fontface.
            </span>
          </section>
        </main>
      </div>
    </div>
  );
}
