import { FaGithub, FaLinkedin, FaMailBulk } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export const ButtonEvents = ["About", "Experience", "Projects"];

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
      icon: <FaXTwitter />,
    },
    gmail: {
      link: "mailto:atap2629@gmail.com",
      icon: <FaMailBulk />,
    },
  },
  aboutMe: {
    title: "About",
    content:
      "I first started programming in 2020 while studying Computer Information Technologies Instructor at Yildiz Technical University   in 2020. Basically, I mainly worked on C programming. In 2023, I  left Yildiz Technical University and started the Computer Engineering department at Istanbul Esenyurt University. In these 3 years, I have been involved in many project studies. In November 2023, I entered the Starloop team, which carried out slang work on Hyperloop technology, as the Communication team Responsible and I was involved in many slang studies within the team.",
  },
  projects: {
    gameEngine: {
      title: "Game Engine",
      date: "2023 - Present",
      content:
        "We built a simple game engine that can be used to create simple RPG games. The engine is based on the Entity-Component-System (ECS) pattern. Our purpose is to create a simple game that is fun to play and can be used to learn the basics of game development. ",
      languages: ["TypeScript", "Phaser", "React", "Html", "Css"],
      link: "https://github.com/DuoMuskeeters/Heroes-Journey-Phaser",
    },
    calculator: {
      title: "Debt Distribution Application",
      date: "2023 - Present",
      content:
        "It is a web-based application that uses python web api for the database I developed to solve the problem caused by the inability of students living as 2 or more people to find an application to calculate the debt distribution of the products they buy at home.",
      languages: [
        "Python",
        "TypeScript",
        "HTML",
        "CSS",
        "React",
        "FastAPI",
        "Pydantic",
      ],
      link: "https://github.com/aLjTap/multi-user-debt-calculator-for-chicken-and-rice--with-pydantic-",
    },
    portfolio: {
      title: "Portfolio Website",
      date: "2023 - Present",
      content:
        "I developed my portfolio website. Now you are on my portfolio website. I used the React library to develop the website.",
      languages: [
        "TypeScript",
        "React",
        "Html",
        "Css",
        "TailwindCss",
        "Vercel",
      ],
      link: "https://github.com/aLjTap/portfolio",
    },
  },
  experience: {
    starloop: {
      title: "Starloop",
      date: "November 2023 - Present",
      content:
        "I am responsible for the communication team within Starloop. I worked on the optimisation of the embedded codes of STM32 and ESP32 microcontrollers for the Starloop Pod III communication system. I also designed an interface created with the electron framework, where system data can be read better and vehicle control is provided more easily, and I worked on the optimisation of the interface created with the existing QT application.",
      images: ["StarloopUi.png", "StarloopUiLogin.png"],
      languages: ["C", "C++", "Python", "Electron", "QT"],
    },
  },
} as const;
