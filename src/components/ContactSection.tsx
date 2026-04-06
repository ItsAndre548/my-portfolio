import AnimatedSection from "./AnimatedSection";
import { Github, Mail, Phone } from "lucide-react";

const ContactSection = () => (
  <AnimatedSection className="py-24 md:py-32 relative">
    <div id="contact" className="absolute -top-20" />
    <div className="container mx-auto px-6 text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Vamos <span className="text-gradient">conversar</span>?
      </h2>
      <p className="text-muted-foreground mb-10 max-w-md mx-auto">
        Estou disponível para novos projetos e oportunidades.
      </p>

      <div className="flex items-center justify-center gap-4 flex-wrap">
        <a
          href="mailto:andre548luiz@gmail.com"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-all duration-300 hover:shadow-[0_0_30px_-5px_hsl(175_80%_50%/0.4)]"
        >
          <Mail size={18} />
          andre548luiz@gmail.com
        </a>
        <a
          href="tel:+5521965827059"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border bg-secondary text-secondary-foreground font-medium hover:bg-surface-hover transition-all duration-300"
        >
          <Phone size={18} />
          (21) 96582-7059
        </a>
        <a
          href="https://github.com/ItsAndre548"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border bg-secondary text-secondary-foreground font-medium hover:bg-surface-hover transition-all duration-300"
        >
          <Github size={18} />
          GitHub
        </a>
      </div>
    </div>

    <div className="container mx-auto px-6 mt-24 pt-8 border-t border-border/50">
      <p className="text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} André Luiz Bastos Carneiro. Feito com React & Tailwind CSS.
      </p>
    </div>
  </AnimatedSection>
);

export default ContactSection;
