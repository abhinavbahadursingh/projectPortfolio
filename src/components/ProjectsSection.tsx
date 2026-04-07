import { Sparkles, Code, BrainCircuit, Car, User, Scan, Mail, Volume2, Video, Calendar, Github } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const projects = [
  {
    title: "AI Traffic Management System",
    description: "Optimizing urban traffic flow using real-time computer vision and predictive modeling.",
    tags: ["Computer Vision", "YOLO", "Optimization"],
    icon: Car,
    link: "https://github.com/yourusername/ai-traffic-management",
  },
  {
    title: "Celebrity Look-Alike Finder",
    description: "Deep learning application that matches user photos with celebrity faces using feature embedding.",
    tags: ["Facial Recognition", "Deep Learning", "Siamese Networks"],
    icon: User,
    link: "https://github.com/yourusername/celebrity-lookalike",
  },
  {
    title: "Face Recognition Attendance System",
    description: "Automated attendance tracking system with high-accuracy facial identification for institutions.",
    tags: ["OpenCV", "Dlib", "Real-time"],
    icon: Scan,
    link: "https://github.com/yourusername/face-attendance",
  },
  {
    title: "Spam Email Classifier",
    description: "Robust NLP model designed to filter and categorize unsolicited emails with high precision.",
    tags: ["NLP", "Scikit-Learn", "Naïve Bayes"],
    icon: Mail,
    link: "https://github.com/yourusername/spam-classifier",
  },
  {
    title: "AI Sound Detection System",
    description: "Real-time acoustic event detection and classification for security and monitoring.",
    tags: ["Audio Processing", "CNN", "Spectrograms"],
    icon: Volume2,
    link: "https://github.com/yourusername/sound-detection",
  },
  {
    title: "AI CCTV Accident Detection",
    description: "Automated incident detection system for monitoring road networks and alerting emergency services.",
    tags: ["Anomaly Detection", "Deep Learning", "Video Analytics"],
    icon: Video,
    link: "https://github.com/yourusername/accident-detection",
  },
  {
    title: "AI Project Planner",
    description: "Smart task scheduling and resource allocation tool powered by genetic algorithms.",
    tags: ["Heuristic Search", "Optimization", "Management"],
    icon: Calendar,
    link: "https://github.com/yourusername/ai-project-planner",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="section-padding">
      <div className="container mx-auto">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-4">
            Featured Projects 🚀
          </h2>
          <p className="text-muted-foreground text-center max-w-xl mx-auto mb-12">
            A collection of AI and Machine Learning solutions designed to solve real-world problems.
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {projects.map((project, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <div className="glass-card-hover p-6 h-full flex flex-col group">
                <div className="flex items-center justify-between mb-4">
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center" style={{ background: "var(--gradient-primary)" }}>
                    <project.icon size={22} className="text-primary-foreground" />
                  </div>
                  
                  {/* GitHub Link */}
                  {project.link && (
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-2 rounded-full hover:bg-primary/10 text-muted-foreground hover:text-primary transition-all duration-300"
                      aria-label={`View ${project.title} on GitHub`}
                    >
                      <Github size={20} />
                    </a>
                  )}
                </div>

                {/* Content */}
                <h3 className="font-heading font-semibold text-lg mb-2">{project.title}</h3>
                <p className="text-sm text-muted-foreground mb-4 flex-1">{project.description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
                      {tag}
                    </span>
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

export default ProjectsSection;
