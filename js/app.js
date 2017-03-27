var days = [
  "Domingo",
  "Lunes",
  "Martes",
  "Miércoles",
  "Jueves ❗️",
  "Viernes ❗️",
  "Sábado ❗️"
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

var redAlertCars = [
  "No hay pico y placa",
  "2 - 3 - 4 - 5 - 6 - 7",
  "6 - 7 - 8 - 9 - 0 - 1",
  "0 - 1 - 2 - 3 - 4 - 5",
  "4 - 5 - 6 - 7 - 8 - 9",
  "8 - 9 - 0 - 1 - 2 - 3",
  "No hay pico y placa"
]

var redAlertBikes = [
  "",
  "2 - 3 - 4 - 5 - 6 - 7",
  "4 - 5 - 6 - 7 - 8 - 9",
  "6 - 7 - 8 - 9 - 0 - 1",
  "8 - 9 - 0 - 1 - 2 - 3",
  "0 - 1 - 2 - 3 - 4 - 5",
  ""
]


var date = new Date();
document.getElementById("day").innerHTML = days[ date.getDay()];
document.getElementById("car-plates").innerHTML = "🚗  " + redAlertCars[ date.getDay()];
document.getElementById("bike-plates").innerHTML = "🏍  " + redAlertBikes[ date.getDay()];
