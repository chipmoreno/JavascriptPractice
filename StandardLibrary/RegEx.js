let pattern = /s$/;
// matches any string ending in s

let pattern2 = new RegExp("s$");
// equivalent

let pattern3 = /s$/i;
// case insensitive matching with i param, S or s

let pattern4 = /[^abc]/ 
// Matches any one character other than a,b,c

pattern4 = /[a-z]/ // Any one lower char from Latin alphabet
pattern5 = /[a-zA-Z0-9]/ 
// Any one char from Latin alphabet or digit
// \s matches space, tab, or any other whitespace char
// \S matches any NOT whitespace

// {n,m} match previous item at least n times but no more than
// m times

// ? matches zero or one occurences of previous item
let r = /\d{2,4}/; // Match between two and four digits
r = /\w{3}\d?/; // Match exactly three word characters and an
// operational digit
r = /\s+java\s+/; // match"java" with one or more spaces before/after
