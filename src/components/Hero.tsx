import { motion } from "motion/react";
import { Play, ArrowRight, Shield, Zap, Globe, Cpu } from "lucide-react";

export default function Hero() {
  return (
    <section id="production" className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden bg-bg-deep">
      {/* Futuristic Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand/20 rounded-full blur-[150px] opacity-30" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-neon-blue/10 rounded-full blur-[120px] opacity-20" />
        
        {/* Subtle Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-3 bg-white/5 border border-white/10 px-4 py-2 rounded-full mb-8 backdrop-blur-md"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neon-blue opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-neon-blue"></span>
            </span>
            <span className="text-xs font-mono font-medium tracking-[0.2em] text-neon-blue uppercase">
              TVPLAY 2026 • Live Now
            </span>
          </motion.div>

          <h1 className="text-6xl lg:text-8xl font-display font-bold leading-[0.95] mb-8">
            O Futuro da <br />
            <span className="text-gradient-blue neon-text-glow">Exibição TV</span>
          </h1>

          <p className="text-xl text-slate-400 leading-relaxed mb-12 max-w-xl">
            Sistemas broadcast de alta performance com latência zero. 
            A Videomart redefine a estabilidade para emissoras que não podem parar.
          </p>

          <div className="flex flex-wrap gap-5">
            <motion.button
              whileHover={{ scale: 1.02, boxShadow: "0 0 25px rgba(0, 242, 255, 0.3)" }}
              whileTap={{ scale: 0.98 }}
              onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-brand text-white px-10 py-5 rounded-2xl font-bold text-lg flex items-center gap-3 transition-all border border-white/10"
            >
              Explorar Soluções <ArrowRight className="w-5 h-5" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.02, backgroundColor: "rgba(255,255,255,0.05)" }}
              whileTap={{ scale: 0.98 }}
              className="bg-transparent text-white border border-white/10 px-10 py-5 rounded-2xl font-bold text-lg flex items-center gap-3 backdrop-blur-sm"
            >
              <Play className="w-5 h-5 fill-white" /> Demo Online
            </motion.button>
          </div>

          <div className="mt-20 flex items-center gap-12">
            {[
              { label: "Instalações", value: "5k+" },
              { label: "Anos", value: "37+" },
              { label: "Suporte", value: "24/7" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-3xl font-display font-bold text-white mb-1">{stat.value}</div>
                <div className="text-xs font-mono text-slate-500 uppercase tracking-widest">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative"
        >
          {/* Main Visual Frame */}
          <div className="relative z-10 bento-card p-2">
            <div className="rounded-[1.8rem] overflow-hidden relative">
              <img
                src="https://picsum.photos/seed/videomart-hero/1200/1400"
                alt="Broadcast Interface"
                className="w-full h-auto opacity-80 grayscale hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bg-deep via-transparent to-transparent" />
              
              {/* Scanline */}
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="w-full h-1 bg-neon-blue/20 blur-sm animate-scan absolute top-0" />
              </div>
            </div>
          </div>

          {/* Floating Bento Elements */}
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-8 -right-8 glass-panel p-6 rounded-3xl z-20 border-neon-blue/20"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-emerald-500/10 rounded-2xl flex items-center justify-center border border-emerald-500/20">
                <Shield className="text-emerald-400 w-6 h-6" />
              </div>
              <div>
                <div className="text-sm font-bold text-white">Redundância</div>
                <div className="text-[10px] font-mono text-emerald-400/70 uppercase">High Availability</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute -bottom-8 -left-8 glass-panel p-6 rounded-3xl z-20 border-brand/20"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-brand/10 rounded-2xl flex items-center justify-center border border-brand/20">
                <Cpu className="text-brand-light w-6 h-6" />
              </div>
              <div>
                <div className="text-sm font-bold text-white">Processamento</div>
                <div className="text-[10px] font-mono text-brand-light/70 uppercase">Ultra Low Latency</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function Monitor(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="14" x="2" y="3" rx="2" />
      <line x1="8" x2="16" y1="21" y2="21" />
      <line x1="12" x2="12" y1="17" y2="21" />
    </svg>
  );
}
