import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { ThemeProvider, useTheme } from "./components/theme-provider";
import { ButtonEvents } from "./components/contant";
import { FaGithub } from "react-icons/fa";
function App() {
  const { theme, setTheme } = useTheme();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const themRef = React.useRef<HTMLDivElement>(null);
  setTheme("dark");
  function handleMouseMovement({
    clientX,
    clientY,
    currentTarget,
  }: React.MouseEvent) {
    console.log(clientX, clientY, currentTarget);
    const { left, top } = currentTarget.getBoundingClientRect();

    const x = clientX - left;
    const y = clientY - top;

    setMousePosition({ x, y });
  }

  return (
    <div
      onMouseMove={handleMouseMovement}
      ref={themRef}
      style={{
        backgroundImage: `radial-gradient(circle at ${mousePosition.x}px ${
          mousePosition.y
        }px, ${"rgb(15 23 42)"} 1%, transparent 45%)`,
      }}
    >
      <ThemeProvider>
        <div className="fixed justify-start items-center w-[50%] h-screen  ">
          <div
            className={`flex flex-col justify-start items-start w-full p-[10%] bg-${theme}-bg text-${theme}-fg text-[6rem]`}
          >
            Ali Tap
            <div className={`text-lg text-${theme}-fg`}>
              Computer Engineer Student
            </div>
            <div className={`text-lg text-${theme}-fg opacity-50 `}>
              I am a computer engineer student at the Istanbul Esenyurt
              University. I am interested in software development and I am
              trying to improve myself in this field.
            </div>
          </div>
          <div className="flex flex-col justify-start items-start w-full p-[10%] gap-2">
            {ButtonEvents.map((event) => (
              <Button
                className={`flex bg-${theme}-bg text-${theme}-fg hover:scale-[1.1] hover:bg-transparent border-2 border-${theme}-fg hover:border-${theme}-fg transition-all`}
                key={event}
                onClick={() => {
                  console.log(event);
                }}
                size={"sm"}
              >
                {event}
              </Button>
            ))}
          </div>
          <FaGithub className="fixed top-[90%] left-[5%]" size={40} />
        </div>
        <div className="flex flex-row w-screen h-screen">
          <div className="flex w-[50%] h-full"></div>
          <div className="flex w-[50%] h-full">
            {/* about me */}
            <div>
              <div className="justify-start items-start px-[10%] py-[15%] text-lg opacity-50">
                I first started programming in 2020 while studying Computer and
                Information Technologies Instructor at Yildiz Technical
                University in 2020. Basically, I mainly worked on C programming.
                In 2023, I left Yildiz Technical University and started the
                Computer Engineering department at Istanbul Esenyurt University.
                In these 3 years, I have been involved in many project studies.
                In November 2023, I entered the Starloop team, which carried out
                slang work on Hyperloop technology, as the Communication team
                Responsible and I was involved in many slang studies within the
                team.
              </div>
            </div>
          </div>
        </div>
      </ThemeProvider>
    </div>
  );
}

export default App;
