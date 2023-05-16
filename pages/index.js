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
      </Head>
      <div className="container" id="principal">
        <Header />
        <Filtros />
        <Mapa />
        <Footer />
      </div>
    </>
  );
};

export default Index;
