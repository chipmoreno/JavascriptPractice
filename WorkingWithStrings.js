s.length // Length of string

let s = "Hello, world";
s.substring(1,4) // 2nd, 3rd, 4th characters
s.slice(1,4) // Same as above
s.split(", ") // splitting into ["Hello", "world"] at delimiter string
s.indexOf("l") // Index of first letter 1 (2)
s.indexOf("1", 3) // Position of first "l" at, or after, 3rd position (3)
s.indexOf("zz") // returns -1: string s does not include substring "zz"
s.lastIndexOf("l") // 10 - position of final letter l
s.startsWith("Hell") // True: string does start with hell
s.endsWith("!") // False - s doesn't end with !
s.includes ("or") // True - s includes substring "or"
s.replace ("llo", "ya") //s is now "Heya, world!"
s.toLowerCase() // s is now hello, world
s.toUpperCase() // self explanatory
s.toLowerCase() // same as above
s.normalize() // Unicode NFC Normalization: ES6
s.normalize("NFD") // Different type of normalization
s.charAt(0) // H: First char
s.charAt(s.length-1) // "d" - the last char
s.charCodeAt(0) // 72 - 16-bit number at specified position 0
s.codePointAt(0) // Also 72, handles mroe chars than above
"x".padStart(3) // add spaces on the left - "   x"
"x".padEnd(3) // returns "x   "
"x".padStart(3, "*") // returns "**x", add stars to meet length of 3
"x".padEnd(3, "*") //returns "x**", self explanatory

" test ".trim() // remove space at beginning and end
" test ".trimStart() // remove spaces at left "test  "
" test ".trimEnd() // remove spaces at  right"  test"

s.concat("!") // Concatenates at end "Hello, world!"
"<>".repeat(5) // Concatenates N copies of specified: "<><><><><>""

let x = "hello, world";
x[0] // this is "h"
x[x.length-1] // this is d

// Strings can also be delimited with backticks:

let a = `hello world`;

// Practicing with Template Literals:

let man = "Bill";
let greeting = `Hello ${ man }. `; // greeting = "Hello Bill.""

// Pattern Matching

// test() is a regex method that can be used 

// (Regex Pattern desired to match).test(Test to check)

let text = "testing: 1, 2, 3";
let pattern = /\d+/g;
pattern.test(text) // True: A match exists.
//  \d being one or more digits, g being globally

text.search(pattern) // 9: position of first digit match
text.match(pattern) // ["1", "2", "3"] array of all matches
text.replace(pattern, "#")
text.split(/\D+/) 

// Split method divides string 
// into array of substrings based on Regex pattern
// \D: any character not a digit
// + quantiifer means one or more (non digit chars) 

let text2 = "abc123def456ghi789";
let result = text.split(/\D+/);
// Result = ["", "123", "456", "789"]
// The 1st element is empty string because
// the string starts with non digit characters,
// which are matched and used as the first delimiter