import { type RefObject } from "react";
import { Link } from "react-scroll";
import { ButtonEvents, entryContents } from "../content";

interface HeroProps {
  scrollPosition: number;
  divAbout: RefObject<HTMLDivElement>;
  divWorkExperience: RefObject<HTMLDivElement>;
  divHonours: RefObject<HTMLDivElement>;
  divExperience: RefObject<HTMLDivElement>;
  divProjects: RefObject<HTMLDivElement>;
}

export function Hero({
  scrollPosition,
  divAbout,
  divWorkExperience,
  divHonours,
  divExperience,
  divProjects,
}: HeroProps) {
  return (
    <div className="flex md:fixed flex-col justify-start items-center h-auto md:h-full w-full md:w-[50%] ">
      <div
        className={`flex flex-col justify-start items-start  w-full p-[13%] text-[200%] md:text-[500%] text-foreground opacity-80`}
      >
        {entryContents.name}
        <div
          className={`flex w-full text-sm md:text-lg  xl:text-xl opacity-50 text-foreground`}
        >
          {entryContents.description}
        </div>
      </div>
      <div className="hidden md:flex md:flex-col justify-start items-start invisible md:visible w-full p-[13%]   ">
        {ButtonEvents.map((event) => (
          <Link key={event} to={event} smooth={true} duration={800}>
            <div
              className={`${
                event === "About" &&
                divAbout.current &&
                divWorkExperience.current &&
                scrollPosition >= 0 &&
                scrollPosition < divWorkExperience.current.offsetTop
                  ? "scale-[1.2] opacity-75"
                  : event === "Work Experience" &&
                    divWorkExperience.current &&
                    divHonours.current &&
                    scrollPosition >= divWorkExperience.current.offsetTop &&
                    scrollPosition < divHonours.current.offsetTop
                  ? "scale-[1.2] opacity-75"
                  : event === "Honours" &&
                    divHonours.current &&
                    divExperience.current &&
                    scrollPosition >= divHonours.current.offsetTop &&
                    scrollPosition < divExperience.current.offsetTop
                  ? "scale-[1.2] opacity-75"
                  : event === "Volunteering" &&
                    divExperience.current &&
                    divProjects.current &&
                    scrollPosition >= divExperience.current.offsetTop &&
                    scrollPosition < divProjects.current.offsetTop &&
                    !(
                      window.scrollY + window.innerHeight >=
                      document.documentElement.scrollHeight
                    )
                  ? "scale-[1.2] opacity-75"
                  : event === "Projects" &&
                    divProjects.current &&
                    window.scrollY + window.innerHeight >=
                      document.documentElement.scrollHeight
                  ? "scale-[1.2] opacity-75"
                  : ""
              } flex text-xl md:text-2xl lg:text-3xl text-foreground opacity-50 hover:opacity-100`}
            >
              {event}
            </div>
          </Link>
        ))}
      </div>
      <div className="flex flex-row justify-start items-center px-[13%]  w-full h-full gap-[10%] md:gap-[8%] ">
        {Object.keys(entryContents.socials).map((social) => {
          const { link, icon } =
            entryContents.socials[social as keyof typeof entryContents.socials];
          return (
            <a
              key={social}
              href={link}
              target="_blank"
              rel="noreferrer"
              className="flex justify-start items-start text-[140%] md:text-[200%]  text-foreground opacity-50 hover:opacity-100"
            >
              {icon}
            </a>
          );
        })}
      </div>
    </div>
  );
}
