import React, { useState } from "react";
import { motion } from "motion/react";
import { Mail, Phone, MapPin, Send, MessageSquare, User, Building2 } from "lucide-react";

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would send this to an API
    console.log("Form submitted:", formState);
    alert("Mensagem enviada com sucesso! Nossa equipe entrará em contato em breve.");
    setFormState({ name: "", email: "", company: "", message: "" });
  };

  return (
    <section id="contact" className="py-32 bg-bg-deep relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand/5 rounded-full blur-[150px] -z-10" />
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-neon-blue font-mono text-xs tracking-[0.4em] uppercase mb-6">
              Contato Direto
            </div>
            <h2 className="text-5xl lg:text-7xl font-display font-bold text-white leading-[1.1] mb-8">
              Vamos Iniciar <br />
              <span className="text-gradient-blue">Seu Projeto?</span>
            </h2>
            <p className="text-xl text-slate-400 leading-relaxed mb-12 max-w-lg">
              Nossa engenharia está pronta para desenhar a solução ideal para sua emissora. 
              Preencha o formulário ou utilize nossos canais diretos.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-neon-blue/30 transition-all duration-500">
                  <Phone className="w-6 h-6 text-slate-400 group-hover:text-neon-blue transition-colors" />
                </div>
                <div>
                  <div className="text-xs font-mono uppercase tracking-widest text-slate-500 mb-1">Telefone</div>
                  <div className="text-xl font-medium text-white">+55 (11) 3256-5600</div>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-neon-blue/30 transition-all duration-500">
                  <Mail className="w-6 h-6 text-slate-400 group-hover:text-neon-blue transition-colors" />
                </div>
                <div>
                  <div className="text-xs font-mono uppercase tracking-widest text-slate-500 mb-1">E-mail</div>
                  <div className="text-xl font-medium text-white">contato@videomart.com.br</div>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-neon-blue/30 transition-all duration-500">
                  <MapPin className="w-6 h-6 text-slate-400 group-hover:text-neon-blue transition-colors" />
                </div>
                <div>
                  <div className="text-xs font-mono uppercase tracking-widest text-slate-500 mb-1">Localização</div>
                  <div className="text-xl font-medium text-white">São Paulo, SP - Brasil</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bento-card p-10 lg:p-12"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-mono uppercase tracking-widest text-slate-500 ml-1">Nome Completo</label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                    <input
                      type="text"
                      required
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      className="w-full bg-white/5 border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white focus:outline-none focus:border-neon-blue/50 transition-all"
                      placeholder="Seu nome"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-mono uppercase tracking-widest text-slate-500 ml-1">E-mail Corporativo</label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                    <input
                      type="email"
                      required
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      className="w-full bg-white/5 border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white focus:outline-none focus:border-neon-blue/50 transition-all"
                      placeholder="exemplo@empresa.com"
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-mono uppercase tracking-widest text-slate-500 ml-1">Empresa / Emissora</label>
                <div className="relative">
                  <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                  <input
                    type="text"
                    required
                    value={formState.company}
                    onChange={(e) => setFormState({ ...formState, company: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white focus:outline-none focus:border-neon-blue/50 transition-all"
                    placeholder="Nome da sua empresa"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-mono uppercase tracking-widest text-slate-500 ml-1">Mensagem</label>
                <div className="relative">
                  <MessageSquare className="absolute left-4 top-6 w-4 h-4 text-slate-500" />
                  <textarea
                    required
                    rows={4}
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white focus:outline-none focus:border-neon-blue/50 transition-all resize-none"
                    placeholder="Como podemos ajudar sua operação?"
                  />
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.02, boxShadow: "0 0 20px rgba(0, 242, 255, 0.3)" }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full bg-neon-blue text-bg-deep py-5 rounded-xl font-bold flex items-center justify-center gap-3 transition-all"
              >
                Enviar Mensagem <Send className="w-4 h-4" />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
