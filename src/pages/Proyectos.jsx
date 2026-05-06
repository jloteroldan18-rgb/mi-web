const proyectos = [
  { id: 1, tipo: "cocinas", img: fondo },
  { id: 2, tipo: "closets", img: fondo },
  { id: 3, tipo: "muebles", img: fondo },
  { id: 4, tipo: "cocinas", img: fondo },
  { id: 5, tipo: "cocinas", img: fondo },
  { id: 6, tipo: "cocinas", img: fondo },
  { id: 7, tipo: "cocinas", img: fondo },
  { id: 8, tipo: "cocinas", img: fondo },
  { id: 9, tipo: "cocinas", img: fondo },
  { id: 10, tipo: "cocinas", img: fondo },
];

import { useState } from "react";
import { motion } from "framer-motion";
import fondo from "../fondo.jpg";

export default function Proyectos() {
  const [imagenActiva, setImagenActiva] = useState(null);

  return (
    <motion.div
      className="proyectos-page"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h1>Proyectos Realizados</h1>

      <div className="galeria">
        {[fondo, fondo, fondo, fondo, fondo, fondo, fondo, fondo, fondo, fondo].map((img, i) => (
          <img
            key={i}
            src={img}
            onClick={() => setImagenActiva(img)}
          />
        ))}
      </div>

      {imagenActiva && (
        <div className="modal" onClick={() => setImagenActiva(null)}>
          <img src={imagenActiva} />
        </div>
      )}
    </motion.div>
  );
}