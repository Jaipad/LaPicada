// Leaflet
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import * as L from "leaflet";

// React
import { useState, useEffect } from "react";
import DrawerComp from "../DrawerComp";

// Iconos de marcadores personalizados
const myIcon = L.icon({
  iconUrl: "/imagenes_mapa/marcador.png",
  iconSize: [25, 25],
  iconAnchor: [12, 41],
  popupAnchor: [0, -36],
});

const Map = ({ comidas, pagos, horario }) => {
  const [locales, setLocales] = useState([]);
  const [localesFiltrados, setLocalesFiltrados] = useState([]);

  useEffect(() => {
    fetch("/api/locales")
      .then((res) => res.json())
      .then((data) => {
        setLocales(data);
      });
  }, []);

  useEffect(() => {
    setLocalesFiltrados(locales);
  }, [locales]);

  useEffect(() => {
    const localFiltrado = locales.filter((local) => {
      return local.tipoComida.some((item) => {
        return comidas.some((comida) => {
          return comida.checked && comida.nombre === item;
        });
      });
    });
    setLocalesFiltrados(localFiltrado);
  }, [comidas]);

  useEffect(() => {
    console.log("localFiltrado");
    const localFiltrado = locales.filter((local) => {
      return local.tipoDePago.some((item) => {
        return pagos.some((pago) => {
          return pago.checked && pago.nombre === item;
        });
      });
    });
    setLocalesFiltrados(localFiltrado);
  }, [pagos]);

  console.log(comidas);
  console.log(pagos);
  /*   console.log(localesFiltrados); */

  const position_valdivia = [-39.823651901716296, -73.23533346913247];

  return (
    <div className="map__box">
      <MapContainer
        id="map"
        center={position_valdivia}
        zoom={14}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {localesFiltrados.map((local) => (
          <Marker
            key={local.id}
            position={[local.ubicacion.lat, local.ubicacion.long]}
            icon={myIcon}
          >
            <Popup>
              <p>{local.nombre}</p>
              <DrawerComp local={local} />
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default Map;
