import { useState } from "react";
import { Mail, Github, Linkedin, Send } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const socials = [
  { icon: Mail, label: "Email", href: "mailto:abhinavbahadursingh69@gmail.com", display: "abhinavbahadursingh" },
  { icon: Github, label: "GitHub", href: "https://github.com/abhinavbahadursingh", display: "github.com/abhinavbahadursingh" },
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/abhinav-bahadur-singh-bb3262329/", display: "https://www.linkedin.com/in/abhinav-bahadur-singh-bb3262329/" },
];

const ContactSection = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // No backend — just log for now
    console.log("Form submitted:", formData);
    alert("Thanks for reaching out! (Form UI only — no backend connected yet)");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="section-padding">
      <div className="container mx-auto">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-muted-foreground text-center max-w-xl mx-auto mb-12">
            Have a question or want to collaborate? Feel free to reach out!
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Contact Info */}
          <ScrollReveal delay={0.1}>
            <div className="space-y-4">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-card-hover p-4 flex items-center gap-4 block"
                >
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ background: "var(--gradient-primary)" }}>
                    <s.icon size={18} className="text-primary-foreground" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{s.label}</p>
                    <p className="text-sm font-medium">{s.display}</p>
                  </div>
                </a>
              ))}
            </div>
          </ScrollReveal>

          {/* Contact Form */}
          {/* <ScrollReveal delay={0.2}>
            <form onSubmit={handleSubmit} className="glass-card p-6 space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                className="w-full px-4 py-3 rounded-lg bg-muted/50 border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors"
              />
              <input
                type="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                className="w-full px-4 py-3 rounded-lg bg-muted/50 border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors"
              />
              <textarea
                placeholder="Your Message"
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
                className="w-full px-4 py-3 rounded-lg bg-muted/50 border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors resize-none"
              />
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-medium text-primary-foreground transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"
                style={{ background: "var(--gradient-primary)" }}
              >
                Send Message <Send size={16} />
              </button>
            </form>
          </ScrollReveal> */}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
