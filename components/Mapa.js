import React, { useEffect } from "react";

const Mapa = () => {
  useEffect(() => {
    const map = L.map("map").setView(
      [-39.823651901716296, -73.23533346913247],
      13
    );

    L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 19,
      minZoom: 13,
      attribution:
        '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    }).addTo(map);
  }, []);

  return <div id="map"></div>;
};

export default Mapa;
