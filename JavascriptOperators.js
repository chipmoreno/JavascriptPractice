let x = 1;
x++; // Pre or post-increment - in this case, pre-increment
x--; // Pre or post-decrement, here, post decrement
x = x-1; //negate number
x = x+1; // add to number

x = 5;
invertedX = ~x;

// The binary 
// representation of 5 
// is 00000000000000000000000000000101

// applying ~ operator flips each bit
// result: 11111111111111111111111111111010

xBool = true
xBool = !xBool

// ! inverts boolean

let obj = {age:25}
delete obj.age;
// obj now empty
// delete operator: deletes

typeOf(xBool); // Boolean

x = 5;
result = void(x); // result: undefined

let xPonentiate = x ** x; // x to the xthpower

x = x*x; //multiply
x = x/x; //divide
x = x%x; //remainder/moddulo

x = x + x; // add
x = x-x; //subtract
string1 = "Hello"
string2 = "world"
string3 = string1 + string2 //"Hello world"


//shift left:
x = 5; 
// Binary: 00000000000000000000000000000101
shiftLeft = x << 2;
// shifts binary x left by two positions
console.log(shiftLeft) // result 20, 
// binary 00000000000000000000000000010100


//shift right with sign extension:
x = -20; 
// Binary 11111111111111111111111111101100 
let result = x >> 2; // Shift right by 2 positions

console.log(result); // Output: -5
// Binary 11111111111111111111111111111011

// >>>: shifts bits of its first operand to 
// right by number of positions specified
// by second operand
// bits shifted off to the right are discarded
// zeros are shifted in from the left
// .

x = -20;
//Binary 11111111111111111111111111101100
x = x >>> 2;
// Shift right by 2 positions with zero extension
console.log(x) // Output: 1073741819
//binary: 00111111111111111111111111111011

x = 5;
y = 10;
x > y; // Compare: False
x < y; // Compare: True
x <= y; // Compare: True
x >= y; // Compare: false

aString = "Amazon"
bString = "Blueberry"

aString > bString // True: Compare in alphabetical order


// using instanceOf operator

class Fruit{}
class Apple extends Fruit{}
let apple = new Apple();
console.log (apple instanceof Apple); // true
console.log(apple instanceof Fruit); // true
console.log(apple instanceof Object); //true
console.log(apple instanceof Array); //false

let obj2 = {
    name: "Alice",
    age: 25
};

console.log("name" in obj); //true
console.log("age" in obj) // True
console.log("gender" in obj) // false
console.log("toString" in obj) 
// true, checks if toString 
// property exists in obj,
// returns true as toString
// is inherited from Object.prototype


// Non-Strict vs Strict Equality


console.log(5 == "5"); 
// true, number and string 
// are converted to same type
console.log(null == undefined);
 // true (null and undefined 
 // are considered equal)
console.log(0 == false); 
// true (0 is converted to 
// false)

//Strict Equality
console.log(5 === "5");
//false, not same type
console.log(null == undefined);
// false, different types
console.log(0 == false);
// false, different types



// &: bitwise AND operator

a = 5;
b = 3;
result = a & b;
console.log(result)
//output: 1
// each bit in the result is set to 1
// if bits of both a and b are 1
//otherwise it is set to 0

// bitwise XOR exclusive OR
result = a ^ b;
// each bit in result is set to 1
// if corresponding bits of a and b
// are different, otherwise set to 0

result = a | b;
//bitwise OR
// each bit in result is set to 1
// if at least one of corresponding bits
// is 1, otherwise is 0

// &&: logical AND operator
// returns true if both a and b are 
// true, otherwise false
// stops evaluating upon encountering
// "false"
let a = true;
let b = false;
console.log (a && b) //false
console.log(a && true); //true
console.log(b && true); //false

// || compute logical OR 
// returns true if at least one 
// expression is true.

console.log( a || b); // true
console.log(a || false); // true
console.log (b || false); //false

// ?? operator
// returns first operand if
// not null or undefined
//otherwise, returns second operand
// useful for providing default values

let z = null;
let q = "default"
let check = z ?? q; 
// Choose first defined operand
console.log(check) 
//Output: default
z = "defined value"
console.log(check)
//output: "defined value"

// ?: ternary operator
// choose between 2 values
// based on condition

//Evaluates condiiton and returns
// one of two values based on if 
//condition is true or false

x = 10;
y = 20;
let comparison = x > y ? "x greater" : "y greater/equal";
console.log(comparison)
//output: y greater or equal

x = x+1; // = assignment operator
x **= x+1; // Operate and assign
x *= x+1; // operate and assign
x /= x +1; // operate and assign
x %= x+1; //operate and assign

// also +=, -=, &=, ^=, |=, 
// <<=, >>=, >>>=.

// ',' comma operator
a =1;
b=2;
result = (a++, b++);
console.log(result) // Output: 2
// b does not increment until after return
// comma skips over a, returns value of last expression
