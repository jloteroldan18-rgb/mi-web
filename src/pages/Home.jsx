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

<section style="padding:60px 20px; background:#f9f9f9; text-align:center;">
  <h2 style="font-size:28px; margin-bottom:15px;">
    Muebles a medida en Medellín y Antioquia
  </h2>

  <p style="max-width:700px; margin:auto; color:#666; line-height:1.6;">
    Diseñamos cocinas integrales, closets y vestieres en Medellín, Envigado, 
    Sabaneta, Itagüí, Bello y el Oriente Antioqueño como Rionegro, La Ceja, 
    Marinilla y El Retiro.
  </p>
</section>

<section style="padding:80px 20px; text-align:center;">
  <h2 style="font-size:32px; font-weight:600;">
    Diseños que transforman espacios
  </h2>

  <p style="color:#888; max-width:600px; margin:20px auto;">
    Cocinas, closets y vestieres en Medellín y todo Antioquia.
  </p>
</section>

<section style="padding:60px 20px;">
  <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(250px,1fr)); gap:20px;">
    
    <div>
      <h3>Cocinas en Medellín</h3>
      <p>Diseños modernos y funcionales a medida.</p>
    </div>

    <div>
      <h3>Closets en Antioquia</h3>
      <p>Optimización de espacios con acabados premium.</p>
    </div>

    <div>
      <h3>Vestieres personalizados</h3>
      <p>Diseño exclusivo en Medellín y alrededores.</p>
    </div>

  </div>
</section>

  <p style="font-size:13px; color:#999; text-align:center; margin-top:40px;">
Servicio en Medellín, Envigado, Sabaneta, Rionegro, La Ceja, Marinilla y Antioquia.
</p>

<section style={{padding:"60px 20px", textAlign:"center"}}>
  <h2>Estamos en Medellín</h2>

  <iframe
    src="https://www.google.com/maps?q=Medellin&output=embed"
    width="100%"
    height="300"
    style={{border:0, borderRadius:"12px", marginTop:"20px"}}
    loading="lazy"
  ></iframe>
</section>

</div>

      </motion.div>
    </div>
  );
}