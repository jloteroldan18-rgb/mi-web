import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Proyectos from "./pages/Proyectos";
import Contacto from "./pages/Contacto";
import logo from "./logo.png";

export default function App() {
  return (
    <>
      <header className="navbar">
        <img src={logo} className="logo" />

        <nav>
          <Link to="/">Inicio</Link>
          <Link to="/proyectos">Proyectos</Link>
          <Link to="/Contacto"><button>Contáctanos</button>
</Link>
        </nav>
      </header>

      <h1>Cocinas y Mobiliario Arquitectónico en Medellín</h1>

<p>
Diseñamos y fabricamos cocinas integrales, closets y vestieres modernos en Medellín y Oriente Antioqueño.
Calidad premium, diseño a medida y entrega profesional.
</p>

<h2>Diseño de muebles a medida en Medellín y Antioquia</h2>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/proyectos" element={<Proyectos />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>

      <a
  href="https://wa.me/573001234567?text=Hola%20quiero%20información"
  className="whatsapp-float"
  target="_blank"
>
  💬
</a>
    </>
  );
}