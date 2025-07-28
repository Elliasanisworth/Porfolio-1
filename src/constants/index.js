export const myProjects = [
  {
    id: 1,
    title: "E-commerce Platform",
    description:
       "Snatch is a minimalist e-commerce MVP designed to explore the essential building blocks of an online store — from product browsing to cart management — all wrapped in a responsive, user-first experience. Built with a future-ready mindset, it's a foundation for continued growth and feature expansion.",
    subDescription: [
      "Snatch started as a personal project to understand how e-commerce platforms work from the ground up. Using Node.js, Express, and EJS, I built a functional MVP with product listings, cart management, and user authentication.",
      "I focused on clean structure, responsive design, and a seamless user experience. Though it's still in progress, features like search and payment integration are planned as I continue expanding the platform.",
],
    href: "",
    logo: "",
    image: "/assets/projects/accessories.jpg",
    tags: [
      {
        id: 1,
        name: "JavaScript",
        path: "/assets/logos/javascript.svg",
      },
      {
        id: 2,
        name: "Node.js",
        path: "/assets/logos/nodejs.svg",
      },
      {
        id: 3,
        name: "Express",
        path: "/assets/logos/express.svg",
      },
      {
        id: 4,
        name: "TailwindCSS",
        path: "/assets/logos/tailwindcss.svg",
      },
       {
        id: 5,
        name: "EJS",
        path: "/assets/logos/ejs.svg",
      },
    ],
  },
  {
    id: 2,
    title: "PromptPilot",
    description:
      "MCP is an AI-powered command-line agent designed to execute simple tasks like opening websites or generating LinkedIn posts using Google Gemini AI. Built to explore tool calling, agent flow, and real-time automation using the Model Context Protocol.",
    subDescription: [
      "This project started as an experiment to understand how AI agents can trigger real-world actions. Using a Node.js server and the MCP SDK, I created tools for opening websites and generating contextual content through Gemini AI.",
      "Though still a work in progress, it laid the foundation for building more advanced, multi-functional agents capable of acting on user prompts in natural, useful ways.",

    ],
    href: "",
    logo: "",
    image: "/assets/projects/auth-system.jpg",
    tags: [
      {
        id: 1,
        name: "Node.js",
        path: "/assets/logos/nodejs.svg",
      },
      {
        id: 2,
        name: "Express",
        path: "/assets/logos/express.svg",
      },
      {
        id: 3,
        name: "Google Gemini",
        path: "/assets/logos/gemini.svg",
      },
      {
        id: 4,
        name: "Js",
        path: "/assets/logos/javascript.svg",
      },
    ],
  },
  {
    id: 3,
    title: "Blue Boy Adventure- 2D Java Game",
    description:
      "A handcrafted 2D adventure game built in pure Java using Swing, featuring character movement, combat, inventory, and rich interactions with monsters and NPCs across multiple maps. Designed to explore game logic, pathfinding, and real-time rendering from the ground up.",
    subDescription: [
      "This game began as a way to challenge myself with raw game development in Java. I implemented a full game loop, tile-based world, combat mechanics, A* pathfinding for NPCs, and systems for dialogue, inventory, and projectiles.",
      "Though still in progress, it already includes multiple game states, a day/night cycle, and a full UI — all built with no game engine, just Java Swing and code from scratch.",
    ],
    href: "",
    logo: "",
    image: "/assets/projects/2dGame.webp",
    tags: [
      {
        id: 1,
        name: "Java",
        path: "/assets/logos/Java.svg",
      },
    ],
  },
  {
    id: 4,
    title: "AI-Powered Code Collaboration Platform",
    description:
       "A real-time collaborative coding environment enhanced with AI support, built using the MERN stack and Google Gemini AI.",
    subDescription: [
     "Built a smart IDE that lets teams code together in real-time, with AI suggesting code improvements as you go.",
    "Added Socket.IO for live collaboration, including chat, file syncing, and multi-user editing.",
    "Integrated JWT-based authentication and secure project-level access control.",
    "Designed a clean, responsive UI using React and Tailwind CSS for a smooth experience across all devices.",
  
    ],
    href: "",
    logo: "",
    image: "/assets/projects/game-engine.jpg",
    tags: [
      {
        id: 1,
        name: "React",
        path: "/assets/logos/react.svg",
      },
      {
        id: 2,
        name: "Node.js",
        path: "/assets/logos/nodejs.svg",
      },
      {
        id: 3,
        name: "MongoDB",
        path: "/assets/logos/mongodb.svg",
      },
      {
        id: 4,
        name: "TailwindCSS",
        path: "/assets/logos/tailwindcss.svg",
      },
      {
      id: 5,
      name: "Socket.IO",
      path: "/assets/logos/socket.png",
    },
    ],
  },
  {
    id: 5,
    title: "WordPress Custom Theme",
    description:
      "A fully customizable WordPress theme optimized for performance and SEO.",
    subDescription: [
      "Developed a responsive WordPress theme using HTML5, CSS3, and JavaScript.",
      "Integrated Tailwind CSS for modern styling and UI enhancements.",
      "Optimized SEO and page speed using Vite.js for fast builds.",
      "Implemented custom widgets and plugin compatibility for extended functionality.",
    ],
    href: "",
    logo: "",
    image: "/assets/projects/wordpress-theme.jpg",
    tags: [
      {
        id: 1,
        name: "WordPress",
        path: "/assets/logos/wordpress.svg",
      },
      {
        id: 2,
        name: "HTML5",
        path: "/assets/logos/html5.svg",
      },
      {
        id: 3,
        name: "CSS3",
        path: "/assets/logos/css3.svg",
      },
      {
        id: 4,
        name: "Vite.js",
        path: "/assets/logos/vitejs.svg",
      },
    ],
  },
  {
    id: 6,
    title: "Online Learning Platform",
    description:
      "A web application that allows users to enroll in courses, watch video lectures, and take quizzes.",
    subDescription: [
      "Built using Blazor WebAssembly for a seamless SPA experience.",
      "Implemented video streaming with Azure Media Services.",
      "Added a quiz system with dynamic question generation and real-time grading.",
      "Integrated Stripe API for secure payment processing.",
    ],
    href: "",
    logo: "",
    image: "/assets/projects/elearning.jpg",
    tags: [
      {
        id: 1,
        name: "Blazor",
        path: "/assets/logos/blazor.svg",
      },
      {
        id: 2,
        name: "Azure",
        path: "/assets/logos/azure.svg",
      },
      {
        id: 3,
        name: "Stripe",
        path: "/assets/logos/stripe.svg",
      },
      {
        id: 4,
        name: "TailwindCSS",
        path: "/assets/logos/tailwindcss.svg",
      },
    ],
  },
];

export const mySocials = [
  {
    name: "Github",
    href: "https://github.com/Elliasanisworth",
    icon: "/assets/socials/github.svg",
  },
  {
    name: "Linkedin",
    href: "www.linkedin.com/in/shashwat-srivastava-/",
    icon: "/assets/socials/linkedIn.svg",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/its_shashwat_29/",
    icon: "/assets/socials/instagram.svg",
  },
];

export const experiences = [
  {
    title: "Software Developer",
    job: "Security & Defense Projects",
    date: "2021-2023",
    contents: [
      "Enhanced application security and developed new features, adhering to standards set by the Passive Defense Organization and National Cyberspace Center.",
      "Designed and implemented intuitive map interfaces using MapsUI, enhancing user experience and enabling seamless interactive map integration.",
      "Developed applications for industrial automation, leveraging C++ and the Fatek API for PLC communication.",
      "Enhanced responsiveness and usability of applications using Windows Forms and WPF frameworks.",
      "Executed XML to SVG conversions using X-DOM, ensuring dynamic and efficient data visualization.",
    ],
  },
  {
    title: "Back-End Developer",
    job: "Car Manufacture",
    date: "2023-2024",
    contents: [
      "Engineered systems for large-scale data ingestion and analysis, ensuring efficient data processing and storage.",
      "Developed back-end systems enabling vehicle-to-cloud communication for telemetry, diagnostics, and remote control:",
      "✅ Implemented secure APIs, following ISO 26262 automotive safety standards.",
      "✅ Ensured data privacy for customers and partners through industry-compliant protocols.",
      "✅ Delivered remote features like over-the-air updates, real-time tracking, and remote start capabilities.",
    ],
  },
  {
    title: "Freelance Developer",
    job: "Self-Employed",
    date: "2025-Present",
    contents: [
      "Created a personal portfolio using Three.js, React, Vite, and WebAPI to showcase technical expertise.",
      "Continuously enhancing technical skills and expanding expertise in modern web development and back-end technologies.",
    ],
  },
];
export const reviews = [
  {
    name: "Jack",
    username: "@jack",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "https://robohash.org/jack",
  },
  {
    name: "Jill",
    username: "@jill",
    body: "I don't know what to say. I'm speechless. This is amazing.",
    img: "https://robohash.org/jill",
  },
  {
    name: "John",
    username: "@john",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://robohash.org/john",
  },
  {
    name: "Alice",
    username: "@alice",
    body: "This is hands down the best thing I've experienced. Highly recommend!",
    img: "https://robohash.org/alice",
  },
  {
    name: "Bob",
    username: "@bob",
    body: "Incredible work! The attention to detail is phenomenal.",
    img: "https://robohash.org/bob",
  },
  {
    name: "Charlie",
    username: "@charlie",
    body: "This exceeded all my expectations. Absolutely stunning!",
    img: "https://robohash.org/charlie",
  },
  {
    name: "Dave",
    username: "@dave",
    body: "Simply breathtaking. The best decision I've made in a while.",
    img: "https://robohash.org/dave",
  },
  {
    name: "Eve",
    username: "@eve",
    body: "So glad I found this. It has changed the game for me.",
    img: "https://robohash.org/eve",
  },
];