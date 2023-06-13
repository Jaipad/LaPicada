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

export default function Map() {
  const [locales, setLocales] = useState([]);
  useEffect(() => {
    // La primera vez que carga el componente, pide los datos a "/api/locales"
    fetch("/api/locales")
      .then((res) => res.json())
      .then((data) => {
        setLocales(data);
      });
  }, []);

  const position_valdivia = [-39.823651901716296, -73.23533346913247];
  console.log(locales);
  return (
    <div className="map__box">
      {/* Configuraciones generales del Mapa, zoom, scroll, etc */}
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
        {/* Recorrer sus locales */}
        {locales.map((local) => (
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
}
