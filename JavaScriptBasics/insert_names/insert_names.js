// insert_names.js
//   This script has an array of names, name_list,
//   whose values are in alphabetical order. New
//   names are input through a prompt. Each new
//   name is inserted into the name_list array,
//   after which the new list is displayed.

// The original list of names

var name_list = new Array("Al", "Betty", "Kasper",
                          "Michael", "Roberto", "Zimbo");
var new_name, index, last;

// Loop to get a new name and insert it
while (new_name =
       prompt("Please type a new name", "")) {
  last = name_list.length - 1;
  
  // Loop to find the place for the new name
    while (last >= 0 && name_list[last] > new_name) {
	  name_list[last + 1] = name_list[last];
	  last--;
	}
	
  // Insert the new name into its spot in the array
    name_list[last + 1] = new_name;
	
  // Display the new array
    document.write("<p><strong>The new name list is:</strong> ",
	               "<br />");
	for (index = 0; index < name_list.length; index++)
	  document.write(name_list[index], "<br />");
    document.write("</p>");
} // ** end of the outer while loop