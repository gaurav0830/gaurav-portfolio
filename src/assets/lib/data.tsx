import adobexdicon from "../../assets/icons/adobexdicon.svg";
import canvaicon from "../../assets/icons/canvaicon.svg";
import figmaicon from "../../assets/icons/figmaicon.svg";
import htmlicon from "../../assets/icons/htmlicon.svg";
import cssicon from "../../assets/icons/cssicon.svg";
import javascripticon from "../../assets/icons/javascripticon.svg";
import typescripticon from "../../assets/icons/typescripticon.svg";
import reacticon from "../../assets/icons/reacticon.svg";
import nodejsicon from "../../assets/icons/nodejsicon.svg";
import tailwindcssicon from "../../assets/icons/tailwindicon.svg";
import Aiicon from "../../assets/icons/aiicons.svg";
import mongodbicon from "../../assets/icons/mongoicon.svg";
import expressicon from "../../assets/icons/expressicon.svg";
import sassscssicon from "../../assets/icons/sassicon.svg";
import mysqlicon from "../../assets/icons/mysqlicons.svg";
import phpicon from "../../assets/icons/phpicon.svg";
import axiosicon from "../../assets/icons/axiosicon.svg";
import rendericon from "../../assets/icons/rendericon.svg";
import jwticon from "../../assets/icons/jwticon.svg";
import vscodeicon from "../../assets/icons/vscodeicon.svg";
import postmanicon from "../../assets/icons/postman-icon.svg";
import androidstudioicon from "../../assets/icons/androidstudioicon.svg";
import tastyMockup from "../../assets/img/tasty_mockup.webp";
import instorMockup from "../../assets/img/instor_mockup.webp";
import silentmoonMockup from "../../assets/img/silentmoon_mockup.webp";
import profilepicture from "../img/me2.webp";
import caricon from "../../assets/icons/car-icon.svg";
import travelicon from "../../assets/icons/travel-icon.svg";
import hardwareicon from "../../assets/icons/hardware-icon.svg";
import expressiconwhite from "../../assets/icons/expressiconwhite.svg";
import { GoHome, GoPerson, GoMail, GoStack, GoProject } from "react-icons/go";
import { FiGithub, FiLink, FiLinkedin, FiMail } from "react-icons/fi";
import Imprint from "../../components/Imprint";
import Privacy from "../../components/Privacy";

export const headerIntroData = {
  title: {
    en: "Hi, I'm Gaurav R",
  },
  subtitle: "Full-Stack Developer | Problem Solver | Tech Enthusiast",
  description: {
    en: "I’m Gaurav, a passionate full-stack developer with a strong foundation in modern web technologies. I specialize in building scalable, user-focused applications that transform ideas into impactful digital solutions.",
  },
  buttons: [
    {
      name: "Contact",
      label: {
        en: "Contact me",
      },
      icon: FiMail,
      color: "main-btn",
    },
    {
      name: "Projects",
      label: {
        en: "My Projects",
      },
      icon: FiGithub,
      color: "secondary-btn",
    },
  ],
  profilepicture: profilepicture,
} as const;

export const projectsData = [
  {
    title: "AryaDurga Cloud Kitchen",
    description_EN:
      "A full-stack food delivery web app featuring a catalog of 100+ food items with integrated cart management. Optimized order flow and form validations, reducing average order completion time from 5 minutes to 3 minutes for a seamless user experience.",
    technologies: [
      { name: "Html", icon: htmlicon },
      { name: "CSS", icon: cssicon },
      { name: "JavaScript", icon: javascripticon },
      { name: "PHP", icon: phpicon },
      { name: "MYSql", icon: mysqlicon },
      { name: "Canva", icon: canvaicon },
    ],
    image: tastyMockup,
    deploymenturl: "",
    githuburl: "",
    githubicon: FiGithub,
    deploymenticon: FiLink,
    colors: {
      main: "main-btn",
      second: "secondary-btn",
      icon: "white",
      projectcolor: "#70B9BE",
    },
  },
  {
    title: "Syncwear",
    description_EN:
      "A smartwatch e-commerce website that allows customers to browse and purchase watches online. It includes an admin dashboard with features to add, update, and delete products, enabling efficient inventory and order management.",
    technologies: [
      { name: "Html", icon: htmlicon },
      { name: "CSS", icon: cssicon },
      { name: "JavaScript", icon: javascripticon },
      { name: "PHP", icon: phpicon },
      { name: "MYSql", icon: mysqlicon },
      { name: "Figma", icon: figmaicon },
    ],
    image: silentmoonMockup,
    deploymenturl: "https://silentmoon-grpw.onrender.com/",
    githuburl:
      "https://github.com/gaurav0830/syncwear",
    githubicon: FiGithub,
    deploymenticon: FiLink,
    colors: {
      main: "main-btn",
      second: "secondary-btn",
      icon: "white",
      projectcolor: "#FFD5BD",
    },
  },
  {
    title: "Joshiana 13.0",
    description_EN:
      "A dynamic college fest website built with HTML, CSS, PHP, and MySQL, featuring a responsive design and user-friendly navigation. It includes a registration page for participants and an engaging home page to showcase event details.",
    technologies: [
      { name: "Html", icon: htmlicon },
      { name: "CSS", icon: cssicon },
      { name: "JavaScript", icon: javascripticon },
      { name: "Figma", icon: figmaicon },
      { name: "PHP", icon: phpicon },
      { name: "MYSql", icon: mysqlicon },
    ],
    image: instorMockup,
    deploymenturl: "",
    githuburl: "github.com/gaurav0830/joshiana-13.0",
    githubicon: FiGithub,
    deploymenticon: FiLink,
    colors: {
      main: "main-btn",
      second: "secondary-btn",
      icon: "white",
      projectcolor: "#E3964A",
    },
  },
  {
    title: "QPGS",
    description_EN:
      "A Question Paper Generation System built with the MERN stack to simplify and automate the process of creating exam papers. It provides an intuitive interface for educators to generate, manage, and organize question papers efficiently.",
    technologies: [
      { name: "React", icon: reacticon },
      { name: "JWT & Bcrypt", icon: jwticon },
      { name: "Axios", icon: axiosicon },
      { name: "MongoDB", icon: mongodbicon },
      { name: "Express", icon: expressiconwhite },
      { name: "Node.js", icon: nodejsicon },
      { name: "Figma", icon: figmaicon },
      { name: "Render", icon: rendericon },
    ],
    image: instorMockup,
    deploymenturl: "",
    githuburl: "https://github.com/gaurav0830/qbps",
    githubicon: FiGithub,
    deploymenticon: FiLink,
    colors: {
      main: "main-btn",
      second: "secondary-btn",
      icon: "white",
      projectcolor: "#E3964A",
    },
  },
  {
    title: "StudyHive",
    description_EN:
      "StudyHive is a cloud-based study material organizer built with the MERN stack, designed for seamless file upload and sharing. It supports nested folders, Google OAuth login, and file operations like preview, rename, delete, and download for efficient study management.",
    technologies: [
      { name: "React", icon: reacticon },
      { name: "JWT & Bcrypt", icon: jwticon },
      { name: "Axios", icon: axiosicon },
      { name: "MongoDB", icon: mongodbicon },
      { name: "Express", icon: expressiconwhite },
      { name: "Node.js", icon: nodejsicon },
      { name: "Tailwind CSS", icon: tailwindcssicon},
      { name: "Ollama AI", icon:Aiicon},
      { name: "Figma", icon: figmaicon },
      { name: "Render", icon: rendericon },
    ],
    image: instorMockup,
    deploymenturl: "",
    githuburl: "https://github.com/gaurav0830/qbps",
    githubicon: FiGithub,
    deploymenticon: FiLink,
    colors: {
      main: "main-btn",
      second: "secondary-btn",
      icon: "white",
      projectcolor: "#E3964A",
    },
  },
] as const;

export const liveTickerData = {
  content: {
    en: "More Projects on Github",
  },
} as const;

export const skillsDataWeb = [
  {
    skillsTitle: "WebDevelopment",
    skills: [
      {
        title: "HTML",
        hash: "#html",
        icon: htmlicon,
        color: "#F1662A",
      },
      {
        title: "CSS",
        hash: "#CSS",
        icon: cssicon,
        color: "#1572B6",
      },
      {
        title: "JavaScript",
        hash: "#JavaScript",
        icon: javascripticon,
        color: "#F7DF1E",
      },
      {
        title: "TypeScript",
        hash: "#TypeScript",
        icon: typescripticon,
        color: "#007ACC",
      },
      {
        title: "React",
        hash: "#React",
        icon: reacticon,
        color: "#61DAFB",
      },
      {
        title: "Node.js",
        hash: "#Node.js",
        icon: nodejsicon,
        color: "#339933",
      },
      {
        title: "Tailwind",
        hash: "#Tailwind",
        icon: tailwindcssicon,
        color: "#38B2AC",
      },
      {
        title: "MongoDB",
        hash: "#MongoDB",
        icon: mongodbicon,
        color: "#449C45",
      },
      {
        title: "Express",
        hash: "#Express",
        icon: [expressicon, expressiconwhite],
        color: ["#000000", "#FFFFFF"],
      },
      {
        title: "SASS/SCSS",
        hash: "#SASS/SCSS",
        icon: sassscssicon,
        color: "#CC6699",
      },
    ],
  },
] as const;

export const skillsDataDesign = [
  {
    skillsTitle: "Design",
    skills: [
      { title: "Figma", hash: "#Figma", icon: figmaicon, color: "#F24E1E" },
      {
        title: "Adobe XD",
        hash: "#Adobe XD",
        icon: adobexdicon,
        color: "#FF61F6",
      },
      { title: "Canva", hash: "#Canva", icon: canvaicon, color: "#00C4CC" },
    ],
  },
] as const;

export const skillsDataCMS = [
  {
    skillsTitle: "Tools",
    skills: [
      {
        title: "VS Code",
        hash: "#Vscode",
        icon: vscodeicon,
        color: "#21759B",
      },
      {
        title: "Postman",
        hash: "#postman",
        icon: postmanicon,
        color: "#FF714B",
      },
      {
        title: "Android Studio",
        hash: "#Android Studio",
        icon: androidstudioicon,
        color: "#0F0E0E",
      },
    ],
  },
] as const;

export const navLinks = [
  { en: "Home", hash: "#home", icon: GoHome },
  { en: "Skills", hash: "#skills", icon: GoStack },
  { en: "Projects", hash: "#projects", icon: GoProject },
  { en: "About me", hash: "#about-me", icon: GoPerson },
  { en: "Contact", hash: "#contact", icon: GoMail },
] as const;

export const FooterLinks = [
  { en: "Imprint", hash: "#imprint", data: <Imprint /> },
  { en: "Privacy", hash: "#privacy", data: <Privacy /> },
] as const;

export const sideBarRightMail = {
  link: "mailto:gauravr8402@gmail.com",
  text: "gauravr8402@gmail.com",
} as const;

export const sideBarLeftSocials = [
  {
    link: "https://www.linkedin.com/in/gaurav-ramdas/",
    icon: FiLinkedin,
    altimgname: "linkedin",
  },
  {
    link: "https://github.com/gaurav0830",
    icon: FiGithub,
    altimgname: "github",
  },
  {
    link: "mailto:gauravr8402@gmail.com",
    icon: FiMail,
    altimgname: "mail",
  },
] as const;

export const quotesData = [
  {
    en: `"Programming isn’t about what you know; it’s about what you can figure out."`,
    author: "Chris Pine",
  },
  {
    en: `"The web is like a canvas, and code is the paint. Create your masterpiece."`,
  },
] as const;

export const aboutMeData = {
  title_EN: "About Me",
description_EN: "A few snippets about my journey",
paragraphs_EN: [
  {
    title: "Passion for Full-Stack Development",
    description:
      "As an MCA graduate with a strong foundation in programming, databases, and the software development life cycle, I thrive on building full-stack applications that solve real-world problems. My expertise spans React, Node.js, MongoDB, and modern frameworks that bring ideas to life.",
    icon: hardwareicon,
  },
  {
    title: "Hands-On Project Experience",
    description:
      "From developing an end-to-end food delivery platform to building a cloud-based study material organizer, I have gained practical experience in designing scalable applications. I enjoy optimizing user flows, implementing secure authentication, and creating seamless digital solutions.",
    icon: caricon,
  },
  {
    title: "Driven to Learn and Grow",
    description:
      "Curiosity drives me to constantly learn new technologies and refine my problem-solving skills. Whether collaborating in team environments or exploring innovative ideas, I aim to create impactful digital experiences and grow as a well-rounded IT professional.",
    icon: travelicon,
  },
],
};

export const contactData = {
  title: {
    en: "Contact",
  },
  description: {
    en: "Write me a message and I will get back to you.",
  },
  inputfields: [
    {
      name: "name",
      placeholder: {
        en: "Your Name",
      },
      type: "text",
      validation: {
        en: "Please fill in your name",
      },
      pattern: "{2}",
    },
    {
      name: "email",
      placeholder: {
        en: "Your E-Mail",
      },
      type: "email",
      validation: {
        en: "Please fill in your email",
      },
      pattern: "[@]{4}",
    },
    {
      name: "subject",
      placeholder: {
        en: "Your Subject",
      },
      type: "text",
      validation: {
        en: "Please fill in your subject",
      },
      pattern: "{10}",
    },
  ],
  textarea: {
    placeholder: {
      en: "Your Message",
    },
    name: "message",
    rows: 10,
    validation: {
      en: "Please fill in your message",
    },
    pattern: "{10}",
  },
  button: {
    value: {
      en: "Send",
    },
  },
  icon: FiMail,
  iconcolor: "#FFFFFF",
  colors: {
    main: "main-btn",
    second: "secondary-btn",
    icon: "white",
  },
  privacyOptIn: {
  checkbox: {
    en: "I consent to the use of my personal data (name and email address) solely for the purpose of responding to my inquiry.",
  },
  description: {
    en: "By submitting this form, you confirm that you have read and agree to the Privacy Policy.",
  },
},

} as const;

export const toastMessages = {
  loadingProject: {
    en: "🦄 The live demo will open shortly. Starting servers...",
  },
  successEmailSent: {
    en: "🦄 Thank you for your email. I will get back to you as soon as possible",
  },
  failedEmailSent: {
    en: "🦄 Unfortunately the sending of your email did not work. Please try again later",
  },
  failedValidationName: {
    en: "Please fill in your name",
  },
} as const;

export const buttonLabels = {
  language: {
    de: "DE",
    en: "EN",
  },
} as const;

export const directionStyles: Record<string, React.CSSProperties> = {
  "outer-right-to-inner-left": {
    marginRight: "4rem",
  },
  "outer-left-to-inner-right": {
    marginLeft: "4rem",
    transform: "scaleX(-1)",
  },
  "inner-right-to-middle": {
    width: "100%",
    transform: "scaleY(1)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  "inner-left-to-middle": {
    width: "100%",
    transform: "scaleX(-1)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  "middle-to-inner-right": {
    width: "100%",
    transform: "scale(1,-1)",
  },
  "middle-to-inner-left": {
    width: "100%",
    transform: "scale(-1,-1)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  middle: {
    width: "100%",
    transform: "scaleX(-1)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
};

export const heightStyles: Record<string, { heights: [string, string] }> = {
  small: {
    heights: ["25rem", "15rem"],
  },
  middle: {
    heights: ["35rem", "25rem"],
  },
  large: {
    heights: ["45rem", "35rem"],
  },
  extraLarge: {
    heights: ["55rem", "45rem"],
  },
};

export const spaceStyles: Record<string, React.CSSProperties> = {
  "outer-right-to-inner-left": {
    marginTop: "-6rem",
    width: "100%",
  },
  "outer-left-to-inner-right": {
    marginTop: "-6rem",
    width: "100%",
  },
  "inner-right-to-middle": {
    marginTop: "-20rem",
    width: "50%",
    zIndex: "-10",
  },
  "inner-left-to-middle": {
    marginTop: "-10rem",
    width: "50%",
    zIndex: "-10",
  },
  "middle-to-inner-right": {
    width: "75%",
  },
  "middle-to-inner-left": {
    marginTop: "-2.5rem",
    width: "50%",
  },
  middle: {
    marginTop: "-2.5rem",
    width: "0%",
    display: "none",
  },
};

export const widthStyles: Record<string, { widths: [string, string] }> = {
  "outer-right-to-inner-left": {
    widths: ["74.45%", "74.45%"],
  },
  "outer-left-to-inner-right": {
    widths: ["75%", "75%"],
  },
  "inner-right-to-middle": {
    widths: ["50.1%", "49%"],
  },
  "inner-left-to-middle": {
    widths: ["50.1%", "49%"],
  },
  "middle-to-inner-right": {
    widths: ["33.4%", "50.03%"],
  },
  "middle-to-inner-left": {
    widths: ["50.1%", "49%"],
  },
  middle: {
    widths: ["0%", "0%"],
  },
};
