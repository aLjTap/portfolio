import { type RefObject } from "react";
import { Card, CardDescription, CardTitle } from "../ui/card";
import { ExternalLink } from "lucide-react";
import { entryContents } from "../content";
import { ImageZoom } from "../ui/shadcn-io/image-zoom";

interface WorkExperienceSectionProps {
  divWorkExperience: RefObject<HTMLDivElement>;
}

export function WorkExperienceSection({
  divWorkExperience,
}: WorkExperienceSectionProps) {
  return (
    <div className="flex flex-col w-full h-full ">
      <div
        className="flex visible w-full md:invisible text-xl  md:text-3xl border-b border-foreground/20 pb-2"
        ref={divWorkExperience}
        id="Work Experience"
      >
        Work Experience
      </div>
      <div className="flex flex-col gap-6 -mx-[5%]">
        {Object.keys(entryContents.workExperience).map((work) => {
          const workData =
            entryContents.workExperience[
              work as keyof typeof entryContents.workExperience
            ];
          const { title, role, location, date, content, link, image } =
            workData;

          return (
            <Card
              key={work}
              className="flex flex-col bg-transparent border-transparent"
            >
              <CardTitle className="text-foreground py-[2%] px-[4%] text-xl  md:text-3xl">
                {title}
              </CardTitle>
              <CardDescription className="py-1 px-[4%]">
                {role} • {location}
              </CardDescription>
              <CardDescription className="py-1 px-[4%]">{date}</CardDescription>
              <CardDescription className="flex flex-col gap-2 py-1 px-[4%] sm:text-sm md:text-lg lg:text-xl ">
                <div className="flex">{content}</div>
                {link && (
                  <a
                    href={link}
                    target="_blank"
                    rel="noreferrer"
                    className="text-foreground hover:underline flex items-center gap-2"
                  >
                    <ExternalLink className="w-4 h-4" /> {link}
                  </a>
                )}
              </CardDescription>
              {image && (
                <div className="flex items-center justify-center w-full p-[4%]">
                  <ImageZoom>
                    <img
                      src={`/${image}`}
                      alt={title}
                      className="rounded-lg w-full h-auto object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </ImageZoom>
                </div>
              )}
            </Card>
          );
        })}
      </div>
    </div>
  );
}
