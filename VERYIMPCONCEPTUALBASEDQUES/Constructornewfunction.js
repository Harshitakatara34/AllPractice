function Car(name, price) {
  this.name = name;
  this.price = price;
}
function Truck() {
  Car.call(this, "volvo", "12lac");
  this.fuel = "diesel";
}
console.log(new Truck().name);

// the code without new would not work as expected, and it would likely result in errors.
// It's important to use the new keyword when you intend to create new instances of constructors
// to ensure that the properties are correctly assigned to the new objects.
