import { SiAmazonaws, SiDocker, SiGraphql, SiMongodb, SiNodedotjs, SiReact, SiSvelte, SiTypescript } from "react-icons/si";

const homePageContent = {
  hero: {
    heading: "Max Randle",
    content:
      "Find out a little bit about me, download my CV, play around with some of my embedded projects, and enjoy the design! I put a lot of effort into it.",
  },
  work: {
    heading: "My work",
    content:
      "I am an intermediate level front end software engineer, with a passion for creating fast, responsive, seamless, and accessible web applications. I value readability, consistency, simplicity, and agnosticism as the core paradigms of my coding mantra. In my current role I embrace these values to write professional grade react components at a very high standard.",
    media: "media/max-crop.jpg",
  },
  skills: {
    heading: "My skills",
    contentArray: [
      {
        name: "TypeScript",
        description:
          "Once you go TypeScript you never go back. if you're still writing JavaScript it's time to take the leap. I guarantee you will become a better developer.",
        IconComponent: SiTypescript,
        iconColor: "#4476c0",
      },
      {
        name: "React",
        description: "React is lightweight, intuitive, and it just works. There are very few aspect of react that I feel are clunky and unpolished.",
        IconComponent: SiReact,
        iconColor: "#7ccdea",
      },
      {
        name: "GraphQL",
        description: "Front end devs love it, back end devs hate it. The only thing that matters is that all must surrender to the revolution.",
        IconComponent: SiGraphql,
        iconColor: "#d446a7",
      },
      {
        name: "Node",
        description: "Perfect stack for quickly building small web servers with very low set up time and a great community and ecosystem.",
        IconComponent: SiNodedotjs,
        iconColor: "#98c635",
      },
      {
        name: "Docker",
        description:
          "Developers dream. Away with the 12 project setup steps and dev/test/build commands. Simply run the image and it will just work! Please don't try to use docker on windows.",
        IconComponent: SiDocker,
        iconColor: "#4a94e6",
      },
      {
        name: "Svelte",
        description:
          "Svelte is simple, sophisticated, and elegant. It's still a baby, but when it grows up I predict it will become the future of web development.",
        IconComponent: SiSvelte,
        iconColor: "#df4a25",
      },
      {
        name: "MongoDB",
        description:
          "Perfect database to complete a node + react app. Accompanying packages like Mongoose make it super easy and simple to model non-relational data. Also free hosting.",
        IconComponent: SiMongodb,
        iconColor: "#6ce974",
      },
      {
        name: "AWS",
        description:
          "Devops and deployment is hard and aws does not make it any easier. But the docs are quite good and always up to date and in my experience once you get it working it stays working.",
        IconComponent: SiAmazonaws,
        iconColor: "#df953c",
      },
    ],
  },
  external: {
    heading: "External",
    links: {
      resume: {
        title: "Resume",
        url: "http://max-randle-resume.s3-website-ap-southeast-2.amazonaws.com/",
      },
      github: { title: "GitHub", url: "https://github.com/MaxRandle" },
      linkedIn: {
        title: "LinkedIn",
        url: "https://www.linkedin.com/in/max-randle-a79760160/",
      },
    },
  },
  hobbies: {
    heading: "My hobbies",
    imageReel: [
      {
        alt: "rocket league",
        src: "media/rocket-league.jpg",
        description: "Rocket league is a fast pased and highly competitive online game which my friends and I love and play often.",
      },
      {
        alt: "racing drone",
        src: "media/drone.jpg",
        description: "I built a racing drone from parts I ordered online.",
      },
      {
        alt: "coffe art",
        src: "media/coffee.jpg",
        description: "I love coffee and I'm learning how to create latte foam patterns.",
      },
      {
        alt: "max with guitar",
        src: "media/max-guitar.jpg",
        description: "I've been playing guitar for over 10 years. I like to do fingerstyle covers of popular songs.",
      },
      {
        alt: "homemade pasta",
        src: "media/max-pasta.jpg",
        description:
          "I cook often and especially enjoy making home made pasta. When I first tried this I was really amazed at how much better it is than dried store bought pasta.",
      },
      {
        alt: "craft beer cans",
        src: "media/beer.jpg",
        description: "A crisp fruity hazy on a summers afternoon.",
      },
      {
        alt: "berlin wall",
        src: "media/berlin-wall.jpg",
        description: "I have dearly missed travelling the last few years and can't wait to go back to europe. This picture is from the berlin wall.",
      },
      {
        alt: "sleeping kitty",
        src: "media/kitty.jpg",
        description: "Her name is Tabitha and she is very entitled.",
      },
    ],
  },
  projects: {
    heading: "My Projects",
    content: "I am a very active programmer outside of work. Here are a collection of some of my projects for you to check out!",
    media: "media/max-art.jpg",
    contentArray: [
      {
        name: "P5.js",
        description: "A collection of small projects I made using Processing for JavaScript while I was at university.",
      },
      {
        name: "UTTT AI",
        description: "An AI agent that can play the game of Ultimate Tic Tac Toe.",
      },
      {
        name: "I.S.S docking autopilot",
        description: "Autopilot script for the SpaceX International Spacestation cking simulator.",
      },
      {
        name: "Randle Recipes",
        description: "Online family cookbook that I made in collaboration with my cousin.",
      },
    ],
    linkText: "Go to projects",
  },
};

export default homePageContent;
