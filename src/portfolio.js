/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Praveen Kumar",
  title: " I'm Praveen",
  subTitle: emoji(
    "I am a dedicated and passionate Full Stack Developer 🚀 with a predominant focus on backend technologies. With extensive experience in crafting high-quality Web and Mobile applications, I specialize in robust and scalable solutions that power impactful user experiences."
  ),
  resumeLink: "https://pravnkr.github.io/dev-portfolio/Praveen-Resume.pdf", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/pravnkr/pravnkr",
  linkedin: "https://www.linkedin.com/in/praveen-kumar-788429192",
  medium: "https://medium.com/@praveenkumarlsipl",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: emoji("💻 What I Do"),
  subTitle:
    "I leverage a comprehensive understanding of software architecture and design to develop applications that are not only intuitive and user-friendly but also reliable and maintainable. My approach is always to ensure that every piece of code I write serves a meaningful purpose and adds value to the end product.",
  skills: [],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "Angular",
      fontAwesomeClassname: "fab fa-angular"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: false, // Set false to hide this section, defaults to true
  schools: []
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Development Engineer II",
      company: "DealsPlus",
      companylogo: require("./assets/images/dealsplus.png"),
      date: "September 2022 - Present",
      desc: "At DealsPlus, a dynamic SaaS platform, I hold a significant role as a Software Development Engineer II, specializing in backend engineering. My role is crucial in steering the backend architecture towards scalable and efficient solutions, ensuring the robustness and reliability of the platform. Here’s a glimpse into my responsibilities and contributions:",
      descBullets: [
        "Strategic Designing: Leading the conceptualization and implementation of scalable designs for the backend, focusing on optimizing performance and ensuring long-term viability.",
        "Backend Development: Engineering sophisticated solutions using Java, Spring Boot, and Hibernate, emphasizing clean, efficient, and maintainable code.",
        "Frontend Collaboration: Contributing to the UI development with React, ensuring seamless integration and coherent, user-friendly interfaces."
        // "Key Contributions: Actively involved in pivotal decisions and developments, addressing the core functionalities and enhancements of the platform.",
        // "Continuous Improvement: Embracing best practices and innovative solutions to drive continuous improvement in the quality and functionality of the platform."
      ]
    },
    {
      role: "Sr. Full-Stack Engineer",
      company: "Cresitatech",
      companylogo: require("./assets/images/cresitatech.jpg"),
      date: "May 2021 - August 2022",
      desc: "At Cresitatech, I managed backend microservices in Spring Boot and frontend development in Angular for a SaaS-based ERP application in the law domain. My responsibilities were multifaceted and included:",
      descBullets: [
        "Managing the development of backend microservices in Spring Boot and frontend interfaces in Angular, focusing on delivering solutions tailored to the law domain.",
        "Identifying key components in a domain and collaboratively designing systems with team members, adhering to agile principles on both the UI and server-side fronts.",
        "Conducting peer code reviews to ensure the adherence to coding standards and to foster a culture of knowledge sharing and continuous improvement within the team."
      ]
    },
    {
      role: "Full-Stack Engineer",
      company: "Logicsoft",
      companylogo: require("./assets/images/logicsoft.jpg"),
      date: "March 2020 - May 2021",
      desc: "In my tenure at Logicsoft, I played a pivotal role in developing and integrating microservices and REST APIs, contributing to both backend and frontend domains. My key responsibilities included:",
      descBullets: [
        "Crafting microservices and REST APIs using Spring Boot, Hibernate, and NestJs (Node.js), ensuring seamless integration with Angular on the UI side.",
        "Designing a polyglot model-based template project, amalgamating technologies from Java and JavaScript domains, such as Spring-based projects and NestJs (running on Node.js as a platform).",
        "Ensuring the delivery of robust and scalable solutions by actively participating in the entire development lifecycle, from design to deployment."
      ]
    },
    {
      role: "Software Engineer",
      company: "AutoBrix",
      companylogo: require("./assets/images/autobrix.jpg"),
      date: "Jan 2019 – Mar 2020",
      desc: "At Autobrix, I embraced the role of a Software Engineer, delving deep into the tech stack, including different projects in Spring ecosystem and Angular. My primary responsibilities encompassed:",
      descBullets: [
        "Developing applications utilizing Spring MVC (Java).",
        "Exploring and implementing various tech stacks, focusing on enhancing my proficiency in Spring projects and Angular.",
        "Collaborating with the team to ensure the delivery of high-quality solutions, contributing to both frontend and backend development."
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/dealsplus.webp"),
      projectName: "DealsPlus",
      projectDesc:
        "Helping private market funds and portfolios be transaction ready",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://dealsplus.io/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/interbill-logo.webp"),
      projectName: "Interbill",
      projectDesc: "Attorney Billing Software and Service(SaaS)",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://www.interbill.com/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Problem Solving",
      subtitle:
        "Certified in Problem Solving by HackerRank demonstrating proficiency in devising effective and efficient solutions using the data structures and algorithms.",
      image: require("./assets/images/problem-solving.png"),
      imageAlt: "Hacker Rank - Problem Solving",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.hackerrank.com/certificates/1dc6e25449fc"
        }
      ]
    },
    {
      title: "Java",
      subtitle:
        "Certified in Java by HackerRank, showcasing adeptness in utilizing Java for developing robust and efficient software solutions.",
      image: require("./assets/images/java-logo.png"),
      imageAlt: "Hacker Rank - Problem Solving (Basic)",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.hackerrank.com/certificates/7741c946c2a0"
        }
      ]
    },
    {
      title: "SQL",
      subtitle:
        "Certified in SQL by HackerRank, evidencing advanced knowledge and skills in managing and querying databases effectively using SQL.",
      image: require("./assets/images/sql.png"),
      imageAlt: "Hacker Rank - Problem Solving (Basic)",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.hackerrank.com/certificates/3ffcb5c8be2e"
        }
      ]
    },
    {
      title: "Rest API",
      subtitle:
        "Certified in REST API by HackerRank, illustrating proficiency in designing and integrating scalable and responsive RESTful APIs to optimize software interoperability.",
      image: require("./assets/images/rest-api.png"),
      imageAlt: "Hacker Rank - Problem Solving (Basic)",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.hackerrank.com/certificates/618848cf5a51"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91-8368220140",
  email_address: "praveenkumar8484@outlook.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};
