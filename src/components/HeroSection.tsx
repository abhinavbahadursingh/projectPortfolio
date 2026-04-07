import { useEffect, useState } from "react";
import { ArrowDown, Send } from "lucide-react";

const phrases = [
  "Building Intelligent Systems",
  "Solving Problems with AI",
  "Turning Data into Insights",
  "Creating Smart Solutions",
];

const HeroSection = () => {
  const [currentPhrase, setCurrentPhrase] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const phrase = phrases[phraseIndex];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          setCurrentPhrase(phrase.substring(0, charIndex + 1));
          setCharIndex((prev) => prev + 1);
          if (charIndex + 1 === phrase.length) {
            setTimeout(() => setIsDeleting(true), 1500);
          }
        } else {
          setCurrentPhrase(phrase.substring(0, charIndex - 1));
          setCharIndex((prev) => prev - 1);
          if (charIndex - 1 === 0) {
            setIsDeleting(false);
            setPhraseIndex((prev) => (prev + 1) % phrases.length);
          }
        }
      },
      isDeleting ? 40 : 80
    );
    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, phraseIndex]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-primary/20 blur-[120px] animate-float" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full bg-secondary/20 blur-[120px] animate-float" style={{ animationDelay: "1.5s" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-accent/10 blur-[150px]" />

      <div className="container mx-auto px-4 text-center relative z-10">
        {/* Greeting badge */}
        <div className="inline-flex items-center gap-2 glass-card px-4 py-2 mb-8 animate-fade-up">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          <span className="text-sm text-muted-foreground">Available for opportunities</span>
        </div>

        {/* Name */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold mb-4 animate-fade-up" style={{ animationDelay: "0.1s" }}>
          Hi, I'm <br></br> <span className="gradient-text">Abhinav Bahadur Singh</span>
        </h1>

        {/* Title */}
        <h2 className="text-xl md:text-2xl lg:text-3xl font-heading font-semibold text-muted-foreground mb-6 animate-fade-up" style={{ animationDelay: "0.2s" }}>
          AI / ML Developer
        </h2>

        {/* Typing animation */}
        <div className="h-10 mb-8 animate-fade-up" style={{ animationDelay: "0.3s" }}>
          <p className="text-lg md:text-xl text-primary">
            {currentPhrase}
            <span className="animate-blink text-primary">|</span>
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up" style={{ animationDelay: "0.4s" }}>
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 px-8 py-3 rounded-xl font-medium text-primary-foreground transition-all duration-300 hover:scale-105"
            style={{ background: "var(--gradient-primary)" }}
          >
            View Projects
            <ArrowDown size={18} className="group-hover:translate-y-1 transition-transform" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-xl font-medium glass-card text-foreground hover:border-primary/30 transition-all duration-300 hover:scale-105"
          >
            Contact Me
            <Send size={18} />
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-2">
          <div className="w-1 h-2 rounded-full bg-primary animate-fade-up" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
