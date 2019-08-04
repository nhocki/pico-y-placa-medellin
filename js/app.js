var days = [
  "Domingo",
  "Lunes",
  "Martes",
  "Miércoles",
  "Jueves",
  "Viernes",
  "Sábado"
];

var carStep = 4;
var carNums = 4;
var carStart = 2;

var bikeStep = 2;
var bikeNums = 2;
var bikeStart = 2;

var carPlates = ["No hay pico y placa"];
var bikePlates = [""];

for (let day = 0; day < 5; day++) {
  let cPlates = [];
  let bPlates = [];
  let start = ((day * carStep) + carStart) % 10;
  for (let i = 0; i < carNums; i++) {
    let num = (start + i) % 10;
    cPlates.push(num)
  }

  start = ((day * bikeStep) + bikeStart) % 10;
  for (let i = 0; i < bikeNums; i++) {
    let num = (start + i) % 10;
    bPlates.push(num)
  }
  bikePlates.push(bPlates.join(" - "))
  carPlates.push(cPlates.join(" - "))
}

carPlates.push("No hay pico y placa");
bikePlates.push("");

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
