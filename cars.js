<<<<<<< HEAD
  function makeCar()
  {
      var makes = ["Chevy", "GM", "Fiat", "Webville Motors", "Trucker"];
      var models =  ["Cadillac", "500", "Bel-air", "Taxi", "Torpedo"];
      var years = [1955, 1957, 1948, 1954, 1961];
      var colors = ["red", "blue", "tan", "yellow", "white" ];
      var convertible = [true, false];

      var rand1 = Math.floor(Math.random() * makes.length);
      var rand2 = Math.floor(Math.random() * models.length);
      var rand3 = Math.floor(Math.random() * years.length);
      var rand4 = Math.floor(Math.random() * colors.length);
      var rand5 = Math.floor(Math.random() * 5) + 1;
      var rand6 = Math.floor(Math.random() * 2);

      var car =
      {
        make: makes[rand1],
        model: models[rand2],
        year: years[rand3],
        color: colors[rand4],
        passengers: rand5,
        convertible: convertible[rand6],
        mileage: 0
      };
    return car;
  }

  function displayCar(car)
  {
      console.log("Your new car is a " + car.year + " " + car.make + " " + car.model);
  }

  var carToSell = makeCar();
  displayCar(carToSell);
=======
var cadi =
  {
    make: "GM",
    model: "Cadillac",
    year: 1955,
    color: "tan",
    passenger: 5,
    convertable: false,
    mileage: 12892,
    started: false,
    start: function()
    {
      this.started = true;
    },
    stop: function ()
    {
        this.started = false;
    },
    drive: function()
    {
      if (this.started)
      {
        alert(this.make + " " + this.model + " goes zoom zoom!");
      } else {
        alert("You need to start the engine first.");
      }
    }

  };
var chevy =
  {
    make: "Chevy",
    model: "Bel Air",
    year: 1957,
    color: "red",
    passenger: 2,
    convertable: false,
    mileage: 1021,
    started: false,
    start: function()
    {
      this.started = true;
    },
    stop: function ()
    {
        this.started = false;
    },
    drive: function()
    {
      if (this.started)
      {
        alert(this.make + " " + this.model + " goes zoom zoom!");
      } else {
        alert("You need to start the engine first.");
      }
    }

  };

var taxi =
  {
    make: "Webville Motors",
    model: "Taxi",
    year: 1955,
    color: "yellow",
    passenger: 4,
    convertable: false,
    mileage: 281341,
    started: false,
    start: function()
    {
      this.started = true;
    },
    stop: function ()
    {
        this.started = false;
    },
    drive: function()
    {
      if (this.started)
      {
        alert(this.make + " " + this.model + " goes zoom zoom!");
      } else {
        alert("You need to start the engine first.");
      }
    }

  };

cadi.start();
cadi.drive();
cadi.stop();
chevy.start();
chevy.drive();
chevy.stop();
chevy.start();
taxi.start();
taxi.drive();
taxi.stop();
>>>>>>> startingCars
