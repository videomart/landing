import { motion } from "motion/react";
import { Monitor, Zap, Shield, Layers, Cpu, CheckCircle2, ArrowUpRight, ArrowRight } from "lucide-react";

const products = [
  {
    name: "TVPLAY-SE",
    description: "Solução robusta para canais web e pequenas emissoras que buscam custo-benefício sem abrir mão da estabilidade.",
    icon: Monitor,
    features: ["Exibição SD/HD Nativa", "Playlist Dinâmica", "CG Básico Integrado", "Suporte Remoto 24/7"],
    tag: "Entry Level",
  },
  {
    name: "TVPLAY-SE+",
    description: "A evolução do SE com recursos avançados de automação e integração com redes sociais para maior engajamento.",
    icon: Zap,
    features: ["Exibição HD 60fps", "Automação via VDCP", "Social Media Sync", "Relatórios de Exibição"],
    tag: "Advanced",
  },
  {
    name: "TVPLAY-PRO",
    description: "O padrão da indústria. Alta performance para emissoras regionais e nacionais com fluxos de trabalho intensos.",
    icon: Shield,
    features: ["Exibição 4K / UHD", "Redundância Ativa (1+1)", "Múltiplos Canais I/O", "Integração com MAM"],
    tag: "Professional",
    popular: true,
  },
  {
    name: "TVPLAY-MASTER",
    description: "Potência máxima e escalabilidade para grandes redes de televisão e complexos de mídia de alto nível.",
    icon: Layers,
    features: ["Exibição 8K Nativa", "Gerenciamento Cloud Hybrid", "Workflow IP/NDI Total", "Customização via API"],
    tag: "Enterprise",
  },
  {
    name: "TVPLAY-4",
    description: "A nova fronteira. Exibição broadcast inteligente baseada em IA para otimização de workflow e metadados.",
    icon: Cpu,
    features: ["IA para Metadados", "Auto-Clip Generation", "Workflow NDI 6.0", "Cloud Playout Ready"],
    tag: "Next Gen",
  },
];

export default function Products() {
  return (
    <section id="products" className="py-32 bg-bg-deep relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-neon-blue font-mono text-xs tracking-[0.3em] uppercase mb-4"
            >
              Nossas Soluções
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-5xl lg:text-7xl font-display font-bold text-white"
            >
              Ecossistema <br />
              <span className="text-gradient-blue">TVPLAY</span>
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-slate-400 text-lg max-w-sm"
          >
            Soluções escaláveis que acompanham o crescimento da sua emissora, do SD ao 8K.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, i) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className={`bento-card p-8 group ${
                product.popular ? "border-neon-blue/30 bg-neon-blue/[0.03]" : ""
              }`}
            >
              <div className="flex justify-between items-start mb-8">
                <div className={`p-4 rounded-2xl ${
                  product.popular ? "bg-neon-blue/10 text-neon-blue" : "bg-white/5 text-slate-400"
                }`}>
                  <product.icon className="w-6 h-6" />
                </div>
                <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-slate-500 bg-white/5 px-3 py-1 rounded-full">
                  {product.tag}
                </span>
              </div>

              <h3 className="text-2xl font-display font-bold text-white mb-3 group-hover:text-neon-blue transition-colors">
                {product.name}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-8">
                {product.description}
              </p>

              <div className="space-y-3 mb-10">
                {product.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-3 text-xs text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-neon-blue/50" />
                    {feature}
                  </div>
                ))}
              </div>

              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className={`w-full py-4 rounded-xl font-bold text-sm transition-all flex items-center justify-center gap-2 ${
                product.popular 
                  ? "bg-neon-blue text-bg-deep hover:bg-white" 
                  : "bg-white/5 text-white hover:bg-white/10 border border-white/10"
              }`}>
                Solicitar Orçamento <ArrowUpRight className="w-4 h-4" />
              </button>
            </motion.div>
          ))}
          
          {/* Custom Project Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="bento-card p-8 bg-brand/10 border-brand/30 flex flex-col justify-center items-center text-center group"
          >
            <div className="w-16 h-16 rounded-full bg-brand/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Layers className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-display font-bold text-white mb-4">Projetos Especiais</h3>
            <p className="text-slate-400 text-sm mb-8">
              Desenvolvemos soluções personalizadas para workflows complexos e grandes infraestruturas.
            </p>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-white font-bold flex items-center gap-2 hover:text-neon-blue transition-colors"
            >
              Consultar Engenharia <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
