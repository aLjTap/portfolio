import { type RefObject } from "react";
import { Card, CardDescription, CardTitle } from "../ui/card";
import { ExternalLink } from "lucide-react";
import { entryContents } from "../content";
import { ImageZoom } from "../ui/shadcn-io/image-zoom";

interface ProjectsSectionProps {
  divProjects: RefObject<HTMLDivElement>;
}

export function ProjectsSection({ divProjects }: ProjectsSectionProps) {
  return (
    <>
      <div
        className="flex visible w-full md:invisible text-xl  md:text-3xl border-b border-foreground/20 pb-2"
        id="Projects"
        ref={divProjects}
      >
        Projects
      </div>
      <div className="flex flex-col gap-6 -mx-[5%]">
        {Object.keys(entryContents.projects).map((project) => {
          const projectData =
            entryContents.projects[
              project as keyof typeof entryContents.projects
            ];
          const { title, content, date, link, image, video, gitLink } =
            projectData;

          return (
            <Card
              key={project}
              className="flex flex-col bg-transparent border-transparent"
            >
              <CardTitle className="text-foreground py-[2%] px-[4%] text-xl  md:text-3xl">
                {title}
              </CardTitle>
              {date && (
                <CardDescription className="py-1 px-[4%]">
                  {date}
                </CardDescription>
              )}
              <CardDescription className="flex flex-col gap-2 py-1 px-[4%] sm:text-sm md:text-lg lg:text-xl ">
                <div className="flex">{content}</div>
                <div className="flex gap-4 flex-wrap">
                  {link && (
                    <a
                      href={link}
                      target="_blank"
                      rel="noreferrer"
                      className="text-foreground hover:underline flex items-center gap-2"
                    >
                      <ExternalLink className="w-4 h-4" /> Live Demo
                    </a>
                  )}
                </div>
              </CardDescription>
              {video && (
                <div className="flex items-center justify-center w-full p-[4%]">
                  {link || gitLink ? (
                    <a
                      href={link || gitLink}
                      target="_blank"
                      rel="noreferrer"
                      className="w-full"
                    >
                      <video
                        src={`/${video}`}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="rounded-lg w-full h-auto object-cover hover:scale-105 transition-transform duration-300 cursor-pointer"
                      />
                    </a>
                  ) : (
                    <video
                      src={`/${video}`}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="rounded-lg w-full h-auto object-cover hover:scale-105 transition-transform duration-300"
                    />
                  )}
                </div>
              )}
              {image && (
                <div className="flex items-center justify-center w-full p-[4%]">
                  <a
                    href={link || gitLink}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full"
                  >
                    <ImageZoom>
                      <img
                        src={`/${image}`}
                        alt={title}
                        className="rounded-lg w-full h-auto object-cover hover:scale-105 transition-transform duration-300 cursor-pointer"
                      />
                    </ImageZoom>
                  </a>
                </div>
              )}
            </Card>
          );
        })}
      </div>
    </>
  );
}
