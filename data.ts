import { BsCircleFill } from 'react-icons/bs';
import { AiOutlineDownCircle } from 'react-icons/ai';
import { IProject, Service, Skill } from './types';

export const services: Service[] = [
  {
    title: "Age",
    about: "21",
    Icon: AiOutlineDownCircle,
  },
  {
    title: "Hometown",
    about: "Tokyo",
    Icon: AiOutlineDownCircle,
  },
  {
    title: "Motto",
    about: "No Attack No Chance",
    Icon: AiOutlineDownCircle,
  },
  {
    title: "Club",
    about: "Ultimate , Baseball",
    Icon: AiOutlineDownCircle,
  },
  {
    title: "Email",
    about: "kobakai0707baseball@gmail.com",
    Icon: AiOutlineDownCircle,
  },
]

export const languages: Skill[] = [
  {
    name:"HTML",
    level:"60%",
    Icon:BsCircleFill
  },
  {
    name:"CSS",
    level:"50%",
    Icon:BsCircleFill
  },
  {
    name:"JavaScript",
    level:"40%",
    Icon:BsCircleFill
  },
  {
    name:"React",
    level:"40%",
    Icon:BsCircleFill
  },
  {
    name:"Next.js",
    level:"40%",
    Icon:BsCircleFill
  },
  {
    name:"TailwindCSS",
    level:"50%",
    Icon:BsCircleFill
  },
]

export const tools: Skill[] = [
  {
    name:"PhotoShop",
    level:"50%",
    Icon:BsCircleFill
  },
  {
    name:"Illustrator",
    level:"50%",
    Icon:BsCircleFill
  },
  {
    name:"Rhinoceros",
    level:"70%",
    Icon:BsCircleFill
  },
]

export const projects: IProject[] = [
  {
    id: 1,
    name: "Twitter Clone",
    description: "Twitterのクローンです。",
    image_path: "/images/tt.jpg",
    deployed_url: "",
    github_url: "",
    category: ["react"],
    key_techs: ["React"],
  },
  {
    id: 2,
    name: "Photo Search App",
    description: "写真の検索サイトです",
    image_path: "/images/tt.jpg",
    deployed_url: "",
    github_url: "",
    category: ["java"],
    key_techs: ["Java"],
  },
  
]