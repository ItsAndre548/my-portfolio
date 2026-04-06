import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import { Gamepad2, Music, Dumbbell, Code2, Film, Coffee } from "lucide-react";

const hobbies = [
  { icon: <Code2 size={28} />, label: "Programação", desc: "Explorar novas tecnologias e contribuir com open source" },
  { icon: <Gamepad2 size={28} />, label: "Games", desc: "RPGs, FPS e jogos indie nos tempos livres" },
  { icon: <Music size={28} />, label: "Música", desc: "Ouvir e descobrir novos artistas e gêneros" },
  { icon: <Dumbbell size={28} />, label: "Treino", desc: "Manter o corpo e a mente em equilíbrio" },
  { icon: <Film size={28} />, label: "Filmes & Séries", desc: "Sci-fi, thriller e documentários" },
  { icon: <Coffee size={28} />, label: "Café", desc: "Combustível essencial para codar" },
];

const HobbiesSection = () => (
  <AnimatedSection className="py-24 md:py-32 relative">
    <div id="hobbies" className="absolute -top-20" />
    <div className="container mx-auto px-6">
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
        Meus <span className="text-gradient">hobbies</span>
      </h2>
      <p className="text-muted-foreground text-center mb-16 max-w-lg mx-auto">
        Além do código, algumas coisas que fazem parte da minha vida.
      </p>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
        {hobbies.map((h, i) => (
          <motion.div
            key={h.label}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            whileHover={{ scale: 1.05 }}
            className="rounded-xl p-6 bg-card border border-border/50 hover:border-primary/20 transition-all duration-300 text-center group cursor-default"
          >
            <div className="inline-flex p-3 rounded-lg bg-primary/10 text-primary mb-3 group-hover:bg-primary/20 transition-colors">
              {h.icon}
            </div>
            <h3 className="font-semibold text-sm mb-1 text-foreground">{h.label}</h3>
            <p className="text-xs text-muted-foreground">{h.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </AnimatedSection>
);

export default HobbiesSection;
