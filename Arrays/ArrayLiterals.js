// Shallow copy of an array: 

let original = [1,2,3];
let copy = [...original];
copy[0] = 0; 
console.log(copy[0])
// Modifying the copy does not change the original original[0] // => 1


// You can use a spread operator to turn any string into an array
// of single character strings:

let digits = [..."0123456789ABCDEF"];
digits 
// ["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"]

let letters = [..."hello world"];
[...new Set(letters)] // ["h","e","l","o"," ","w","r","d"]
// removes duplicates

// Array Constructor Array()

let a = new Array();
let b = new Array(10); 
/* sets array of specified length- 
can be used to preallocate an array when you know how many elements
will be required - the index properties are not even defined */

let c = new Array(5, 4, 3, 2, 1, "testing, testing");
console.log(c)
// [5, 4, 3, 2, 1, 'testing, testing']

Array.of() // []
Array.of(10) // [10]
Array.of(1,2,3)//[1,2,3]

//Array.from: expects iterable or array-like object
// as first argument, returns new array containing elements
// from that object
//Array.from(iterable) works like [...iterable]

//let copy1 = Array.from(original)
//let truearray = Array.from(arraylike);

/* Accepts optional second argument: if second argument,
each element from the source object will be passed to the
function you specify, and the return value will be stored
instead of the original value. Similar to map() method.

Array.from(source, function)*/

a = ["world"];
let value = a[0];
console.log(value) // world
a[1] = 3.14;
let i = 2;
a[i] = 3;
a[i + 1] = "hello";
a[a[i]] = a[0];
console.log(a[a[i]])

/* Spare Array: Elements do not have contiguous indexes
starting at 0. Normally, length specifies number of elements.
But if array is sparse, value of length is greater than number
of elements. */

a = new Array(5);
a = []
a[1000] = 0;
console.log(a) // contains 1001 indexes but one value

// Push() to add value to end of array:

a = []
a.push("zero");
a.push("one","two");

a = [1,2,3]
delete a[1];
console.log(1 in a) // false
console.log(a.length)
console.log(a)

// Array still has 3 indexes, is now sparse

/* splise() is general purpose method for inserting, deleting,
replacing array elements as it alters length and shifts array
elements to higher or lower indexes as needed */


//Iterating Arrays:

letters = [..."Hello world"];
let string = "";
for(let letter of letters){
    string += letter;
}
console.log(string)

let everyother = "";
for(let [index, letter] of letters.entries()){
    if (index % 2 === 0) everyother += letter;
    // Letters at even indexes only
}
console.log(everyother)

let uppercase = "";
letters.forEach(letter => {
    uppercase += letter.toUpperCase();
});
console.log(uppercase)

// Iterating array elements with for loop:

let vowels = "";

for (let z1 = 0; z1<letters.length; z1++){
    let letter = letters[z1];
    if (/[aeiou]/.test(letter)){ // regex test
        vowels += letter;
    }
};
console.log(vowels)

// Saving array length into local variable

for(let z2 = 0; len = letters.length; z2 < len, z2++){
}

for(let z3 = letters.length-1;z3>=0;z3--){
}
