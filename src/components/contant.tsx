import { Mail } from "lucide-react";
import { title } from "process";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaX } from "react-icons/fa6";

export const ButtonEvents = ["About", "Projects"];

export const contants = {
  name: "Ali Tap",
  title: "Student",
  description:
    "I am a computer engineer student at the Istanbul Esenyurt University. I am interested in software development and I am trying to improve myself in this field.",
  socials: {
    github: {
      link: "https://github.com/aLjTap",
      icon: <FaGithub />,
    },
    linkedin: {
      link: "https://www.linkedin.com/in/ali-tap-36b296246/",
      icon: <FaLinkedin />,
    },
    X: {
      link: "https://twitter.com/_ali_tap",
      icon: <FaX />,
    },
    gmail: {
      link: "mailto:atap2629@gmail.com",
      icon: <Mail />,
    },
  },
  aboutMe: {
    title: "About Me",
    content:
      "I first started programming in 2020 while studying Computer Information Technologies Instructor at Yildiz Technical University   in 2020. Basically, I mainly worked on C programming. In 2023, I  left Yildiz Technical University and started the Computer Engineering department at Istanbul Esenyurt University. In these 3 years, I have been involved in many project studies. In November 2023, I entered the Starloop team, which carried out slang work on Hyperloop technology, as the Communication team Responsible and I was involved in many slang studies within the team.",
  },
  projects: {
    gameEngine: {
      title: "Game Engine",
      date: "2023 - Present",
      content:
        "I am working on a game engine project. The project is still in the development phase",
    },
    calculator: {
      title: "Calculator",
      date: "2023 - Present",
      content:
        "I developed a calculator application using C programming language.",
    },
    stm32: {
      title: "STM32",
      date: "2023 - Present",
      content:
        "I developed a project using the STM32 microcontroller. The project is still in the development phase.",
    },
    esp32: {
      title: "ESP32",
      date: "2023 - Present",
      content:
        "I developed a project using the ESP32 microcontroller. The project is still in the development phase.",
    },
  },
} as const;
