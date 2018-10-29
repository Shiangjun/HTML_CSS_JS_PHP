// if fun1 is a parameterless function that returns undefined
// and if fun2, which also has no parameters, returns a useful value
// codes are shown as:
fun1();
result = fun2();

// they can be passed as parameters, be assigned to other variables,
// and be the elements of an array
function fun() { document.write(
                 "This surely is fun! <br />"); }
ref_fun = fun; // Now, ref_fun refers to the fun object
fun();         // A call to fun
ref_fun();     // Also a call to fun

// The first assignment to my_list in fun1 changes the object to which
// my_list refers, which was created in the calling code. However the 
// second assignment to my_list changes it to refer to a different array object.
function fun1(my_list) {
	var list2 = new Array{1, 3, 5};
	my_list[3] = 14;
	...
	my_list = list2;
	...
}
...
var list = new Array{2, 4, 6, 8}
fun1(list);

// There is no elegant way in JS to pass a primitive value by reference,
// One inelegant way is to put the value in an array and pass the array,
// as in the following script:
function by10(a) {
	a[0] *= 10;
}

...
var x;
var listx = new Array(1);
...
listx[0] = x;
by10(listx);
x = listx[0];

// Another way to have a function change the value of a primitive-type
// actual parameter is to have the function return the new values as follows:
function by10_2(a) {
	return 10 * a;
}
...
var x;
...
x = by10_2(x);

// The defualt order is ascending order,
num_list.sort();
// But if it needs descending order,
function num_order(a,b) { return b - a; }
num_list.sort(num_order);

