import { useContext, useState } from "react";
import { VapersContext } from "../../context/VapersContext";
import CardProduct from "../../components/cardProduct/CardProduct";
import Spinner from "../../components/Spinner/Spinner";
import "./Catalogo.css";
import ButtonC from "../../components/button/Button";
import { Link } from "react-router-dom";

const Catalogo = () => {
  const { vapersData, loading } = useContext(VapersContext);
  const [filtro, setFiltro] = useState(null);

  const vapersFiltrados = filtro
    ? vapersData.filter((vaper) => vaper.marca === filtro)
    : vapersData;

  return (
    <div className="catalogo">
      <div className="catalogo-header">
        <ButtonC className="btn-catalogo todos" label="Todos" onClick={() => setFiltro(null)} />
        <ButtonC className="btn-catalogo geekbar" label="Geek Bar" onClick={() => setFiltro("Geek Bar")} />
        <ButtonC className="btn-catalogo ignite" label="Ignite" onClick={() => setFiltro("Ignite")} />
        <ButtonC className="btn-catalogo elbar" label="El Bar" onClick={() => setFiltro("El Bar")} />
        <ButtonC className="btn-catalogo tbs" label="The Black Sheep" onClick={() => setFiltro("The Black Sheep")} />
      </div>


      <div className="catalogo-products">
        {loading ? (
          <div className="spinner">
            <Spinner />
          </div>
        ) : (
          <div className="grid-vapers">
            {vapersFiltrados.length > 0 ? (
              vapersFiltrados.map((vaper) => (
                vaper.stock > 0 ? (
                  <Link key={vaper.id} to={`/DetailPage/${vaper.id}`}>
                    <CardProduct vapersData={vaper} />
                  </Link>
                ) : (
                  <CardProduct key={vaper.id} vapersData={vaper} />
                )
              ))
            ) : (
              <p>No hay productos disponibles para esta categoría.</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Catalogo;
