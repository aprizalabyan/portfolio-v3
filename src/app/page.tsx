"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import SplineWidget from "@/components/widget/SplineWidget";
import Navigation from "@/components/base/navigation";
// import { ProgressBar } from "primereact/progressbar"
import { Chip } from "primereact/chip";
import static_data from "@/assets/static_data.json";

export default function Home() {
  const router = useRouter();
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
  ];
  const contactList = [
    {
      type: "github",
      url: "https://github.com/aprizalabyan",
      icon: "pi-github",
    },
    {
      type: "linkedin",
      url: "https://www.linkedin.com/in/muhammad-aprizal-abyan-598012268/",
      icon: "pi-linkedin",
    },
    {
      type: "instagram",
      url: "https://www.instagram.com/aprzla_/",
      icon: "pi-instagram",
    },
    {
      type: "mail",
      url: "mailto:aprizalabyan@gmail.com",
      icon: "pi-envelope",
    },
  ];

  const [activeSection, setActiveSection] = useState("");

  const clickNav = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const targetPosition =
        element.getBoundingClientRect().top + window.scrollY - 96;
      window.scrollTo({ top: targetPosition, behavior: "smooth" });
    }
  };

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
  };

  useEffect(() => {
    intersectObv();
  }, []);

  return (
    <div className="home-wrapper justify-items-center">
      <div className="lg:flex lg:gap-4 min-h-screen max-w-screen-xl mx-auto py-12 px-6 md:px-12 md:py-16 lg:py-0">
        <header className="left-section lg:flex lg:flex-col lg:justify-between lg:sticky lg:max-h-screen lg:top-0 lg:py-24 lg:w-1/2">
          <div>
            <div>
              <h1 className="text-3xl sm:text-5xl font-bold tracking-tight">
                {static_data.about.header}
              </h1>
              <h2 className="text-base sm:text-xl font-medium mt-3">
                {static_data.about.subheader}
              </h2>
              <p className="text-sm sm:text-base text-secondary-text mt-4 w-3/5">
                {static_data.about.description}
              </p>
            </div>
            <Navigation
              navList={navList}
              activeSection={activeSection}
              clickNav={(e) => clickNav(e)}
            />
          </div>
          <div>
            <SplineWidget />
            <div className="flex gap-5 mt-4">
              {contactList.map((item, i) => (
                <a href={item.url} target="_blank" className="text-xl" key={i}>
                  <i className={"pi " + item.icon}></i>
                </a>
              ))}
            </div>
          </div>
        </header>
        <main className="right-section flex flex-col pt-24 lg:w-1/2">
          <section id="about" className="flex flex-col gap-16 mb-16 sm:mb-28">
            <div className="text-sm sm:text-base text-secondary-text flex flex-col gap-4">
              <span className="lg:hidden">About</span>
              <div>
                I am a developer passionate about{" "}
                <span className="text-primary-text">Front-End</span>{" "}
                development, creating an intuitive and engaging web interfaces
                that enhance user experience, responsive, and high-performance
                web applications that provide a satisfying user journey.
                <br />
                <br />
                Currently, I work at{" "}
                <span className="text-primary-text">eBdesk Teknologi</span>,
                mainly using <span className="text-primary-text">Vue/Nuxt</span>{" "}
                to build dynamic and efficient front-end solutions such as a
                dashboard page. I collaborate with the back-end team to
                integrate API services, ensuring smooth data flow and optimal
                performance.
                <br />
                <br />
                I'm always eager to learn new things, in my personal time,
                currently I'm learning{" "}
                <span className="text-primary-text">React/Next</span> to expand
                my front-end skills. And also learning back-end with{" "}
                <span className="text-primary-text">Python</span> and{" "}
                <span className="text-primary-text">MongoDB</span> for database
                management, to become a well-rounded developer.
                {/* Additionally, I also
                love <span className="text-primary-text">design, photography, and videography</span>, which allow me to bring a creative perspective to my projects.
                I believe that combining technical expertise with creativity is the key to building innovative and user-friendly digital experiences. */}
              </div>
            </div>
            <div className="grid grid-cols-4">
              <div className="col-span-1 flex">
                <span className="text-sm sm:text-base text-secondary-text">
                  Expertise
                </span>
              </div>
              <div className="col-span-3 flex flex-col gap-3 sm:w-3/4">
                {static_data.expertise.map((item: any) => (
                  <div key={item._id} className="flex flex-col gap-1">
                    <span className="text-sm sm:text-base text-primary-text">
                      {item.category}
                    </span>
                    <div className="flex gap-2 flex-wrap my-1">
                      {item.sub_category.map((sub: any, i: number) => (
                        <div
                          key={i}
                          className="flex items-center text-xs sm:text-sm text-secondary-text"
                        >
                          <Chip
                            key={i}
                            label={sub.name}
                            pt={{
                              label: { className: "text-xs text-accent-blue" },
                            }}
                            className="bg-gradient-1 rounded-full px-3 py-1"
                          />
                          {/* <span className="col-span-2">{sub.name}</span>
                          <div className="col-span-3 w-full">
                            <ProgressBar
                              showValue={false}
                              value={sub.value}
                              pt={{ value: { className: "bg-accent-blue" } }}
                              className="h-1.5 bg-primary-text rounded-full"
                            />
                          </div> */}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
          <section
            id="experiences"
            className="flex flex-col gap-8 lg:gap-10 mb-16 sm:mb-28"
          >
            <span className="text-sm sm:text-base text-secondary-text">
              Experiences
            </span>
            {static_data.experience.map((item: any) => (
              <div key={item._id} className="grid grid-cols-4">
                <div className="col-span-1 flex">
                  <span className="text-xs mt-0.5 sm:mt-0 sm:text-base text-secondary-text">
                    {item.year}
                  </span>
                </div>
                <div className="col-span-3 flex flex-col gap-3">
                  <span className="text-sm sm:text-base text-primary-text">
                    {item.position} · {item.company}
                  </span>
                  <span className="text-xs sm:text-sm text-secondary-text">
                    {item.description}
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag: any, i: number) => (
                      <Chip
                        key={i}
                        label={tag}
                        pt={{
                          label: { className: "text-xs text-accent-blue" },
                        }}
                        className="bg-gradient-1 rounded-full px-3 py-1"
                      />
                    ))}
                  </div>
                </div>
              </div>
            ))}
            <a
              href="/resume.pdf"
              target="_blank"
              className="flex items-end text-sm sm:text-base cursor-pointer text-primary-text hover:text-accent-blue w-fit group"
            >
              <span>
                View Full Resume
                <i className="pi pi-arrow-up-right ml-1 mb-0.5 text-xs transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"></i>
              </span>
            </a>
          </section>
          <section id="projects" className="flex flex-col gap-6 mb-16 sm:mb-28">
            <span className="text-sm sm:text-base text-secondary-text">
              Projects
            </span>
            <div className="flex flex-col gap-12 sm:gap-4">
              {static_data.project.map((item: any) => (
                <div
                  key={item._id}
                  className="grid sm:grid-cols-4 gap-4 sm:gap-0 sm:p-4 lg:hover:bg-hover rounded-md transition-all"
                >
                  <div className="sm:col-span-3 flex flex-col gap-3 sm:order-2">
                    <a
                      href={item.url}
                      target="_blank"
                      className="text-sm sm:text-base text-primary-text hover:text-accent-blue cursor-pointer w-fit group"
                    >
                      {item.title}
                      <i className="pi pi-arrow-up-right text-xs ml-1 mb-0.5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"></i>
                    </a>
                    <span className="text-xs sm:text-sm text-secondary-text">
                      {item.description}
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {item.tags.map((tag: any, i: number) => (
                        <Chip
                          key={i}
                          label={tag}
                          pt={{
                            label: { className: "text-xs text-accent-blue" },
                          }}
                          className="bg-gradient-1 rounded-full px-3 py-1"
                        />
                      ))}
                    </div>
                  </div>
                  <div className="sm:col-span-1 flex pr-4 sm:order-1">
                    <img
                      src={item.image}
                      alt="img"
                      className="w-[160px] sm:w-full h-[100px] object-cover rounded-md"
                    />
                  </div>
                </div>
              ))}
            </div>
            <div
              className="flex items-center gap-2 text-sm sm:text-base cursor-pointer text-primary-text w-fit group transition"
              onClick={() => router.push("/project")}
            >
              <span className="border-b border-transparent hover:border-accent-blue">
                View All Project
              </span>
              <i className="text-xs pi pi-arrow-right group-hover:translate-x-1 transition-transform"></i>
            </div>
          </section>
          <section
            id="footer"
            className="footer flex flex-col gap-8 mb-16 sm:mb-24 sm:w-3/4"
          >
            <span>
              Interactive 3D designed with{" "}
              <a href="https://spline.design">Spline</a>. Built with{" "}
              <a href="https://nextjs.org">Next.js</a> and{" "}
              <a href="https://tailwindcss.com">Tailwind CSS</a>, UI component
              with <a href="https://primereact.org">PrimeReact</a>, and deployed
              with <a href="https://pages.github.com">Github Pages</a>. All text
              uses <a href="https://rsms.me/inter/">Inter</a> fontface.
            </span>
          </section>
        </main>
      </div>
    </div>
  );
}
