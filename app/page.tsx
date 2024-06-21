import EducationSection from "../components/sections/education";
import ExperienceSection from "../components/sections/experience";
import IntroductionSection from "../components/sections/introduction";
import SkillsSection from "../components/sections/skills";

export default function Home() {
  return (
    <>
      <IntroductionSection />
      <ExperienceSection />
      <EducationSection />
      <SkillsSection />
    </>
  );
}
