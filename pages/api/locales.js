export const locales = [
  {
    id: 1,
    nombre: "La Calabaza",
    ubicacion: { lat: -39.8331720628047, long: -73.23839267401046 },
    horario: { abierto: "12:00", Cerrado: "22:00" },
    tipoComida: ["Hamburguesas", "Completos"],
    tipoDePago: ["Efectivo", "Débito", "Crédito", "Sodexo"],
    descripcion: "Aqui va la descripcion de cada local",
  },
  {
    id: 2,
    nombre: "Sobel",
    ubicacion: { lat: -39.82590787810668, long: -73.22706410284593 },
    horario: { abierto: "12:00", Cerrado: "22:00" },
    tipoComida: ["Hamburguesas", "Completos"],
    tipoDePago: ["Efectivo", "Débito", "Crédito", "Sodexo"],
    descripcion: "Aqui va la descripcion de cada local",
  },
  {
    id: 3,
    nombre: "Pizzaiolo",
    ubicacion: { lat: -39.81266300647194, long: -73.24022746051706 },
    horario: { abierto: "12:00", Cerrado: "22:00" },
    tipoComida: ["Hamburguesas", "Completos", "Italian Food"],
    tipoDePago: ["Efectivo", "Débito", "Crédito", "Sodexo"],
    descripcion: "Aqui va la descripcion de cada local",
  },
  {
    id: 4,
    nombre: "Sushimix",
    ubicacion: { lat: -39.83166524059258, long: -73.24167585881948 },
    horario: { abierto: "12:00", Cerrado: "22:00" },
    tipoComida: ["Sushi"],
    tipoDePago: ["Efectivo", "Débito", "Crédito", "Sodexo"],
    descripcion: "Aqui va la descripcion de cada local",
  },
  {
    id: 5,
    nombre: "Eltata",
    ubicacion: { lat: -39.83293151731654, long: -73.23865657401043 },
    horario: { abierto: "12:00", Cerrado: "22:00" },
    tipoComida: ["Hamburguesas", "Completos"],
    tipoDePago: ["Efectivo", "Débito", "Crédito", "Sodexo"],
    descripcion: "Aqui va la descripcion de cada local",
  },
  {
    id: 6,
    nombre: "Otakusushi",
    ubicacion: { lat: -39.840072, long: -73.22931 },
    horario: { abierto: "12:00", Cerrado: "22:00" },
    tipoComida: ["Hamburguesas", "Completos", "Italian Food"],
    tipoDePago: ["Efectivo", "Débito", "Crédito", "Sodexo"],
    descripcion: "Aqui va la descripcion de cada local",
  },
  {
    id: 7,
    nombre: "Chilenito",
    ubicacion: { lat: -39.838362735408126, long: -73.2165807528393 },
    horario: { abierto: "12:00", Cerrado: "22:00" },
    tipoComida: ["Hamburguesas", "Completos"],
    tipoDePago: ["Efectivo", "Débito", "Crédito", "Sodexo"],
    descripcion: "Aqui va la descripcion de cada local",
  },
  {
    id: 8,
    nombre: "Eneene",
    ubicacion: { lat: -39.81786913862792, long: -73.24467371834038 },
    horario: { abierto: "12:00", Cerrado: "22:00" },
    tipoComida: ["Hamburguesas", "Completos"],
    tipoDePago: ["Efectivo", "Débito", "Crédito", "Sodexo"],
    descripcion: "Aqui va la descripcion de cada local",
  },
  {
    id: 9,
    nombre: "Zonazero",
    ubicacion: { lat: -39.81880908521896, long: -73.2476395568231 },
    horario: { abierto: "12:00", Cerrado: "22:00" },
    tipoComida: ["Hamburguesas", "Completos"],
    tipoDePago: ["Efectivo", "Débito", "Crédito", "Sodexo"],
    descripcion: "Aqui va la descripcion de cada local",
  },
  {
    id: 10,
    nombre: "McDonalds",
    ubicacion: { lat: -39.812871223173566, long: -73.24616973168179 },
    horario: { abierto: "12:00", Cerrado: "22:00" },
    tipoComida: ["Hamburguesas", "Completos"],
    tipoDePago: ["Efectivo", "Débito", "Crédito", "Sodexo"],
    descripcion: "Aqui va la descripcion de cada local",
  },
  {
    id: 11,
    nombre: "KlasserBurger",
    ubicacion: { lat: -39.81957024762493, long: -73.24515907804391 },
    horario: { abierto: "12:00", Cerrado: "22:00" },
    tipoComida: ["Hamburguesas", "Completos"],
    tipoDePago: ["Efectivo", "Débito", "Crédito", "Sodexo"],
    descripcion: "Aqui va la descripcion de cada local",
  },
  {
    id: 12,
    nombre: "Papajohn",
    ubicacion: { lat: -39.81957024762493, long: -73.24515907804391 },
    horario: { abierto: "12:00", Cerrado: "22:00" },
    tipoComida: ["Italian Food"],
    tipoDePago: ["Efectivo", "Débito", "Crédito", "Sodexo"],
    descripcion: "Aqui va la descripcion de cada local",
  },
  {
    id: 13,
    nombre: "Wingit",
    ubicacion: { lat: -39.81611332706928, long: -73.23714251048254 },
    horario: { abierto: "12:00", Cerrado: "22:00" },
    tipoComida: ["Hamburguesas", "Completos"],
    tipoDePago: ["Efectivo", "Débito", "Crédito", "Sodexo"],
    descripcion: "Aqui va la descripcion de cada local",
  },
  {
    id: 14,
    nombre: "Cervecería Nothus",
    ubicacion: { lat: -39.82413635253896, long: -73.23858446878828 },
    horario: { abierto: "15:00", Cerrado: "22:00" },
    tipoComida: ["Hamburguesas", "Italian Food"],
    tipoDePago: ["Efectivo", "Débito", "Crédito"],
    descripcion: "Mejor cerveceria del mundo, reconocida a nivel mundial, con medallas de todo tipo.",
  },
];

export default function handler(req, res) {
  res.status(200).json(locales);
}