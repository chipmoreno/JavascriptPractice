let stack = [];
stack.push(1,2) // [1,2]
stack.pop() // stack = [1] returns 2
stack.push(3) // [1,3]
stack.pop // stack = 1 returns 3
stack.push([4,5]) /// [1,[4,5]]
stack.pop() // 1 returns [4,5]
stack.pop() //[] returns 1
stack.pop()
console.log(stack)

/*push() does not flatten array you pass to it,
but if you want to push all of the elements from
one array onto another array, use spread operator
*/

values = 1;
stack.push(4)

/* unshift() adds element or elements to 
beginning of array shifts existing array elemnets up to 
higher index to make room, returns new length of array

shift() removes and returns first element, shifting subsequent 
elements down one place to occupy newly vacant space 
*/

let q = [];
q.push(1,2)
q.shift(); // q== [2], returns 1
q.push(3) // q == [2, 3]
q.shift() // q == [3], returns 2

// unshift() 

a = [];
a.unshift(1) // a == [1]
a.unshift(2) // a == [2, 1]
a = []; // a == []
a.unshift(1,2) // a == [1,2]

//When passing multiple args to unshift, they are inserted all at once
// you end up in a different order

//slice() returns slice, or subarray, of specified array
// its two args specify start and end of slice to be returned

a = [1,2,3,4,5]
a.slice(0,3) // [1,2,3]
a.slice(3) // [4,5]
a.slice(1,-1) // [2,3,4]
a.slice(-3,-2) // [3]

//splice() general purpose method for inserting/removing elements
//splice() modifies array on which it is invoked
//1st arg: specifies array position insertion/deletion begins
//2nd arg: specifies number of elements to delete

// if no second arg, all arrays from start to end are removed

// splice returns array of deleted elements

a = [1,2,3,4,5,6,7,8];
a.splice(4) // returns [5,6,7,8], a is now [1,2,3,4]
a.splice(1,2) // returns [2,3], a is now [1,4]
a.splice(1,1) // returns [4], a is now [1]

// These two splice args can be followed by additional args
// specifying elements to be inserted starting
// at position specified by first arg 

a = [1,2,3,4,5];
a.splice(3, 0, "x","y","z")
console.log(a)
//[1, 2, 3, 'x', 'y', 'z', 4, 5]
a.splice(2,2,[1,2],3)
console.log(a)

// fill() sets elements of an array to specified value
// mutates array and returns modified array

a = new Array(5)
a.fill(0) // [0,0,0,0,0]
a.fill(9,1) //[0,9,9,9,9] fill with 9s starting at index 1
a.fill(8,2,-1) // fill with 8 at indexes 2,3
console.log(a)
// if end is negative, it is treated as length + end. in this case
// length is 4. confusing

// copyWithin(): copise slice of an array to 
// new position within that array
/* modififies array in place, and 
returns modified array, but does not change length
first arg specifies destination index to which first element
will be copied 
second arg specifies current index of element ot be copied

third arg specifies end of slice of elements to be copied

copyWithin(destination, beginningSource, endSource)

// if third arg omitted, length of array is used */

a = [1,2,3,4,5];
a.copyWithin(1) // [1,1,2,3,4]
a.copyWithin(2,3,5) //[1,1,3,4,4]
a.copyWithin(0,-2) // [4,4,3,4,4]

/* indexOf() - search array for element with value, return
index of first such element found or -1 if no element found 
searches array from beginning to end, lastIndexOf() searches from
end to beginning */

a = [0,1,2,1,0];
a.indexOf(1) // 1: a[1] is 1
a.lastIndexOf(1) // 3: a[3] is 1
a.indexOf(3) // -1: does not exist

// Find all occurences of x in array, return array
// of matching indexes:

a = [1,2,5,3,5,6,5,7,8,5,10]

// indexOf/lastIndexOf take optional second arg
// specifies index where to begin

function findall(a, x){ // a = array, x = 5
    let results = [],
    len = a.length, // 11
    pos = 0; // 0
    while (pos < len) // while 0 < 11
    {pos=a.indexOf(x, pos); // = a.indexOf(search for 5, start at 0, then index 3)
        if (pos === -1) break; // if no 5, break
        results.push(pos) // pos = 2
        pos = pos+1; // post = 3, still less than 11, restart
    }
    return results // 2, 4, 6, 9
}

console.log(findall(a, 5))

// includes() takes single arg, returns true if array contains
/* value, false otherwise - does not tell you index
// includes can find NaN but indexOf cannot
*/
let a = [1,true,3,NaN]; 
a.includes(true) // true
a.includes(2) //false
a.includes(NaN) //true
a.indexOf(NaN) // -1, cannot find

// sort(): when called with no arg, sorts array elements in
// alphabetical order 

a = ["banana", "cherry", "apple"]; 
a.sort(); 
// a == ["apple", "banana", "cherry"]

a = [33, 4, 1111, 222];
a.sort(); //// a == [1111, 222, 33, 4]

a = [33, 4, 111, 222];
a.sort(); // a == [1111, 222, 33, 4]; alphabetical order
a.sort(function(a,b){
    return a -b; // returns < 0, 0, or > 0, depending on order
});

a.sort((a,b) => b-a); // a = 1111, 222, 33, 4, reverse order

// case insensitive sort:

a = ["ant", "Bug", "cat", "Dog"];
a.sort(); // ["Bug","Dog","ant","cat"]
a.sort(function(s,t){
    let a = s.toLowerCase();
    let b = t.toLowerCase();
    if (a<b) return -1;
    if(a>b) return 1;
    return 0;
}) //a = ["ant","Bug","cat","Dog"];

// reverse() - rearranges items in array, mutates existing array
a = [1,2,3]
a.reverse(); // a = [3,2,1]

// join() - converts elements of array to strings and concatenates
// returns resulting string. takes parameter of delimiter

a = [1,2,3];
a.join() // "1,2,3"
a.join(" ")// 1 2 3
a.join("") //123
let b = new Array(10);
b.join("-") // "---------": a string of 9 hyphens

// Output of join() does not include square brackets or any
// delimiter around array value.

// Static functions include Array.of(), Array.from(), and
// Array.isArray() to check if an unknown value is an array:

a = [1,2,3]
Array.isArray(a) // true
Array.isArray({}) // false

