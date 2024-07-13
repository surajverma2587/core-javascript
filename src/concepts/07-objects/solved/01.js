export const objects = () => {
  const car = {
    make: "Toyota",
    model: "Corolla",
    year: 2023,
    color: "Silver",
    price: 25000,
    getInfo: function () {
      return `${this.make} | ${this.model} | ${this.year} | ${this.color} | ${this.price}`;
    },
    displayPrice: function () {
      return `£${this.price}`;
    },
  };

  car.mileage = 8000;

  car.drive = function () {
    return `You drove ${this.mileage} miles`;
  };

  return car;
};
