import { motion } from "motion/react";
import { Shield, Zap, Globe, Clock, Users, Award } from "lucide-react";

const features = [
  {
    title: "Versatilidade",
    description: "Integração perfeita com as principais ferramentas do mercado e workflows IP/NDI.",
    icon: Zap,
  },
  {
    title: "Estabilidade",
    description: "Sistemas projetados para operação crítica 24/7 sem interrupções.",
    icon: Shield,
  },
  {
    title: "Confiabilidade",
    description: "Mais de 37 anos de experiência no mercado broadcast brasileiro.",
    icon: Award,
  },
  {
    title: "Suporte 24/7",
    description: "Equipe técnica especializada pronta para atender sua emissora a qualquer momento.",
    icon: Clock,
  },
  {
    title: "Escalabilidade",
    description: "Soluções que crescem junto com a sua produção, do SD ao 8K.",
    icon: Globe,
  },
  {
    title: "Treinamento",
    description: "Capacitação completa para sua equipe extrair o máximo do TVPLAY.",
    icon: Users,
  },
];

export default function Features() {
  return (
    <section id="about" className="py-32 bg-bg-deep relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-neon-blue font-mono text-xs tracking-[0.4em] uppercase mb-6">
              Nossa História
            </div>
            <h2 className="text-5xl lg:text-7xl font-display font-bold text-white leading-[1.1] mb-8">
              Tradição e <br />
              <span className="text-gradient-blue">Inovação</span> <br />
              Desde 1987.
            </h2>
            <p className="text-xl text-slate-400 leading-relaxed mb-12 max-w-lg">
              A Videomart nasceu com a missão de fornecer tecnologia de ponta para o audiovisual broadcast brasileiro. 
              Hoje, somos a espinha dorsal de milhares de emissoras.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, i) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="bento-card p-6 group"
                >
                  <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center mb-4 group-hover:bg-neon-blue/10 group-hover:text-neon-blue transition-all">
                    <feature.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-display font-bold text-white mb-2 group-hover:text-neon-blue transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="bento-card p-2">
              <div className="rounded-[2.5rem] overflow-hidden relative">
                <img
                  src="https://picsum.photos/seed/videomart-history/1200/1600"
                  alt="Videomart History"
                  className="w-full h-auto opacity-60 grayscale"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg-deep via-transparent to-transparent" />
                
                <div className="absolute bottom-12 left-12 right-12">
                  <div className="text-7xl font-display font-bold text-white mb-2 neon-text-glow">37+</div>
                  <div className="text-sm font-mono text-white/60 uppercase tracking-[0.3em]">Anos de Liderança</div>
                </div>
              </div>
            </div>

            {/* Decorative blurs */}
            <div className="absolute -top-20 -right-20 w-80 h-80 bg-brand/10 rounded-full blur-[100px] -z-10" />
            <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-neon-blue/5 rounded-full blur-[100px] -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
