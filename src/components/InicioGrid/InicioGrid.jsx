import img1 from "../../assets/logo.png";
import img2 from "../../assets/presentacion.jpg";
import img3 from "../../assets/imgMay.jpg";
export default function ResponsiveGrid() {
  return (
    <div className="container-inicio">
      <div className="grid-container-inicio">
        {/* Grid Item 1 */}
        <div className="grid-item-inicio itemImg-inicio">
          <img src={img1} alt="" />
        </div>

        {/* Grid Item 2 */}
        <div className="grid-item-inicio item-inicio">
          <h2>Bienvenido a Evil Angel</h2>
          <p>
            Descubre los mejores sabores y dispositivos con el estilo único de
            Evil Angel.
          </p>
          <p>
            Explora nuestra selección premium y encuentra tu próxima experiencia
            favorita.
          </p>
          <p>
            Calidad, innovación y una comunidad apasionada te esperan aquí.{" "}
          </p>
        </div>

        {/* Grid Item 3 */}
        <div className="grid-item-inicio item-inicio">
          <h2>Tu experiencia Evil Angel</h2>
          <p>
            Cada compra en Evil Angel es más que un producto, es una
            experiencia.
          </p>
          <p>
            Entregamos nuestros dispositivos con calcos exclusivos para tu termo
            y una tarjeta con consejos para cuidarlo.
          </p>
          <p>
            Si ya sos parte del club, podés recibir descuentos y hasta llaveros
            de regalo.
          </p>
          <p>
            Realizamos envíos a Alta Gracia y a todo el país a través de Vía
            Cargo.
          </p>
        </div>

        {/* Grid Item 4 */}
        <div className="grid-item-inicio itemImg-inicio">
          <img src={img2} alt="" />
        </div>

        {/* Grid Item 5 */}
        <div className="grid-item-inicio itemImg-inicio">
          <img src={img3} alt="" />
        </div>

        {/* Grid Item 6 */}
        <div className="grid-item-inicio item-inicio">

          <h2>Ventas Mayoristas</h2>
          
          <p>
            Potenciá tu negocio con Evil Angel y accedé a precios exclusivos por
            cantidad.
          </p>
          <p>
            Compra mínima de 5 unidades, con descuentos especiales llevando +5,
            +10, +20 o +50 productos.
          </p>
          <p>
            Envíos seguros y oportunidades de grandes ganancias en una de las
            tendencias más fuertes en tecnología.
          </p>
          <p>
            Invertí con nosotros y llevá tu emprendimiento al siguiente nivel.
          </p>
        </div>
      </div>

      <style jsx>{`
        .container-inicio {
          max-width: 1200px;
          margin: 0 auto;
          padding: 1rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 4rem;
        }
        .grid-container-inicio {
          display: grid;
          grid-template-columns: 1fr;
          gap: 4rem;
        }
        .grid-item-inicio item-inicio {
          max-width: 3rem;
          width: 100%;
        }

        .itemImg-inicio img {
          width: 100%;
          height: 100%;
          object-fit: contain; /* Ajusta la imagen sin deformarla */
          display: block;
          align-self: center; /* Asegura que la imagen se mantenga centrada */
        }
        .itemImg-inicio {
          display: flex;
          align-items: center; /* Centra verticalmente */
          justify-content: center; /* Centra horizontalmente */
          width: 20rem;
          border-radius: 0.5rem;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          color: white;
          overflow: hidden; /* Evita desbordes */
        }
        .item-inicio{
          width: 20rem;
        }
        .contenedor-inicio-h2 {
          display: flex;
          flex-direction: column;
          justify-content: center; /* Centra verticalmente */
          height: 300px; /* Ajustá según tus necesidades */
        }
        .grid-item-inicio h2 {
          margin-bottom: 2rem; /* Ajusta el valor según el espacio que desees */
          font-size: 1.5rem;
          font-weight: 600;
        }
        .grid-item-inicio p {
          margin-bottom: 1rem; /* Ajusta el valor según el espacio que desees */
        }

        /* Media query para pantallas medianas y grandes */
        @media (min-width: 768px) {
          .grid-container-inicio {
            grid-template-columns: 1fr 1fr;
          }
        }
      `}</style>
    </div>
  );
}
