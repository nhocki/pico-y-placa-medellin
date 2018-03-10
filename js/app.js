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
  "4 - 5 - 6 - 7",
  "8 - 9 - 0 - 1",
  "2 - 3 - 4 - 5",
  "6 - 7 - 8 - 9",
  "0 - 1 - 2 - 3",
  "No hay pico y placa"
];

var bikePlates = [
  "",
  "8 - 9",
  "0 - 1",
  "2 - 3",
  "4 - 5",
  "6 - 7",
  ""
];

var even = [3, 17, 31]
var odd  = [24, 10, 7]

var emergency = function(data, date) {
  // Emergency is only on Saturdays.
  day = date.getDay()
  if (day != 6) {
    return data[day];
  }

  month = date.getMonth()
  if (month < 1 || month > 3) {
    return data[day];
  }

  monthDay = date.getDate()
  if (even.includes(monthDay)) {
    return "0 - 2 - 4 - 6 - 8"
  }

  if (odd.includes(monthDay)) {
    return "1 - 3 - 5 - 7 - 9"
  }

  return data[day];
}

var date = new Date();
document.getElementById("day").innerHTML = days[ date.getDay()];
document.getElementById("car-plates").innerHTML = "🚗  " + emergency(carPlates,  date);
document.getElementById("bike-plates").innerHTML = "🏍  " + emergency(bikePlates, date);
