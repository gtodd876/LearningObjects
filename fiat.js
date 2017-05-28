var fiat =
{
  make: "Fiat",
  model: "500",
  year: 1957,
  color: "MediumBlue",
  passengers: 2,
  convertible: false,
  mileage: 88000,
  started: false,
  fuel: 0,

  start: function()
  {
    this.started = true;
  },

  stop: function()
  {
    this.started = false;
  },

  drive: function()
  {
    if (this.started)
    {
      alert("ZOOM ZOOM!");
    } else
    {
      alert("You need to start the engine first.");
    }
  },
  addFuel: function (amount)
  {
      this.fuel = this.fuel + amount;
  }
};

fiat.drive();
fiat.start();
fiat.drive();
fiat.stop();
