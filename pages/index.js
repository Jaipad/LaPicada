// Next.js
import Head from "next/head";

// Components
import Header from "../components/Header.js";
import Filtros from "../components/Filtros.js";
import Mapa from "../components/Mapa.js";
import Footer from "../components/Footer.js";

const Index = () => {
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
        <Filtros />
        <Mapa/>
        <Footer />
      </div>
    </>
  );
};

export default Index;
