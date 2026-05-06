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