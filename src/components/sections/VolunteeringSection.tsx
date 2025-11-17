import { type RefObject } from "react";
import { Card, CardDescription, CardTitle } from "../ui/card";
import { entryContents } from "../content";
import { ImageZoom } from "../ui/shadcn-io/image-zoom";

interface VolunteeringSectionProps {
  divExperience: RefObject<HTMLDivElement>;
}

export function VolunteeringSection({
  divExperience,
}: VolunteeringSectionProps) {
  return (
    <div className="flex flex-col w-full h-full ">
      <div
        className="flex visible w-full md:invisible text-xl  md:text-3xl border-b border-foreground/20 pb-2"
        ref={divExperience}
        id="Volunteering"
      >
        Volunteering
      </div>
      <div className="flex flex-col gap-6 -mx-[5%]">
        {Object.keys(entryContents.volunteering).map((volunteering) => {
          const volunteeringData =
            entryContents.volunteering[
              volunteering as keyof typeof entryContents.volunteering
            ];
          const { title, role, date, content } = volunteeringData;
          const image =
            "image" in volunteeringData ? volunteeringData.image : undefined;
          return (
            <Card
              key={volunteering}
              className="flex flex-col bg-transparent border-transparent"
            >
              <CardTitle className="text-foreground py-[2%] px-[4%] text-xl  md:text-3xl">
                {title}
              </CardTitle>
              <CardDescription className="py-1 px-[4%]">{role}</CardDescription>
              <CardDescription className="py-1 px-[4%]">{date}</CardDescription>
              <CardDescription className="flex flex-col gap-2 py-1 px-[4%] sm:text-sm md:text-lg lg:text-xl ">
                <div className="flex">{content}</div>
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
