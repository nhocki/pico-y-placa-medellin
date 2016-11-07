var days = [
  "Domingo",
  "Lunes",
  "Martes",
  "Miércoles",
  "Jueves",
  "Viernes",
  "Sábado"
];

var plates = [
  "No hay pico y placa",
  "6 - 7 - 8 - 9",
  "0 - 1 - 2 - 3",
  "4 - 5 - 6 - 7",
  "8 - 9 - 0 - 1",
  "2 - 3 - 4 - 5",
  "No hay pico y placa"
];


var date = new Date();
document.getElementById("day").innerHTML = days[ date.getDay() ];
document.getElementById("plates").innerHTML = plates[ date.getDay() ];
