import { motion } from "motion/react";
import { Menu, X, Play, Monitor, Settings, Info, Phone } from "lucide-react";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Exibidores", href: "#products", icon: Monitor },
    { name: "Utilitários", href: "#utilities", icon: Settings },
    { name: "Produção", href: "#production", icon: Play },
    { name: "Sobre", href: "#about", icon: Info },
    { name: "Contato", href: "#contact", icon: Phone },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? "py-4" : "py-8"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className={`flex items-center justify-between px-8 py-4 rounded-2xl transition-all duration-500 ${
          isScrolled ? "glass-panel shadow-2xl shadow-neon-blue/5 border-white/10" : "bg-transparent border-transparent"
        }`}>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3 group cursor-pointer"
          >
            <div className="w-10 h-10 bg-brand rounded-xl flex items-center justify-center shadow-lg shadow-brand/20 group-hover:shadow-neon-blue/40 transition-all duration-500">
              <Play className="text-white w-5 h-5 fill-current group-hover:text-neon-blue transition-colors" />
            </div>
            <span className="text-xl font-display font-bold tracking-tight text-white group-hover:text-neon-blue transition-colors">
              VIDEOMART
            </span>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-[13px] font-mono font-medium uppercase tracking-widest text-slate-400 hover:text-neon-blue transition-all duration-300 relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-neon-blue transition-all duration-300 group-hover:w-full" />
              </motion.a>
            ))}
            <motion.button
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(0, 242, 255, 0.3)" }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white/5 text-white px-6 py-2.5 rounded-xl text-xs font-bold uppercase tracking-widest hover:bg-white/10 transition-all border border-white/10"
            >
              Consultoria
            </motion.button>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-white hover:text-neon-blue transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden glass-dark border-t border-white/10 mt-3 overflow-hidden bg-bg-deep/95 backdrop-blur-xl"
        >
          <div className="px-6 py-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="flex items-center gap-3 text-lg font-medium text-slate-300 hover:text-neon-blue transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <link.icon className="w-5 h-5 text-brand" />
                {link.name}
              </a>
            ))}
            <button 
              onClick={() => {
                setIsMobileMenuOpen(false);
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="w-full bg-brand text-white py-4 rounded-xl font-bold mt-4 shadow-lg shadow-brand/20"
            >
              Falar com Especialista
            </button>
          </div>
        </motion.div>
      )}
    </nav>
  );
}
