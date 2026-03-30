import { motion } from "motion/react";
import { 
  Shield, 
  Zap, 
  Cpu, 
  Globe, 
  Clock, 
  Layers, 
  CheckCircle2, 
  Play, 
  Activity, 
  Server, 
  Monitor,
  Database,
  Share2,
  Settings
} from "lucide-react";

const capabilities = [
  {
    title: "Operação Crítica 24/7",
    description: "Desenvolvido para estabilidade absoluta. O TVPLAY é a escolha de emissoras que exigem 100% de uptime.",
    icon: Shield,
    details: ["Redundância Ativa", "Auto-Recovery", "Watchdog Hardware"]
  },
  {
    title: "Multi-Formato Nativo",
    description: "Reproduza qualquer codec sem necessidade de transcodificação prévia. Agilidade total no workflow.",
    icon: Layers,
    details: ["ProRes / DNxHD", "H.264 / H.265", "XDCAM / MXF"]
  },
  {
    title: "Conectividade IP & NDI",
    description: "Pronto para o futuro do broadcast. Suporte total a fluxos IP, NDI e SDI tradicional simultaneamente.",
    icon: Globe,
    details: ["NDI 6.0 Support", "SRT Streaming", "SDI 12G / 4K"]
  },
  {
    title: "CG & Gráficos Dinâmicos",
    description: "Sobreposição de caracteres e gráficos em tempo real com integração a bases de dados e redes sociais.",
    icon: Zap,
    details: ["HTML5 Graphics", "Social Media Integration", "Dynamic Data Feed"]
  }
];

const techSpecs = [
  { label: "Resoluções", value: "SD, HD, 4K, 8K" },
  { label: "Plataforma", value: "Windows 10/11 Pro (Optimized)" },
  { label: "I/O Hardware", value: "Blackmagic, AJA, Bluefish444" },
  { label: "Protocolos IP", value: "NDI, SRT, UDP, RTMP, HLS" },
  { label: "Automação", value: "VDCP, Sony BVW, REST API" },
  { label: "Storage", value: "Local, NAS, SAN, Cloud" }
];

export default function TVPlayDeepDive() {
  return (
    <section id="utilities" className="bg-bg-deep py-32 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-neon-blue/20 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-neon-blue font-mono text-xs tracking-[0.4em] uppercase mb-6"
          >
            Deep Dive
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl lg:text-7xl font-display font-bold text-white mb-8"
          >
            Poder e <span className="text-gradient-blue">Flexibilidade</span> <br />
            Sem Compromissos.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-slate-400 text-xl max-w-3xl mx-auto leading-relaxed"
          >
            O TVPLAY não é apenas um exibidor; é uma plataforma completa de automação broadcast 
            que se adapta ao seu workflow, seja ele tradicional SDI ou puramente IP.
          </motion.p>
        </div>

        {/* Capabilities Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-32">
          {capabilities.map((cap, i) => (
            <motion.div
              key={cap.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bento-card p-10 group hover:border-neon-blue/40 transition-all duration-500"
            >
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center flex-shrink-0 group-hover:bg-neon-blue/10 group-hover:text-neon-blue transition-all duration-500">
                  <cap.icon className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-2xl font-display font-bold text-white mb-4 group-hover:text-neon-blue transition-colors">
                    {cap.title}
                  </h3>
                  <p className="text-slate-400 mb-8 leading-relaxed">
                    {cap.description}
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {cap.details.map((detail) => (
                      <span key={detail} className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-500 bg-white/5 px-3 py-1.5 rounded-lg border border-white/5">
                        {detail}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Technical Specs Bento */}
        <div className="grid lg:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="lg:col-span-2 bento-card p-12 relative overflow-hidden group"
          >
            <div className="relative z-10">
              <h3 className="text-3xl font-display font-bold text-white mb-10">Especificações Técnicas</h3>
              <div className="grid sm:grid-cols-2 gap-x-12 gap-y-8">
                {techSpecs.map((spec) => (
                  <div key={spec.label} className="border-b border-white/5 pb-4 group/spec">
                    <div className="text-xs font-mono text-neon-blue/60 uppercase tracking-widest mb-1 group-hover/spec:text-neon-blue transition-colors">
                      {spec.label}
                    </div>
                    <div className="text-lg font-medium text-slate-200">
                      {spec.value}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* Background decoration */}
            <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-brand/5 rounded-full blur-[100px] group-hover:bg-brand/10 transition-all duration-700" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="bento-card p-12 bg-neon-blue/[0.02] border-neon-blue/20 flex flex-col justify-between"
          >
            <div>
              <Activity className="w-12 h-12 text-neon-blue mb-8" />
              <h3 className="text-3xl font-display font-bold text-white mb-6">Pronto para a Ação</h3>
              <p className="text-slate-400 leading-relaxed mb-8">
                Nossa engenharia trabalha para que você foque no conteúdo. 
                O TVPLAY gerencia a complexidade técnica com uma interface intuitiva e poderosa.
              </p>
            </div>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="w-full py-5 bg-neon-blue text-bg-deep rounded-2xl font-bold hover:bg-white transition-all shadow-lg shadow-neon-blue/20"
            >
              Agendar Demo Técnica
            </button>
          </motion.div>
        </div>

        {/* Workflow Section */}
        <div className="mt-32 text-center">
          <div className="inline-block p-1 rounded-full bg-white/5 border border-white/10 mb-12">
            <div className="flex items-center gap-8 px-8 py-3">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest">Ingest</span>
              </div>
              <div className="w-px h-4 bg-white/10" />
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-neon-blue animate-pulse" />
                <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest">Playout</span>
              </div>
              <div className="w-px h-4 bg-white/10" />
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-brand animate-pulse" />
                <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest">Broadcast</span>
              </div>
            </div>
          </div>
          <h4 className="text-slate-500 font-mono text-xs uppercase tracking-[0.5em]">End-to-End Workflow</h4>
        </div>
      </div>
    </section>
  );
}
