import { type RefObject } from "react";
import { Card, CardDescription, CardTitle } from "../ui/card";
import { Trophy } from "lucide-react";
import { entryContents } from "../content";
import { ImageZoom } from "../ui/shadcn-io/image-zoom";

interface HonoursSectionProps {
  divHonours: RefObject<HTMLDivElement>;
}

export function HonoursSection({ divHonours }: HonoursSectionProps) {
  return (
    <div className="flex flex-col w-full h-full">
      <div
        className="flex visible w-full md:invisible text-xl  md:text-3xl border-b border-foreground/20 pb-2"
        ref={divHonours}
        id="Honours"
      >
        Honours and Awards
      </div>
      <div className="flex flex-col gap-6 -mx-[5%]">
        {Object.keys(entryContents.honours).map((honour) => {
          const honourData =
            entryContents.honours[
              honour as keyof typeof entryContents.honours
            ];
          const { title, award, institution, date, content } = honourData;
          const image = "image" in honourData ? honourData.image : undefined;
          return (
            <Card
              key={honour}
              className="flex flex-col bg-transparent border-transparent"
            >
              <CardTitle className="text-foreground py-[2%] px-[4%] text-xl  md:text-3xl">
                {title}
              </CardTitle>
              <CardDescription className="py-1 px-[4%] text-primary font-semibold flex items-center gap-2">
                <Trophy className="w-5 h-5" /> {award}
              </CardDescription>
              <CardDescription className="py-1 px-[4%]">
                {institution} • {date}
              </CardDescription>
              <CardDescription className="flex flex-col gap-2 py-1 px-[4%] sm:text-sm md:text-lg lg:text-xl ">
                <div className="flex">{content}</div>
              </CardDescription>
              {image && (
                <div className="flex items-center justify-center w-full p-[4%]">
                  <ImageZoom>
                    <img
                      src={`/${image}`}
                      alt={title}
                      className="rounded-lg w-2/3 h-auto object-cover hover:scale-105 transition-transform duration-300"
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
