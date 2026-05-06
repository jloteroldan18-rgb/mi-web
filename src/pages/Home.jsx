import { motion } from "framer-motion";
import { useEffect } from "react";
import videoFondo from "../video.mp4"; // 👈 tu video

export default function Home() {

  useEffect(() => {
    const elements = document.querySelectorAll(".fade-up");

    const reveal = () => {
      elements.forEach(el => {
        const top = el.getBoundingClientRect().top;

        if (top < window.innerHeight - 100) {
          el.classList.add("show");
        }
      });
    };

    window.addEventListener("scroll", reveal);
    reveal();

    return () => window.removeEventListener("scroll", reveal);
  }, []);

  return (
    <div className="hero">

      {/* 🎬 VIDEO DE FONDO */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="video-bg"
      >
        <source src={videoFondo} type="video/mp4" />
      </video>

      {/* 🌑 OVERLAY OSCURO */}
      <div className="overlay"></div>

      {/* 🎯 CONTENIDO */}
      <motion.div
        className="contenido"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="fade-up">Mobiliario Arquitectónico Premium</h1>

        <p className="fade-up">
          Diseñamos espacios modernos
        </p>

        <p className="fade-up">
          Medellín • Rionegro • La Ceja • La Unión • Oriente y Occidente Antioqueño
        </p>

        <div className="botones fade-up">
          <a href="/contacto">
            <button>Solicitar Cotización</button>
          </a>

          <a
            href="https://wa.me/573001234567"
            target="_blank"
          >
            <button>Hablar por WhatsApp</button>
          </a>
        </div>
      </motion.div>

    </div>
  );
}