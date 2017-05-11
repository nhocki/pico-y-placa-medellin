var days = [
  "Domingo",
  "Lunes",
  "Martes",
  "Miércoles",
  "Jueves",
  "Viernes",
  "Sábado"
];

var carPlates = [
  "No hay pico y placa",
  "2 - 3 - 4 - 5",
  "6 - 7 - 8 - 9",
  "0 - 1 - 2 - 3",
  "4 - 5 - 6 - 7",
  "8 - 9 - 0 - 1",
  "No hay pico y placa"
];

var bikePlates = [
  "",
  "2 - 3",
  "4 - 5",
  "6 - 7",
  "8 - 9",
  "0 - 1",
  ""
];

var date = new Date();
document.getElementById("day").innerHTML = days[ date.getDay()];
document.getElementById("car-plates").innerHTML = "🚗  " + carPlates[ date.getDay()];
document.getElementById("bike-plates").innerHTML = "🏍  " + bikePlates[ date.getDay()];
