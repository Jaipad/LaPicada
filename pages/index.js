// Next.js
import Head from "next/head";

import { useState } from "react";

// Components
import Header from "../components/Header.js";
import Filtros from "../components/Filtros.js";
import Footer from "../components/Footer.js";
import Map from "../components/Mapa/index.js";

const Index = () => {
  const [comidas, setComidas] = useState([
    { id: 1, nombre: "Hamburguesas", checked: false },
    { id: 2, nombre: "Completos", checked: false },
    { id: 3, nombre: "Sushi", checked: false },
    { id: 4, nombre: "Italian Food", checked: false },
  ]);

  const [pagos, setPagos] = useState([
    { id: 1, nombre: "Efectivo", checked: false },
    { id: 2, nombre: "Débito", checked: false },
    { id: 3, nombre: "Crédito", checked: false },
    { id: 4, nombre: "Sodexo", checked: false },
  ]);

  const [horario, setHorario] = useState();

  return (
    <>
      <Head>
        <title>LaPicada</title>
        <link
          rel="stylesheet"
          href="https://unpkg.com/leaflet@1.9.3/dist/leaflet.css"
          integrity="sha256-kLaT2GOSpHechhsozzB+flnD+zUyjE2LlfWPgU04xyI="
          crossorigin=""
        />

        <script
          src="https://unpkg.com/leaflet@1.9.3/dist/leaflet.js"
          integrity="sha256-WBkoXOwTeyKclOHuWtc+i2uENFpDZ9YPdf5Hf+D7ewM="
          crossorigin=""
        ></script>
      </Head>
      <div className="container" id="principal">
        <Header />
        <Filtros
          comidas={comidas}
          setComidas={setComidas}
          pagos={pagos}
          setPagos={setPagos}
          setHorario={setHorario}
        />
        <Map comidas={comidas} pagos={pagos} horario={horario} />
        <Footer />
      </div>
    </>
  );
};

export default Index;
