var taxi =
  {
    make: "Webville Motors",
    model: "Taxi",
    year: 1955,
    color: "yellow",
    passenger: 4,
    convertable: false,
    mileage: 281341
  };
var taxi =
  {
    make: "Webville Motors",
    model: "Taxi",
    year: 1955,
    color: "yellow",
    passenger: 4,
    convertable: false,
    mileage: 281341
  };

var taxi =
  {
    make: "Webville Motors",
    model: "Taxi",
    year: 1955,
    color: "yellow",
    passenger: 4,
    convertable: false,
    mileage: 281341
  };

var taxi =
  {
    make: "Webville Motors",
    model: "Taxi",
    year: 1955,
    color: "yellow",
    passenger: 4,
    convertable: false,
    mileage: 281341
  };

  function prequal(car)
  {
      if (car.mileage > 10000)
      {
          return false;
      } else if (car.year > 1960)
      {
          return false;
      }
    return true;
  }

  var worthALook = prequal(taxi);

  if (worthALook)
  {
      console.log("You goot check out this " + taxi.make + " " + " " + taxi.model);
  } else {
      console.log("You should really pass on the " + taxi.make + " " + taxi.model);
  }
