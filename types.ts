import { IconType } from 'react-icons';

export interface Service {
  title: string;
  about: string;
  Icon: IconType;
}

export interface Skill {
  name: string;
  level: string;
  Icon: IconType; 
}

export interface IProject {
  name: string;
  description: string;
  image_path: string;
  deployed_url: string;
  github_url: string;
  category: string[];
  key_techs: string[];
}

export type Category = "react" | "node" | "java"