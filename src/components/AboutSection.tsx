import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import andreImg from "@/assets/perfil.jpg";
import { Briefcase, GraduationCap } from "lucide-react";

const skills = [
  "React", "Preact", "TypeScript", "JavaScript", "Tailwind CSS",
  "VTEX", "DECO", "Node.js", "Git", "Shopify", "Python", "Java",
];

const AboutSection = () => (
  <AnimatedSection className="py-24 md:py-32 relative" >
    <div id="about" className="absolute -top-20" />
    <div className="container mx-auto px-6">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative mx-auto md:mx-0"
        >
          <div className="relative w-72 h-72 md:w-96 md:h-96">
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/30 to-transparent rotate-6 scale-105" />
            <img
              src={andreImg}
              alt="André Luiz Bastos Carneiro"
              width={512}
              height={640}
              className="relative w-full h-full object-cover rounded-2xl glow-border"
            />
          </div>
        </motion.div>

        {/* Content */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            Sobre <span className="text-gradient">mim</span>
          </h2>
          <p className="text-muted-foreground mb-8 leading-relaxed">
            Desenvolvedor Front-End com experiência sólida na criação e manutenção de interfaces para grandes e-commerces, combinando conhecimentos em Ciência da Computação. Especializado em performance, UX/UI e tecnologias modernas.
          </p>

          {/* Timeline */}
          <div className="space-y-6 mb-8">
            <TimelineItem
              icon={<Briefcase size={16} />}
              title="Desenvolvedor Front-End Jr"
              sub="Wicomm · Out/2025 – Atual"
            />
            <TimelineItem
              icon={<Briefcase size={16} />}
              title="Desenvolvedor Front-End"
              sub="TEC 3 · Jan/2024 – Fev/2025"
            />
            <TimelineItem
              icon={<GraduationCap size={16} />}
              title="Ciência da Computação"
              sub="Estácio de Sá · Conclusão Jun/2027"
            />
          </div>

          {/* Skills */}
          <div className="flex flex-wrap gap-2">
            {skills.map((s, i) => (
              <motion.span
                key={s}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="px-3 py-1.5 text-xs font-mono rounded-md bg-secondary text-primary border border-primary/10 hover:border-primary/30 transition-colors"
              >
                {s}
              </motion.span>
            ))}
          </div>
        </div>
      </div>
    </div>
  </AnimatedSection>
);

const TimelineItem = ({ icon, title, sub }: { icon: React.ReactNode; title: string; sub: string }) => (
  <div className="flex items-start gap-3">
    <div className="mt-1 p-2 rounded-lg bg-primary/10 text-primary">{icon}</div>
    <div>
      <p className="font-medium text-sm text-foreground">{title}</p>
      <p className="text-xs text-muted-foreground">{sub}</p>
    </div>
  </div>
);

export default AboutSection;
