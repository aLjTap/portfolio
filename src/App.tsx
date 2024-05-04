import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { ButtonEvents } from "./components/contant";
import { FaGithub } from "react-icons/fa";

function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  function handleMouseMovement({
    clientX,
    clientY,
    currentTarget,
  }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();

    const x = clientX - left;
    const y = clientY - top;

    setMousePosition({ x, y });
  }

  return (
    <div
      onMouseMove={handleMouseMovement}
      className="flex w-screen h-screen bg-[#080c19] text-white"
      style={{
        backgroundImage: `radial-gradient(circle at ${mousePosition.x}px ${
          mousePosition.y
        }px, ${"rgb(15 23 42)"} 1%, transparent 45%)`,
      }}
    >
      <div className="fixed justify-start items-center w-[50%] h-screen  ">
        <div
          className={`flex flex-col justify-start items-start w-full p-[10%] text-[6rem]`}
        >
          Ali Tap
          <div className={`text-lg opacity-50 `}>
            I am a computer engineer student at the Istanbul Esenyurt
            University. I am interested in software development and I am trying
            to improve myself in this field.
          </div>
        </div>
        <div className="flex flex-col justify-start items-start w-full p-[10%] gap-2">
          {ButtonEvents.map((event) => (
            <Button
              className={`flex bg-transparent  text-black-fg hover:scale-[1.1] hover:bg-transparent border-2 transition-all opacity-60 hover:opacity-100`}
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
            <div className="justify-start items-start px-[10%] py-[15%] text-lg opacity-50 text-white">
              I first started programming in 2020 while studying Computer and
              Information Technologies Instructor at Yildiz Technical University
              in 2020. Basically, I mainly worked on C programming. In 2023, I
              left Yildiz Technical University and started the Computer
              Engineering department at Istanbul Esenyurt University. In these 3
              years, I have been involved in many project studies. In November
              2023, I entered the Starloop team, which carried out slang work on
              Hyperloop technology, as the Communication team Responsible and I
              was involved in many slang studies within the team.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
