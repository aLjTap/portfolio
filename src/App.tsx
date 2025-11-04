import type React from "react";
import { useCallback, useEffect, useRef, useState } from "react";
import { Link } from "react-scroll";
import { ButtonEvents, contants } from "./components/content";
import { Card, CardDescription, CardFooter, CardTitle } from "./components/ui/card";

function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollPosition, setScrollPosition] = useState(0);
  const divAbout = useRef<HTMLDivElement>(null);
  const divProjects = useRef<HTMLDivElement>(null);
  const divExperience = useRef<HTMLDivElement>(null);

  const handleScroll = useCallback(() => {
    const position = window.scrollY;
    setScrollPosition(position);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  function handleMouseMovement({ clientX, clientY, currentTarget }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();

    const x = clientX - left;
    const y = clientY - top;

    setMousePosition({ x, y });
  }

  return (
    <div
      role="presentation"
      onMouseMove={handleMouseMovement}
      className="flex flex-col md:flex-row w-[100%] h-[100%] "
      style={{
        backgroundImage: `radial-gradient(circle at ${mousePosition.x}px ${
          mousePosition.y
        }px, ${"rgb(15 23 42)"} 1%, transparent 45%)`,
      }}
    >
      <div
        className={` ${
          divAbout.current &&
          divProjects.current &&
          divExperience.current &&
          (
            (scrollPosition >= divAbout.current.offsetTop &&
              scrollPosition < divExperience.current.offsetTop - 60) ||
              (scrollPosition >= divExperience.current?.offsetTop &&
                scrollPosition < divProjects.current.offsetTop - 60) ||
              scrollPosition >= divProjects.current.offsetTop
          )
            ? "fixed"
            : "hidden"
        } md:hidden bg-gray-400 backdrop-filter backdrop-blur-sm bg-opacity-10 px-[14%] w-full h-[6%] text-white text-xl  md:text-3xl animate-in duration-700`}
      >
        <div className="flex w-full h-full items-center">
          {divAbout.current &&
          scrollPosition < (divExperience.current?.offsetTop ?? Number.POSITIVE_INFINITY)
            ? "About"
            : divExperience.current &&
                divProjects.current &&
                scrollPosition >= (divExperience.current?.offsetTop ?? 0) &&
                scrollPosition < divProjects.current.offsetTop
              ? "Experience"
              : "Projects"}
        </div>
      </div>
      <div className="flex md:fixed flex-col justify-start items-center h-[50%] md:h-full w-full md:w-[50%] ">
        <div
          className={`flex flex-col justify-start items-start  w-full p-[13%] text-[200%] md:text-[500%] text-white opacity-80`}
        >
          {contants.name}
          <div className={`flex w-full text-sm md:text-lg  xl:text-xl opacity-50 text-white`}>
            {contants.description}
          </div>
        </div>
        <div className="hidden md:flex md:flex-col justify-start items-start invisible md:visible w-full p-[13%]   ">
          {ButtonEvents.map((event) => (
            <Link key={event} to={event} smooth={true} duration={800}>
              <div
                className={`${
                  event === "About" &&
                  divAbout.current &&
                  divExperience.current &&
                  scrollPosition >= 0 &&
                  scrollPosition < (divExperience.current?.offsetTop ?? Number.POSITIVE_INFINITY)
                    ? "scale-[1.2] opacity-75"
                    : event === "Projects" &&
                        divProjects.current &&
                        scrollPosition >= divProjects.current.offsetTop
                      ? "scale-[1.2] opacity-75"
                      : event === "Experience" &&
                          divProjects.current &&
                          scrollPosition >= (divExperience.current?.offsetTop ?? 0) &&
                          scrollPosition < divProjects.current.offsetTop
                        ? "scale-[1.2] opacity-75"
                        : ""
                } flex text-xl md:text-2xl lg:text-3xl text-white opacity-50 hover:opacity-100`}
              >
                {event}
              </div>
            </Link>
          ))}
        </div>
        <div className="flex flex-row justify-start items-center px-[13%]  w-full h-full gap-[10%] md:gap-[8%] ">
          {Object.keys(contants.socials).map((social) => {
            const { link, icon } = contants.socials[social as keyof typeof contants.socials];
            return (
              <a
                key={social}
                href={link}
                target="_blank"
                rel="noreferrer"
                className="flex justify-start items-start text-[140%] md:text-[200%]  text-white opacity-50 hover:opacity-100"
              >
                {icon}
              </a>
            );
          })}
        </div>
      </div>
      <div className="flex flex-col  md:flex-row w-full h-full">
        <div className="flex  w-full h-[30%] text-white"></div>
        <div className="flex flex-col  w-full  h-full">
          <div className="flex flex-col  sm:gap-32 justify-start items-start px-[14%] py-[17%]   text-white">
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-1 ">
                <div
                  id="About"
                  className="flex  opacity-100 text-xl md:text-2xl lg:text-3xl"
                  ref={divAbout}
                >
                  {contants.aboutMe.title}
                </div>
                <div className="flex text-muted-foreground   text-sm md:text-lg  xl:text-xl ">
                  {contants.aboutMe.content}
                </div>
              </div>
              <div className="flex flex-col w-full h-full ">
                <div
                  className="flex visible w-full h-full md:invisible text-xl  md:text-3xl"
                  ref={divExperience}
                  id="Experience"
                >
                  Experience
                </div>
                <div className="flex flex-col gap-11 -mx-[5%]">
                  {Object.keys(contants.experience).map((experience) => {
                    const { title, date, content } =
                      contants.experience[experience as keyof typeof contants.experience];
                    return (
                      <Card
                        key={experience}
                        className="flex flex-col bg-transparent border-transparent  md:hover:bg-gradient-to-br md:hover:from-[#1f2d4f] md:md:hover:to-[#1f2d4f]  animate-out"
                      >
                        <CardTitle className="text-white p-[4%] text-xl  md:text-3xl">
                          {title}
                        </CardTitle>
                        <CardDescription className="p-[4%]">{date}</CardDescription>
                        <CardDescription className="flex flex-col gap-6 p-[4%] sm:text-sm md:text-lg lg:text-xl ">
                          <div className="flex">{content}</div>
                        </CardDescription>
                      </Card>
                    );
                  })}
                </div>
              </div>
              <div
                className="flex visible w-full h-full md:invisible text-xl  md:text-3xl"
                id="Projects"
                ref={divProjects}
              >
                Projects
              </div>
            </div>
            <div className="flex flex-col gap-11 -mx-[5%]">
              {Object.keys(contants.projects).map((project) => {
                const { title, date, content, link } =
                  contants.projects[project as keyof typeof contants.projects];
                return (
                  <a key={project} href={link} target="_blank" rel="noreferrer">
                    <Card className="flex flex-col bg-transparent border-transparent  md:hover:bg-gradient-to-br md:hover:from-[#1f2d4f] md:md:hover:to-[#1f2d4f]  animate-out">
                      <CardTitle className="text-white p-[4%] text-xl  md:text-3xl">
                        {title}
                      </CardTitle>
                      <CardDescription className="p-[4%]">{date}</CardDescription>
                      <CardDescription className="flex flex-col p-[4%] sm:text-sm md:text-lg lg:text-xl ">
                        <div className="flex">{content}</div>
                      </CardDescription>
                      <CardFooter className="flex flex-wrap  gap-6 justify-start items-start p-[4%] sm:text-sm md:text-lg lg:text-xl">
                        {contants.projects[project as keyof typeof contants.projects].languages.map(
                          (language) => (
                            <div
                              key={language}
                              className="flex justify-center items-center text-white text-[0.725rem] md:text-sm lg:text-pretty w-[25%] h-[100%] rounded-xl bg-gradient-to-br from-[#4d576f] to-[#1f2d4f]"
                            >
                              {language}
                            </div>
                          )
                        )}
                      </CardFooter>
                    </Card>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
