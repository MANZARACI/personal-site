import {
  CssIcon,
  FirebaseIcon,
  GitHubIconSkill,
  GitIcon,
  HtmlIcon,
  JavaIcon,
  JavascriptIcon,
  MongoIcon,
  NodejsIcon,
  PythonIcon,
  ReactIcon,
  ScalaIcon,
  TailwindIcon,
} from "@/components/icons";

export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Basar Ureten | Personal Site",
  description: "Hi! My name is Basar Ureten. I am a backend developer.",
  url: "https://www.basarureten.dev",
  navItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Experience",
      href: "#experience",
    },
    {
      label: "Education",
      href: "#education",
    },
    {
      label: "Skills",
      href: "#skills",
    },
  ],
  navMenuItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Experience",
      href: "#experience",
    },
    {
      label: "Education",
      href: "#education",
    },
    {
      label: "Skills",
      href: "#skills",
    },
  ],
  links: {
    github: "https://github.com/MANZARACI",
    linkedIn: "https://www.linkedin.com/in/basarureten",
    //twitter: "https://twitter.com/getnextui",
    //docs: "https://nextui.org",
    //discord: "https://discord.gg/9b6yyZKmH4",
  },
  skills: [
    { label: "Scala", icon: ScalaIcon },
    { label: "Java", icon: JavaIcon },
    { label: "Javascript", icon: JavascriptIcon },
    { label: "Python", icon: PythonIcon },
    { label: "HTML", icon: HtmlIcon },
    { label: "CSS", icon: CssIcon },
    { label: "Tailwind CSS", icon: TailwindIcon },
    { label: "React", icon: ReactIcon },
    { label: "Node.js", icon: NodejsIcon },
    { label: "MongoDB", icon: MongoIcon },
    { label: "Firebase", icon: FirebaseIcon },
    { label: "Git", icon: GitIcon },
    { label: "GitHub", icon: GitHubIconSkill },
  ],
};
