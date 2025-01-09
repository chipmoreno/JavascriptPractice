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

