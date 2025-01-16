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


z1 = /ab|cd|ef/ // matches "ab" or "cd or "ef"

z2 = /\d{3}|[a-z]{4}/ // matches either 3 digits or 4 lowercase 
// letters

z3 = /java(script)?/ // matches "java" followed by optional
// "script"

/* REGEX Flags:

g: global - find all matches within a string rather than first match

i: match case insensitives
m: multiline mode
s: . can now match any character including line terminators
u: unicode: works with emojis and other characters
y: regex is sticky

// Search() - takes regex expression argument and returns
// either the character position of the start of the first
matching substring, or -1 if htere is no match

*/

"Javascript".search(/script/ui) // => "script" begins at 4
"Python".search(/script/ui) // -1 - script does not occur

// replace() - with g flag replaces all matches with replacement
// otherwise replaces first match
// first arg is a string, not regex

// gi = global, case insensitive

//searches for javascript regardless of capitalization and replaces 
// with JavaScript
text.replace(/javascript/gi, "JavaScript");

// A quote is a quotation mark, followed by any number of
// nonquotation marks, followed by another quotation mark

let quote = /"([^"]*)"/g;
'He said "stop"'.replace(quote, '«$1»') // 'He said «stop»'

// If your RegExp uses named capture groups, you can refer to 
// matching text by name rather than by number:

let quote2 = /"(?<quotedText>[^"]*)"/g;
'He said "stop"'.replace(quote, '«$<quotedText>»')
// 'He said «stop»'

// Parsing URL RegExp

let url = /(\w+):\/\/([\w.]+)\/(\S*)/;
let text = "Visit my blog at http://www.example.com/~chip";
let match = text.match(url);
let fullurl, protocol, host, path;
if (match !== null) {
    fullurl = match[0];
    protocol = match[1];
    host = match[2];
    path = match[3];
}

// Array returned by match() also has object properties
// input: string on which match() was called: match.input
// index = position where match begins
// groups: is an object - properties match the names of the named
// groups, values are the matching text

url = /(?<protocol>\w+):\/\/(?<host>[\w.]+)\/(?<path>\S*)/;
text = "Visit my blog at http://www.example.com/~david";
match = text.match(url);
match[0] // "http://www.example.com/~david"
match.input // text
match.index // 17
match.groups.protocol // "http"
match.groups.host // "www.example.com"
match.groups.path // "~david""

// y flag set without g searches for a single match
// this match is constrained to beginning of string
// by setting lastIndex property of the RegExp object
// at the index you want to match at
// if a match is found lastIndex is updated to 
// the first char after the match
// so if you call match() again, it looks for a subsequent match


let vowel = /[aeiou]/y; // Sticky vowel match
"test".match(vowel) // null: "test" doesn't start with a vowel
vowel.lastIndex = 1; // Different match position
"test".match(vowel)[0] // "e": vowel found at position 1
vowel.lastIndex // 2: automatically updated after found
"test".match(vowel) // null: no vowel at 2
vowel.lastIndex // 0 : lastIndex reset after failed match :(

// matchAll()

// Expects Regexp, with g flag set. instead of returning
// array of matching substrings like match() does, returns an iterator
// that yields the kind of match objects that match() returns when used
// with a non-global RegExp.

words = /\b\p{Alphabetic}+\b/gu;
text = "This is a naïve test of the matchAll() method.";
for(let word of text.matchAll(words)){
    console.log(`Found '${word[0]}' at index ${word.index}.`);
}

// split()

"Hi there,mynameis,Chip".split(",") // splits into array delimited
// by comma

// RegExp() constructor - takes one or two string args
// creates new RegExp object
// First arg is a string containing body of reg expression:
// the text normally occuring between slashes
// Optional second argument containing regex flags (g,i,m,s,u,y)

let zipcode = new RegExp("\\d{5}","g");

// You can also copy a regular expression and change its flag:
let exactMatch = /Javascript/;
let caseInsensitive = new RegExp(exactMatch, "i");

// RegExp objects have the following properties:

// source: read-only, the characters within the slashes in a Reg
//Exp literal

/* flags: read-only property of flags, global: read-only boolean
if g is set, ignoreCase: boolean of if i is set, multilinbe:
read only boolean of if m is set, dotAll: read-only boolean if s is
set, unicode: read only boolean if u is set, sticky: read only 
boolean if y is set, lastIndex: read/write integer specifying
character position at which next search is to begin, use by 
exec() and test() methods*/

// test(): returns true if match, false if not
// exec(): returns null or array containing string matching,
// any subsequent array elements contain substrings that matched
// capturing groups
// returned array contains index, input, groups

pattern = /Java/g;
text = "Javascript > Java";
let match2;
while((match2=pattern.exec(text))!==null){
    console.log(`Matched ${match[0]} at ${match.index}`);
    console.log(`Next search begins at ${pattern.lastIndex}`);
}