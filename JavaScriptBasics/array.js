// In the case of arrays, the constructor is named Array:
var my_list = new Array(1, 2, "three", "four");
var your_list = new Array(100);

var my_list_2 = [1, 2, "three", "four"];

// If my_list is an array with 4 elements and the following
// statement is executed, the new length of my_list will be 48.
my_list[47] = 2222;

// The length is both read and write accessible
my_list.length = 1002;

