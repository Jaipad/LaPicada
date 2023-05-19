export const locales = [
  {
    Id: 26,
    Nombre: "La Calabaza",
    Ubicación: { lat: 39.833345077603774, long: -73.23840340329585 },
    Horario: { abierto: "12:00", Cerrado: "22:00" },
    Tipo_Comida: ["Hamburguesas", "Completos"],
    Tipo_de_pago: [
      { nombre: "Efectivo", acepta: true },
      { nombre: "Débito", acepta: true },
      { nombre: "Crédito", acepta: false },
      { nombre: "Sodexo", acpeta: true },
    ],
  },
];

export default async (req, res) => {
  res.status(200).json(locales);
};
