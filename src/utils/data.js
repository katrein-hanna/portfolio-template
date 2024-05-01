import { BiLogoJavascript } from "react-icons/bi";
import { FaCss3,FaFacebookSquare, FaGithubSquare, FaHtml5, FaLinkedin, FaReact } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import { VscVscode, VscCommentUnresolved, VscTerminalPowershell } from "react-icons/vsc";
import { FaGitAlt } from "react-icons/fa";
import { MdGroups3 } from "react-icons/md";

import project_pic1 from '../assets/images/project1.jpg';
import project_pic2 from '../assets/images/project2.jpg';
import project_pic3 from '../assets/images/project3.jpg';
import project_pic4 from '../assets/images/project4.jpg';

export const MENU_LINKS = [
    { id: "01", lable: "Home", offset: -100, to: "hero" },
    { id: "02", lable: "Skills", offset: -80, to: "skills" },
    { id: "03", lable: "About Me", offset: -80, to: "about" },
    { id: "04", lable: "Projects", offset: -80, to: "projects" },
    { id: "05", lable: "Contact", offset: -80, to: "contact" },
]

export const STATS = [
    { id: "01", count: "4", label: `Years of \nExperience` },
    { id: "02", count: "6", label: `Certifications \nEarned` },
    { id: "03", count: "10", label: `Projects \nCompleted` },
    { id: "04", count: "37", label: `Happy \nClients` },
]

export const SKILL_TABS = [
    { id: "01", label: "All", value: "all" },
    { id: "02", label: "Frontend", value: "frontend" },
    { id: "03", label: "Backend", value: "backend" },
    { id: "04", label: "Tools", value: "tools" },
    { id: "05", label: "Skills", value: "soft-skills" },
]

export const SKILLS = [
    {
        id: "01",
        icon: FaReact,
        skill: "React Js",
        progress: 95,
        type: "frontend",
        description: "Lorem ipsum is a dummy or placeholder text commonly used in graphic design, publishing, and web development."
    },
    {
        id: "02",
        icon: FaHtml5,
        skill: "HTML",
        progress: 99,
        type: "frontend",
        description: "Lorem ipsum is a dummy or placeholder text commonly used in graphic design, publishing, and web development."
    },
    {
        id: "03",
        icon: FaCss3,
        skill: "CSS",
        progress: 65,
        type: "frontend",
        description: "Lorem ipsum is a dummy or placeholder text commonly used in graphic design, publishing, and web development."
    },
    {
        id: "04",
        icon: BiLogoJavascript,
        skill: "JavaScript",
        progress: 88,
        type: "frontend",
        description: "Lorem ipsum is a dummy or placeholder text commonly used in graphic design, publishing, and web development."
    },
    {
        id: "05",
        icon: SiMysql,
        skill: "SQL",
        progress: 90,
        type: "backend",
        description: "Lorem ipsum is a dummy or placeholder text commonly used in graphic design, publishing, and web development."
    },
    {
        id: "06",
        icon: FaGitAlt,
        skill: "Git & GitHub",
        progress: 75,
        type: "tools",
        description: "Lorem ipsum is a dummy or placeholder text commonly used in graphic design, publishing, and web development."
    },
    {
        id: "07",
        icon: VscVscode,
        skill: "Visual Studio Code",
        progress: 95,
        type: "tools",
        description: "Lorem ipsum is a dummy or placeholder text commonly used in graphic design, publishing, and web development."
    },
    {
        id: "08",
        icon: VscCommentUnresolved,
        skill: "Problem-Solving",
        progress: 85,
        type: "soft-skills",
        description: "Lorem ipsum is a dummy or placeholder text commonly used in graphic design, publishing, and web development."
    },
    {
        id: "09",
        icon: MdGroups3,
        skill: "Collaboration",
        progress: 80,
        type: "soft-skills",
        description: "Lorem ipsum is a dummy or placeholder text commonly used in graphic design, publishing, and web development."
    },
    {
        id: "10",
        icon: VscTerminalPowershell,
        skill: "Attention to Details",
        progress: 83,
        type: "soft-skills",
        description: "Lorem ipsum is a dummy or placeholder text commonly used in graphic design, publishing, and web development."
    }
];

export const ABOUT_ME = {
    content: `Lorem ipsum is a dummy or placeholder text commonly used in graphic design, publishing, and web development orem ipsum is a dummy or placeholder text commonly used in graphic design, publishing, and web development opment orem ipsum is a dummy or placeholder text commonly used in graphic design, publishing, and web development opment orem ipsum is a dummy or placeholder text commonly used in graphic design, publishing, and web development ipsum is a dummy or placeholder text commonly used in graphic design, publishing, and web development orem ipsum is a dummy or placeholder text commonly used in graphic design, publishing, and web development opment orem ipsum is a dummy or placeholder text commonly used in graphic design, publishing, and web development opment orem ipsum is a dummy or placeholder text commonly used in graphic design, publishing, and web development .`,
    socialLinks: [
        { id: '01', lable: "LinkedIn", icon: FaLinkedin, link: "#" },
        { id: '02', lable: "Github", icon: FaGithubSquare, link: "#" },
        { id: '03', lable: "Facebook", icon: FaFacebookSquare, link: "#" },
    ],
    email: "test@gmail.com",
    phone: "11111111",
    website: "www.github.com"
};

export const PROJECTS = [
    {
        id: 1,
        title: "lorem text akshrfa sakljdail ajhs bdcjkabr3wku kajdhkaf,fgbauierda, vawyhegdawy ,agq2uiw2uil",
        image: project_pic1,
        tags: ["html","React","javascript"]
    },
    {
        id: 2,
        title: "lorem text akshrfa sakljdail ajhs bdcjkabr3wku kajdhkaf,fgbauierda, vawyhegdawy ,agq2uiw2uil",
        image: project_pic2 ,
        tags: ["html","React","javascript"]
    },
    {
        id: 3,
        title: "lorem text akshrfa sakljdail ajhs bdcjkabr3wku kajdhkaf,fgbauierda, vawyhegdawy ,agq2uiw2uil",
        image: project_pic3,
        tags: ["html","React","javascript"]
    },
    {
        id: 4,
        title: "lorem text akshrfa sakljdail ajhs bdcjkabr3wku kajdhkaf,fgbauierda, vawyhegdawy ,agq2uiw2uil",
        image: project_pic4,
        tags: ["html","React","javascript"]
    },
];