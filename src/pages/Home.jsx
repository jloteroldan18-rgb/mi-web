import { motion } from "framer-motion";
import fondo from "../fondo.jpg";

export default function Home() {
  return (
    <div
      className="hero"
      style={{
        backgroundImage: `url(${fondo})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1>Mobiliario Arquitectónico Premium</h1>

        <section>
  <h2 className="fade-up">Diseñamos espacios modernos</h2>
  <p className="fade-up">
     Medellín • Rionegro • La Ceja • La Unión • Oriente y Occidente Antioqueño
  </p>
</section>

      
       <div className="botones">
  <a href="/contacto">
    <button>Solicitar Cotizaciòn</button>
  </a>

  <a
    href="https://wa.me/573001234567"
    target="_blank"
  >
    <button>Hablar por WhatsApp</button>
  </a>

import { useEffect } from "react";

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
  reveal(); // se ejecuta al cargar

  return () => window.removeEventListener("scroll", reveal);
}, []);

</div>

      </motion.div>
    </div>
  );
}