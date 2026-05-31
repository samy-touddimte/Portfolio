import { SkillCategory } from "@/data/skills";

export function SkillsSection({ skills }: { skills: SkillCategory[] }) {
  return (
    <div className="flex flex-col gap-8">
      {skills.map((category, index) => (
        <div key={index} className="flex flex-col gap-3">
          <h3 className="text-xs uppercase tracking-widest text-zinc-400 font-mono">
            {category.category}
          </h3>
          <div className="flex flex-wrap gap-2">
            {category.items.map((item, itemIndex) => (
              <span
                key={itemIndex}
                className="px-2 py-1 bg-zinc-100 text-zinc-700 font-mono text-xs rounded hover:bg-zinc-200 transition-colors"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
