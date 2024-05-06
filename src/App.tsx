import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { ButtonEvents, contants } from "./components/contant";
import { FaGithub } from "react-icons/fa";
import { Card, CardDescription, CardTitle } from "./components/ui/card";

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
      className="flex flex-col md:flex-row w-[100%] h-[100%] bg-[#080c19] "
      style={{
        backgroundImage: `radial-gradient(circle at ${mousePosition.x}px ${
          mousePosition.y
        }px, ${"rgb(15 23 42)"} 1%, transparent 45%)`,
      }}
    >
      <div className="flex md:fixed flex-col justify-start items-center h-[50%] md:h-full w-full md:w-[50%] ">
        <div
          className={`flex flex-col justify-start items-start  w-full p-[13%] text-[200%] md:text-[500%] text-white opacity-80`}
        >
          {contants.name}
          <div
            className={`flex w-full text-[20%] sm:text-sm md:text-lg lg:text-xl opacity-50 text-white`}
          >
            {contants.description}
          </div>
        </div>
        <div className="hidden md:flex md:flex-col justify-start items-start invisible md:visible w-full p-[11%]   ">
          {ButtonEvents.map((event) => (
            <Button
              className={`flex flex-row gap-y-[10%] bg-transparent  hover:scale-[1.1] hover:bg-transparent  transition-all text-[130%] opacity-60 hover:opacity-100 text-white `}
              key={event}
              onClick={() => {
                console.log(event);
              }}
              size={"sm"}
            >
              {`${event}`}
            </Button>
          ))}
        </div>
        <div className="flex flex-row justify-start items-end px-[13%]  w-full h-full gap-[10%] md:gap-[8%] ">
          {Object.keys(contants.socials).map((social) => {
            const { link, icon } =
              contants.socials[social as keyof typeof contants.socials];
            return (
              <a
                key={social}
                href={link}
                className="flex justify-start items-start text-[140%] md:text-[200%]  text-white opacity-50 hover:opacity-100"
              >
                {icon}
              </a>
            );
          })}
        </div>
      </div>
      <div className="flex flex-col  md:flex-row w-full h-full">
        <div className="flex  w-full h-[30%]"></div>
        <div className="flex  w-full  h-full">
          <div className="flex flex-col gap-10 sm:gap-[5%] justify-start items-start px-[14%] py-[17%] text-[20%] sm:text-sm md:text-lg lg:text-xl   text-white">
            <div>
              <div className="flex opacity-100">{contants.aboutMe.title}</div>
              <div className="flex opacity-50">{contants.aboutMe.content}</div>
            </div>
            <div className="flex flex-col gap-11 -mx-[4%]">
              {Object.keys(contants.projects).map((project) => {
                const { title, date, content } =
                  contants.projects[project as keyof typeof contants.projects];
                return (
                  <Card
                    key={project}
                    className="flex flex-col bg-transparent border-transparent  hover:bg-gradient-to-br hover:from-[#1f2d4f] hover:to-[#1f2d4f]  animate-out"
                  >
                    <CardTitle className="text-white p-[4%] text-[20%] sm:text-sm md:text-lg lg:text-xl">
                      {title}
                    </CardTitle>
                    <CardDescription className="p-[4%]">{date}</CardDescription>
                    <CardDescription className="p-[4%] sm:text-sm md:text-lg lg:text-xl ">
                      {content}
                    </CardDescription>
                  </Card>
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
