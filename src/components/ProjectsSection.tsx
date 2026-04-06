import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Consulta Remédios",
    desc: "Marketplace com grande quantidade de acessos mensais. Atualizações de interface, regras de negócio e otimizações.",
    url: "https://consultaremedios.com.br",
    tags: ["React", "Preact", "DECO", "Tailwind"],
  },
  {
    title: "FARM Rio",
    desc: "Criação de landing pages e melhorias em páginas existentes para a marca de moda carioca.",
    url: "https://farmrio.com.br",
    tags: ["VTEX", "React", "CSS"],
  },
  {
    title: "Arena Center Loja",
    desc: "E-commerce de utilidades domésticas desenvolvido com DECO, foco em performance e UX.",
    url: "https://arenacenterloja.com.br",
    tags: ["DECO", "Preact", "Tailwind"],
  },
  {
    title: "RI Cora",
    desc: "Blog corporativo para empresa de investimentos, desenvolvido em DECO.",
    url: "https://ri.cora.com.br",
    tags: ["DECO", "TypeScript"],
  },
  {
    title: "Kelly Market",
    desc: "Loja de roupas de marca usadas desenvolvida em Shopify Liquid.",
    url: "https://kellymarket.com.br",
    tags: ["Shopify", "Liquid", "CSS"],
  },
   {
    title: "Consulta Remédios",
    desc: "O marketplace de remédios com mais de 10 milhões de acessos mensais.",
    url: "https://consultaremedios.com.br/",
    tags: ["DECO", "VTEX", "TAILWIND", "PREACT"],
  },
  {
    title: "Loja Kyly",
    desc: "Loja de roupas infantil.",
    url: "https://loja.kyly.com.br/",
    tags: ["FASTSTORE VTEX", "SCSS", "NEXT JS"],
  },
    {
    title: "Loja Milon",
    desc: "Loja de roupas infantil premium.",
    url: "https://loja.milon.com.br/",
    tags: ["FASTSTORE VTEX", "SCSS", "NEXT JS"],
  }
];

const ProjectsSection = () => (
  <AnimatedSection className="py-24 md:py-32 relative">
    <div id="projects" className="absolute -top-20" />
    <div className="container mx-auto px-6">
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
        Projetos <span className="text-gradient">relevantes</span>
      </h2>
      <p className="text-muted-foreground text-center mb-16 max-w-lg mx-auto">
        Uma seleção dos projetos que ajudei a construir e manter.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p, i) => (
          <motion.a
            key={p.title}
            href={p.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            whileHover={{ y: -6, transition: { duration: 0.2 } }}
            className="group relative rounded-xl p-6 bg-card border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-[0_0_40px_-10px_hsl(175_80%_50%/0.15)] flex flex-col"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                {p.title}
              </h3>
              <ExternalLink size={16} className="text-muted-foreground group-hover:text-primary transition-colors" />
            </div>
            <p className="text-sm text-muted-foreground mb-6 flex-1">{p.desc}</p>
            <div className="flex flex-wrap gap-2">
              {p.tags.map((t) => (
                <span key={t} className="text-[10px] font-mono px-2 py-1 rounded bg-muted text-muted-foreground">
                  {t}
                </span>
              ))}
            </div>
          </motion.a>
        ))}
      </div>
    </div>
  </AnimatedSection>
);

export default ProjectsSection;
