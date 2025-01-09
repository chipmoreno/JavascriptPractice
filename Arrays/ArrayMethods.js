// ForEach(): iteartes through array, invokes function specified
// for each element. Pass function as first argument to forEach().
// forEach() then invokes function with three args: value of array
// element, index of array element, array itself.

let data = [1,2,3,4,5], sum = 0;
data.forEach(value => { sum += value}); // sum = 15

data.forEach(function(v, i, a) { a[i] = v+1;});
 // data = 2, 3, 4, 5, 6

 // map() passes each element of the array on which it is invoked
 // to the function you specify, returns array containing
 // values returned

 let a = [1,2,3]
console.log(a.map(x => x*x))

// filter() returns array containing subset of elements on array
// on which it is invvoked. function passed to it should return
// true or false. 

a = [5,4,3,2,1];
console.log(a.filter(x => x < 3))
console.log(a.filter((x,i) => i%2 === 0)) // every other value

let sparseArray = [1, undefined, 2, 4, 5]
let dense = sparseArray.filter(x => x !== undefined && x !== null);
console.log(dense);

/* find() and findIndex(): iterate through array, look for elements
which predicate function returns truthy value
unlike filter(), they stop iterating when predicate find an element

when that happens find() returns matching element, findIndex() returns
index of matching element. if no element match is found, find() returns
undefined, findIndex() returns -1.*/

let a1 = [1,2,3,4,5];
a1.findIndex(x => x === 3) // match at index 2
a1.findIndex(x => x < 0) // -1 - no match
a1.find(x => x % 5 === 0) // 5: 5 mod 5 is 0
a.find(x => x % 7 === 0) // undefined - no match

/* every() and some()

every() and some() are array predicates: apply predicate
function you specify to elements of array, then return true/false

ever() is like mathematical for all quantifier: returns true
if and only if predicate function returns true for all elements in array
*/

a = [1,2,3,4,5]
a.every(x => x > 10) // True: all are under 10
a.every(x => x % 2 === 0) //false - not all are even

/* some() like mathematical "there exists" quantifier:
returns true if at least one element returns true, otherwise
false */

a.some(x=>x%2===0) // True
a.some(isNaN)//false

// every() and some() stop iterating as soon as they know
// what value to return 

//reduce combines elements of an array using function you specify

a = [1,2,3,4,5]
a.reduce((x,y) => x+y, 0) // 15, sum of values
a.reduce((x,y) => x*y, 1) // 120, product of values
a.reduce((x,y) => (x > y) ? x : y) // 5, largest of values

/* reduce takes two args. function of task 1 reduces two into 
single value and returns that reduced value. second arg
is an intial value to pass into the function.*/

//reduceRight() processes array from highest index to lowest

a = [2,3,4];
a.reduceRight((acc,val) => Math.pow(val,acc)) //2.4178516392292583e+24

// flat() - any elements that are arrays are 'flattened'
// flat() flattens one layer of nesting but with a parameter
// can flatten multiple layers of nesting

a = [1,[2,3]]
a.flat() // [1,2,3]

a = [1, [2, [3, [4]]]];
a.flat(1)
a.flat(2)
a.flat(3)
a.flat(4)
// => [1, 2, [3, [4]]]
// => [1, 2, 3, [4]]
// => [1, 2, 3, 4]
// => [1, 2, 3, 4]

let phrases = ["hello world", "the definitive guide"];
let words = phrases.flatMap(phrase => phrase.split(" "));
console.log(words)

//['hello', 'world', 'the', 'definitive', 'guide']

//flatMap() is a generalization of map() that allows each element
// of the input array to map to any number of elements 
// in the output array

[-2, -1, 1, 2].flatMap(x => x < 0 ? [] : Math.sqrt(x))
// Mapping non-negative numbers to their square roots
// [1, 2**0.5]

/* concat() creates and returns new array containing elements
of original array on which concat() was invoked, followed by
each argument to concat(). if any args are an array, the elements
are concatenated and not the array itself.*/

a = [1,2,3]
a.concat(4,5) // [1,2,3,4,5]
a.concat([4,5],[6,7]) // [1,2,3,4,5,6,7] arrays flattened
a.concat(4, [5,[6,7]]) // => [1,2,3,4,5,[6,7]]; not nested arrays
console.log(a) //unmodified

