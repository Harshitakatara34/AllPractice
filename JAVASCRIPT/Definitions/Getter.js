// Getter: A method that retrieves the value of a private or protected property.


// Example==>
class Circle {
    constructor(radius) {
      this._radius = radius; // Private property(_  privatee property we can't access it outside the class)
    }
  
    get radius() { return this._radius; } // Getter
    set radius(newRadius) { this._radius = newRadius; } // Setter
  }
  
  const circle = new Circle(5);
  
  console.log(circle._radius); // Get radius: 5
  
  circle.radius = 8; // Set radius using setter
  console.log(circle._radius); // Get radius: 8
  