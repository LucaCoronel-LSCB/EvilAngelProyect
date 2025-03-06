import { useState } from "react"
import { Phone, Clock, Truck, MapPin, Instagram } from "lucide-react"

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const { name, email, phone, message } = formData

    // Número de WhatsApp donde se enviará el mensaje
    const phoneNumber = "3516655470"

    // Construcción del mensaje
    const whatsappMessage = `Hola, me llamo ${name} . Mi Email es : ${email} . Mi numero de teléfono es : ${phone || "No especificado"}.%0A --> ${message}`

    // Enlace de WhatsApp
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${whatsappMessage}`

    // Redirigir a WhatsApp
    window.open(whatsappURL, "_blank")
  }

  return (
    <div className="contact-container">
      <h1>Contáctanos</h1>
      <div className="contact-info">
        <a href="https://wa.me/3516655470" className="contact-item">
          <Phone className="icon" />
          <span>3516655470</span>
        </a>
        <div className="contact-item">
          <Clock className="icon" />
          <span>Atención 24hs</span>
        </div>
        <div className="contact-item">
          <Truck className="icon" />
          <span>Envíos en Alta Gracia en el día</span>
        </div>
        <div className="contact-item">
          <MapPin className="icon" />
          <span>Retiro en Alta Gracia</span>
        </div>
        <a href="https://www.instagram.com/Evil_Angel.ok" className="contact-item">
          <Instagram className="icon" />
          <span>@Evil_Angel.ok</span>
        </a>
      </div>

      <form onSubmit={handleSubmit} className="contact-form">
        <h2>Formulario de Contacto</h2>
        <input
          type="text"
          name="name"
          placeholder="Nombre"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="tel"
          name="phone"
          placeholder="Teléfono"
          value={formData.phone}
          onChange={handleChange}
        />
        <textarea
          name="message"
          placeholder="Mensaje"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
        <button type="submit">Enviar por WhatsApp</button>
      </form>

      <style jsx>{`
        .contact-container {
          max-width: 800px;
          margin: 0 auto;
          height: 720px;
          padding: 4rem;
          background-color: #111;
          color: #ffffff;
          font-family: 'Arial', sans-serif;
        }

        h1 {
          text-align: center;
          color: #733E85;
          margin-bottom: 2rem;
          font-size: 40px;
        }

        .contact-info {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 1rem;
          margin-bottom: 2rem;
          padding:20px 0px 10px 0px;
        }

        .contact-item {
          display: flex;
          align-items: center;
          color: #ffffff;
          text-decoration: none;
          transition: color 0.3s ease;
        }

        .contact-item:hover {
          color: #042143;
        }

        .icon {
          margin-right: 0.5rem;
        }

        .contact-form {
          background-color:#042143;
          padding: 2rem;
          border-radius: 8px;
        }

        h2 {
          color: #2475AC;
          margin-bottom: 1rem;
          font-size: 30px
        }

        input, textarea {
          width: 100%;
          padding: 0.5rem;
          margin-bottom: 1rem;
          background-color: #333;
          border: 1px solid #444;
          color: #fff;
          border-radius: 4px;
        }

        textarea {
          height: 150px;
        }

        button {
          width: 100%;
          padding: 0.75rem;
          background-color: #E977F5;
          color: #fff;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }

        button:hover {
          background-color: #ff8c8c;
        }

        @media (max-width: 600px) {
          .contact-info {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  )
}

export default Contact
