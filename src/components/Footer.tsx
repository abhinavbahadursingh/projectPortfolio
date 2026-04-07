import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border py-8 px-4">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Your Name. Built with passion for AI.
        </p>
        <div className="flex items-center gap-4">
          {[
            { icon: Github, href: "https://github.com/abhinavbahadursingh" },
            { icon: Linkedin, href: "https://www.linkedin.com/in/abhinav-bahadur-singh-bb3262329/" },
            { icon: Mail, href: "mailto:abhinavbahadursingh69@gmail.com" },
          ].map((s, i) => (
            <a
              key={i}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-lg glass-card flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary/30 transition-all duration-200"
            >
              <s.icon size={16} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
