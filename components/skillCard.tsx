import { IconSvgProps } from "@/types";

export const SkillCard: React.FC<{
  icon: React.FC<IconSvgProps>;
  label: String;
}> = ({ icon: Icon, label }) => {
  return (
    <div className="flex flex-col items-center gap-2">
      <Icon />
      <p className="font-semibold">{label}</p>
    </div>
  );
};
