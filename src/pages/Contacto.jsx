import { useState } from "react";

export default function Contacto() {
  const [enviado, setEnviado] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const nombre = e.target.nombre.value;
    const correo = e.target.correo.value;
    const telefono = e.target.telefono.value;
    const mensaje = e.target.mensaje.value;

    if (!nombre || !correo || !telefono || !mensaje) {
      alert("Por favor completa todos los campos");
      return;
    }

    const texto = `Hola, quiero cotizar:%0A
Nombre: ${nombre}%0A
Correo: ${correo}%0A
Tel: ${telefono}%0A
Mensaje: ${mensaje}`;

    window.open(
      `https://wa.me/573176785597?text=${texto}`,
      "_blank"
    );

    setEnviado(true);
    setTimeout(() => setEnviado(false), 3000);
  };

  return (
    <div className="contacto-page">
      <h1>Contáctanos</h1>

      <form className="formulario" onSubmit={handleSubmit}>
        <input name="nombre" type="text" placeholder="Nombre" />
        <input name="correo" type="email" placeholder="Correo" />
        <input name="telefono" type="tel" placeholder="Teléfono" />

        <textarea name="mensaje" placeholder="Mensaje" />

        <button type="submit">Enviar por WhatsApp</button>
      </form>

      {enviado && (
        <p className="success">Mensaje listo para enviar 🚀</p>
      )}
    </div>
  );
}