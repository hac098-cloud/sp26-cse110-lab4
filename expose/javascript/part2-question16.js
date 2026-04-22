16. let statistics = {
  redCars: 21,
  blueCars: 45,
  greenCars: 12,
  raceCars: 5,
  blackCars: 40,
  rareCars: 2
};

for (let property in statistics) {
  if (property.startsWith("r") || statistics[property] % 2 !== 0) {
    console.log(statistics[property]);
  }
}

18. setInterval(function () {
  let d = new Date();
  let time = d.toLocaleTimeString();
  console.log(time);
}, 1000);