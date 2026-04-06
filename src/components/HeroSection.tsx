import { motion } from "framer-motion";
import { Github, Mail, MapPin } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'linear-gradient(hsl(175 80% 50%) 1px, transparent 1px), linear-gradient(90deg, hsl(175 80% 50%) 1px, transparent 1px)',
        backgroundSize: '60px 60px'
      }} />

      {/* Glow orb */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px] animate-pulse-glow" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center"
        >
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 text-primary text-sm font-mono mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse-glow" />
            Disponível para novos projetos
          </motion.div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-4">
            <span className="text-foreground">André Luiz</span>
            <br />
            <span className="text-gradient glow-text">Bastos Carneiro</span>
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto mb-10 font-light"
          >
            Desenvolvedor Front-End especializado em criar experiências digitais de alta performance com{" "}
            <span className="text-primary font-medium">React</span>,{" "}
            <span className="text-primary font-medium">TypeScript</span> &{" "}
            <span className="text-primary font-medium">Tailwind CSS</span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="flex items-center justify-center gap-4 flex-wrap"
          >
            <a
              href="https://github.com/ItsAndre548"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-all duration-300 hover:shadow-[0_0_30px_-5px_hsl(175_80%_50%/0.4)]"
            >
              <Github size={18} />
              GitHub
            </a>
            <a
              href="mailto:andre548luiz@gmail.com"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border bg-secondary text-secondary-foreground font-medium hover:bg-surface-hover transition-all duration-300"
            >
              <Mail size={18} />
              Contato
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="flex items-center justify-center gap-2 mt-6 text-sm text-muted-foreground"
          >
            <MapPin size={14} />
            Rio de Janeiro, RJ
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-5 h-8 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-1"
        >
          <div className="w-1 h-2 rounded-full bg-primary" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
