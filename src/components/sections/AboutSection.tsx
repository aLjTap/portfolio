import { type RefObject } from "react";
import { entryContents } from "../content";

interface AboutSectionProps {
  divAbout: RefObject<HTMLDivElement>;
}

export function AboutSection({ divAbout }: AboutSectionProps) {
  return (
    <div className="flex flex-col gap-1 ">
      <div
        id="About"
        className="flex  opacity-100 text-xl md:text-2xl lg:text-3xl border-b border-foreground/20 pb-2 md:border-0"
        ref={divAbout}
      >
        {entryContents.aboutMe.title}
      </div>
      <div className="flex text-muted-foreground   text-sm md:text-lg  xl:text-xl ">
        {entryContents.aboutMe.content}
      </div>
    </div>
  );
}
