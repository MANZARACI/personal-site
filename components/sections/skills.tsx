import { title } from "@/components/primitives";
import { SkillCard } from "@/components/skillCard";
import { siteConfig } from "@/config/site";

export default function SkillsSection() {
  return (
    <section id="skills" className="text-center mt-20">
      <h2 className={title()}>Skills</h2>
      <div className="grid grid-cols-3 md:grid-cols-5 xl:grid-cols-7 gap-12 mt-10">
        {siteConfig.skills.map((skill) => (
          <SkillCard key={skill.label} label={skill.label} icon={skill.icon} />
        ))}
      </div>
    </section>
  );
}
