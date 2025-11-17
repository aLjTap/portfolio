import { useEffect, useRef, useState } from "react";
import MouseEvent from "@/components/mouseEvent";
import { Hero } from "@/components/sections/Hero";
import { AboutSection } from "@/components/sections/AboutSection";
import { WorkExperienceSection } from "@/components/sections/WorkExperienceSection";
import { HonoursSection } from "@/components/sections/HonoursSection";
import { VolunteeringSection } from "@/components/sections/VolunteeringSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";

function App() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const divAbout = useRef<HTMLDivElement>(null);
  const divWorkExperience = useRef<HTMLDivElement>(null);
  const divHonours = useRef<HTMLDivElement>(null);
  const divProjects = useRef<HTMLDivElement>(null);
  const divExperience = useRef<HTMLDivElement>(null);

  function handleScroll() {
    const position = window.scrollY;
    setScrollPosition(position);
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <MouseEvent>
        <div className="flex flex-col md:flex-row w-full h-full">
           <Hero
             scrollPosition={scrollPosition}
             divAbout={divAbout}
             divWorkExperience={divWorkExperience}
             divHonours={divHonours}
             divExperience={divExperience}
             divProjects={divProjects}
           />
          <div className="flex flex-col  md:flex-row w-full h-full">
            <div className="hidden md:flex w-full h-[30%] text-foreground"></div>
            <div className="flex flex-col  w-full  h-full">
              <div className="flex flex-col  sm:gap-32 justify-start items-start px-[14%] py-[17%]   text-foreground">
                <div className="flex flex-col gap-6">
                  <AboutSection divAbout={divAbout} />
                  <WorkExperienceSection
                    divWorkExperience={divWorkExperience}
                  />
                  <HonoursSection divHonours={divHonours} />
                  <VolunteeringSection divExperience={divExperience} />
                  <ProjectsSection divProjects={divProjects} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </MouseEvent>
    </>
  );
}

export default App;
