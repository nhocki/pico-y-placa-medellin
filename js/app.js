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
  "6 - 7 - 8 - 9 - 0 - 1",
  "0 - 1 - 2 - 3 - 4 - 5",
  "4 - 5 - 6 - 7 - 8 - 9",
  "8 - 9 - 0 - 1 - 2 - 3",
  "2 - 3 - 4 - 5 - 6 - 7",
  "No hay pico y placa"
];

var bikePlates = [
  "",
  "4 - 5 - 6 - 7 - 8 - 9",
  "6 - 7 - 8 - 9 - 0 - 1",
  "8 - 9 - 0 - 1 - 2 - 3",
  "0 - 1 - 2 - 3 - 4 - 5",
  "2 - 3 - 4 - 5 - 6 - 7",
  ""
];

var even = [16, 30]
var odd = [09, 23]

var emergency = function (data, date) {
  // Emergency is only on Saturdays.
  day = date.getDay()
  if (day != 6) {
    return data[day];
  }

  month = date.getMonth()
  if (month != 2) { // only on march
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
var table = ""
for (var i = 1; i <= 5; i++) {
  table += `<tr><td>${days[i]}</td><td>${carPlates[i]} &nbsp;&nbsp; |&nbsp;&nbsp; ${bikePlates[i]}</td></tr>`
}

document.getElementById("day").innerHTML = days[date.getDay()];
document.getElementById("car-plates").innerHTML = "🚗  " + emergency(carPlates, date);
document.getElementById("bike-plates").innerHTML = "🏍  " + emergency(bikePlates, date);
document.getElementById("full").innerHTML = table;
