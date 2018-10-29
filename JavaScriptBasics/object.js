// Create an object that has no properties
var my_object = new Object();

// Create and initializa the make property
my_car.make = "Ford";
my_car.model = "Fusion";

// Equivalent with the following statements
var my_car = {make: "Ford", model: "Fusion"};

// Create an object that is a property of my_car with properties of its own
my_car.engine = new Object();
my_car.engine.config = "V6";
my_car.engine.hp = 263;

// After following exectuons, they all have the value "Ford"
var prop1 = my_car.make;
var prop2 = my_car["make"];

// A property could be deleted
delete my_car.model;

// for-in statements support to list all properties of an object
for (var prop in my_car)
  doucument.write("Name: ", prop, "; Value: ",
                   my_car[prop], "<br />");