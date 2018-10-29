//join: if a string parameter is provided, it is
//      used as the element separator.
var names = new Array["Mary", "Murray", "Murphy", "Max"];
...
var name_string = names.join(" : " );

//sort: this method coerces the elements of the array to become strings if
//      they are not already strings and sorts them alphabetically.
names.sort();

//concat: the following statements make names from four-element into six-element
var names = new Array["Mary", "Murray", "Murphy", "Max"];
...
var new_names = names.concat("Moo", "Meow");

//slice: similar to the substring with respect to the string
var list = [2, 4, 6, 8, 10];
...
var list2 = list.slice(1, 3);

// if there is one parameter in slice()
var list = ["Bill", "Will", "Jill", "dill"];
...
var listette = list.slice(2);

value: ["Jill", "dill"]

//pop push for stack
var list = ["Dasher", "Dancer", "Donner", "Blitzen"];
var deer = list.pop(); // deer is now "Blitzen"
list.push("Blitzen");
  // This puts "Blitzen" back on list
  
//shift unshift for queue
var deer = list.shift(); // deer is now "Dasher"
list.unshift("Dasher"); // This puts "Dasher" back on list