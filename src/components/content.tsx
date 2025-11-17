import { FaGithub, FaLinkedin, FaMailBulk } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export const ButtonEvents = [
  "About",
  "Work Experience",
  "Honours",
  "Volunteering",
  "Projects",
];

export const entryContents = {
  name: "Ali Tap",
  title: "Software Engineer",
  description: "Full-Stack Developer",
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
      "Due to my interest in science and technology, I became interested in programming and began studying C programming while attending Yıldız Technical University in 2020. Over the past 5 years, I have been involved in numerous projects ranging from embedded systems to network systems, web programming to game programming. Currently, I am a student seeking employment, and I am delighted to offer high-quality work to organizations interested in collaborating with me, as I am passionate about this field.",
  },
  workExperience: {
    koza: {
      title: "KOZA LLC",
      role: "Software Developer",
      location: "Wyoming, United States",
      date: "10/12/2024 - 12/10/2025",
      content:
        "When I joined Koza, the company was a startup venture. I worked at Koza for a year as a full-stack developer. I worked on every aspect of the application, from server systems to front-end technologies, from start to finish. While working here, I gained a lot of experience in web and mobile technologies.",
      link: "https://koza.academy",
      image: "",
    },
  },
  honours: {
    teknofest: {
      title: "Teknofest Hyperloop Competition 2024",
      award: "2nd Place in Turkey",
      institution: "Tübitak Teknofest",
      date: "10/10/2024",
      content:
        "I participated in the Teknofest hyperloop category and won second place in Turkey.",
      image: "teknofest.JPG",
    },
  },
  volunteering: {
    starloop: {
      title: "Starloop",
      role: "Communication Team Supervisor",
      date: "November 2023 - 1/11/2024",
      content:
        "I am responsible for the communication team within Starloop. I worked on the optimisation of the embedded codes of STM32 and ESP32 microcontrollers for the Starloop Pod III communication system. I also designed an interface created with the electron framework, where system data can be read better and vehicle control is provided more easily, and I worked on the optimisation of the interface created with the existing QT application.",
      image: "starloopUinew.png",
    },
  },
  projects: {
    gameEngine: {
      title: "Game Engine",
      date: "10/07/2023",
      content:
        "We built a simple game engine that can be used to create simple RPG games. The engine is based on the Entity-Component-System (ECS) pattern. Our purpose is to create a simple game that is fun to play and can be used to learn the basics of game development. We had a lot of fun building it and we hope you will have fun playing it.",
      gitLink: "",
      link: "",
      video: "promotion.mp4",
      image: "",
    },
    debtDistribution: {
      title: "Debt Distribution Application",
      date: "13/06/2023",
      content:
        "It is a web-based automation system that uses python web api for the database I developed to solve the problem caused by the inability of students living as 2 or more people to find an application to calculate the debt distribution of the products they buy at home.",
      link: "https://zarganalar.vercel.app",
      gitLink: "",
      image: "",
      video: "",
    },
    coachingApp: {
      title: "Coaching App",
      date: "",
      content:
        "The Koç app offers a forum page where users can discuss various topics and track their progress, featuring calculators and guidance content for those interested in fitness and sports.",
      link: "https://atalaythecoach.com",
      gitLink: "",
      image: "",
      video: "",
    },
  },
} as const;
