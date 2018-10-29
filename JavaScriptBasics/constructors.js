// The this variable is used to construct and initialize
// the properties of the object. For example, the following
// constructor:
function car(new_make, new_model, new_year) {
	this.make = new_make;
	this.model = new_model;
	this.year = new_year;
}

// could be used as the following statement:
my_car = new car("Ford", "Fusion", "2012");

// For example, suppose you wanted a method for
// car objects that listed the property values.
// A function that could serve as such a method
// could be written as follows:
function display_car {
	document.write("Car make: ", this.make, "<br />");
	document.write("Car model: ", this.model, "<br />");
	document.write("Car year: ", this.year, "<br />");
}

// The following line must then be added to the car constructor:
this.display = display_car;

