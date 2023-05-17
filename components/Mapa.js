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

    
    const calabaza = L.marker([-39.8331720628047, -73.23839267401046]).addTo(map);
    const sobel= L.marker([-39.82590787810668, -73.22706410284593]).addTo(map);
    const pizzaiolo = L.marker([-39.81266300647194, -73.24022746051706]).addTo(map);
    const sushimix = L.marker([-39.83166524059258, -73.24167585881948]).addTo(map);
    const eltata= L.marker([-39.83293151731654, -73.23865657401043]).addTo(map);
    const otakusushi = L.marker([-39.840072, -73.229310]).addTo(map);
    const chilenito = L.marker([-39.838362735408126, -73.2165807528393]).addTo(map);
    const eneene = L.marker([-39.81786913862792, -73.24467371834038]).addTo(map);
    const zonazero = L.marker([-39.81880908521896, -73.2476395568231]).addTo(map);
    const McDonalds = L.marker([-39.812871223173566, -73.24616973168179]).addTo(map);
    const KlasserBurger = L.marker([-39.81957024762493, -73.24515907804391]).addTo(map);
    const papajohn = L.marker([-39.81957024762493, -73.24515907804391]).addTo(map);
    const wingit = L.marker([-39.81611332706928, -73.23714251048254]).addTo(map);
    


  }, []);

  return <div id="map"></div>;
};

export default Mapa;
