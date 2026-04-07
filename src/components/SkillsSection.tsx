import ScrollReveal from "./ScrollReveal";

interface SkillCategory {
  title: string;
  skills: { name: string; level: number }[];
}

const categories: SkillCategory[] = [
  {
    title: "Languages",
    skills: [
      { name: "Python", level: 85 },
      { name: "Java", level: 70 },
      { name: "JavaScript", level: 75 },
    ],
  },
  {
    title: "AI / ML",
    skills: [
      { name: "Machine Learning", level: 80 },
      { name: "Deep Learning", level: 70 },
      { name: "NLP", level: 65 },
    ],
  },
  {
    title: "Frameworks",
    skills: [
      { name: "TensorFlow", level: 75 },
      { name: "PyTorch", level: 70 },
      { name: "Transformers", level: 60 },
    ],
  },
  {
    title: "Web Dev",
    skills: [
      { name: "React", level: 70 },
      { name: "Node.js", level: 60 },
    ],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="section-padding">
      <div className="container mx-auto">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-4">
            My <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-muted-foreground text-center max-w-xl mx-auto mb-12">
            Technologies and tools I work with
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {categories.map((cat, ci) => (
            <ScrollReveal key={cat.title} delay={ci * 0.1}>
              <div className="glass-card p-6">
                <h3 className="font-heading font-semibold text-lg mb-5 gradient-text">{cat.title}</h3>
                <div className="space-y-4">
                  {cat.skills.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between text-sm mb-1.5">
                        <span className="text-foreground">{skill.name}</span>
                        <span className="text-muted-foreground">{skill.level}%</span>
                      </div>
                      <div className="h-2 rounded-full bg-muted overflow-hidden">
                        <div
                          className="h-full rounded-full transition-all duration-1000 ease-out"
                          style={{
                            width: `${skill.level}%`,
                            background: "var(--gradient-primary)",
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
