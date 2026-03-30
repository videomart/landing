import { motion } from "motion/react";
import { Play, Instagram, Linkedin, Facebook, Youtube, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-bg-deep text-white pt-32 pb-12 overflow-hidden relative border-t border-white/5">
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-1/2 bg-brand/5 blur-[150px] -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-24 mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <div className="flex items-center gap-3 mb-8 group cursor-pointer">
              <div className="w-12 h-12 bg-brand rounded-xl flex items-center justify-center shadow-lg shadow-brand/20 group-hover:shadow-neon-blue/40 transition-all duration-500">
                <Play className="text-white w-6 h-6 fill-current group-hover:text-neon-blue transition-colors" />
              </div>
              <span className="text-3xl font-display font-bold tracking-tight group-hover:text-neon-blue transition-colors">
                VIDEOMART
              </span>
            </div>
            <p className="text-lg text-slate-500 leading-relaxed mb-10 max-w-md">
              Sua operação sem pausas. Tecnologia de ponta para o audiovisual broadcast que redefine os limites do possível.
            </p>

            <div className="flex gap-4">
              {[Instagram, Linkedin, Facebook, Youtube].map((Icon, i) => (
                <motion.a
                  key={i}
                  href="#"
                  whileHover={{ y: -5, scale: 1.1, borderColor: "rgba(0, 242, 255, 0.4)", color: "#00f2ff" }}
                  className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center hover:bg-white/10 transition-all border border-white/10 text-slate-400"
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="grid sm:grid-cols-2 gap-12"
          >
            <div>
              <h4 className="text-xs font-mono font-bold mb-8 uppercase tracking-[0.3em] text-neon-blue">Links Rápidos</h4>
              <ul className="space-y-4">
                {["Exibidores", "Utilitários", "Vídeo Produção", "Especiais", "Projetos"].map((link) => (
                  <li key={link}>
                    <a href="#" className="text-slate-500 hover:text-neon-blue transition-colors flex items-center gap-3 group text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-neon-blue/20 group-hover:bg-neon-blue transition-all" />
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-mono font-bold mb-8 uppercase tracking-[0.3em] text-neon-blue">Contato</h4>
              <ul className="space-y-6">
                <li className="flex items-start gap-4 group">
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center flex-shrink-0 border border-white/10 group-hover:border-neon-blue/30 transition-colors">
                    <Phone className="w-4 h-4 text-slate-400 group-hover:text-neon-blue transition-colors" />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono uppercase tracking-widest text-slate-600 mb-1">Telefone</div>
                    <div className="text-sm font-medium text-slate-300 group-hover:text-white transition-colors">+55 (11) 3256-5600</div>
                  </div>
                </li>
                <li className="flex items-start gap-4 group">
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center flex-shrink-0 border border-white/10 group-hover:border-neon-blue/30 transition-colors">
                    <Mail className="w-4 h-4 text-slate-400 group-hover:text-neon-blue transition-colors" />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono uppercase tracking-widest text-slate-600 mb-1">E-mail</div>
                    <div className="text-sm font-medium text-slate-300 group-hover:text-white transition-colors">contato@videomart.com.br</div>
                  </div>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-slate-600 text-[10px] font-mono uppercase tracking-[0.2em]">
          <div>© 2026 Videomart Broadcast Solutions.</div>
          <div className="flex gap-8">
            <a href="#" className="hover:text-neon-blue transition-colors">Privacidade</a>
            <a href="#" className="hover:text-neon-blue transition-colors">Termos</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
