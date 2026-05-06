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

        <p>
          Diseñamos espacios modernos</p>

          <p>
          Medellín • Rionegro • La Ceja • La Unión • Oriente y Occidente Antioqueño</p>

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

</div>

      </motion.div>
    </div>
  );
}