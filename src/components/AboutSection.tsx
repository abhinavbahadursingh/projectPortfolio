import { Brain, Lightbulb, Rocket } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const highlights = [
  { icon: Brain, label: "AI Enthusiast", desc: "Passionate about artificial intelligence and its real-world applications" },
  { icon: Lightbulb, label: "Problem Solver", desc: "Love tackling complex challenges with data-driven solutions" },
  { icon: Rocket, label: "Fast Learner", desc: "Constantly exploring new technologies and frameworks" },
];

const AboutSection = () => {
  return (
    <section id="about" className="section-padding">
      <div className="container mx-auto">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
            A passionate student and AI enthusiast dedicated to building intelligent systems
            that solve real-world problems. I believe in learning by doing — every project
            is a step closer to mastering the art of machine learning.
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {highlights.map((item, i) => (
            <ScrollReveal key={item.label} delay={i * 0.15}>
              <div className="glass-card-hover p-6 text-center">
                <div className="w-14 h-14 rounded-xl mx-auto mb-4 flex items-center justify-center" style={{ background: "var(--gradient-primary)" }}>
                  <item.icon size={24} className="text-primary-foreground" />
                </div>
                <h3 className="font-heading font-semibold text-lg mb-2">{item.label}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
