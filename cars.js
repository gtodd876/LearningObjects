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
