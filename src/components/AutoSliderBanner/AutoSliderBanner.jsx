import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const images = [
  "https://64.media.tumblr.com/db8472cfbb89a155148003b053d5f3de/4d6d987e0cee7307-8e/s400x225/158142e8e876044a6191733a02f6ee5ac1643b58.gif",
  "https://i.pinimg.com/originals/14/f4/35/14f435eaaf8d107cca5055ce150eaf47.gif",
];

export function AutoSliderBanner() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate(); // ✅ Ahora está dentro del componente

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Cambia la imagen cada 5 segundos

    return () => clearInterval(interval);
  }, []);

  const volver = () => {
    navigate("/catalogo"); // ✅ Ahora funciona correctamente
  };

  return (
    <div style={styles.banner}>
      {images.map((src, index) => (
        <div
          key={index}
          style={{
            ...styles.imageContainer,
            opacity: index === currentIndex ? 1 : 0,
          }}
        >
          <img src={src} alt={`Background ${index}`} style={styles.image} />
        </div>
      ))}

      {/* Contenido centrado */}
      <div style={styles.content}>
        <button style={styles.button} onClick={volver}>SHOP</button>
        <p style={styles.text}>Bienvenido a la nueva generación</p>
      </div>
    </div>
  );
}

// ✅ Estilos en JavaScript
const styles = {
  banner: {
    position: "relative",
    width: "100vw",
    height: "100vh",
    overflow: "hidden",
  },
  imageContainer: {
    position: "absolute",
    width: "100%",
    height: "100%",
    transition: "opacity 1s ease-in-out",
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  content: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
  },
  button: {
    padding: "12px 24px",
    fontSize: "18px",
    fontWeight: "bold",
    color: "#fff",
    backgroundColor: "transparent",
    border: "2px solid white",
    borderRadius: "8px",
    cursor: "pointer",
    transition: "0.3s",
  },
  text: {
    marginTop: "16px",
    fontSize: "20px",
    color: "#fff",
    fontWeight: "lighter",
  },
};

export default AutoSliderBanner;
