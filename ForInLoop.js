// For/In Loop works with any object after the in
// Loops through property names of specified
// object

for (let p in o){
    console.log(o[p])
} // Assign property names of o to variable p

let o = { x: 1, y: 2, z: 3};
let a = [], i = 0;
for (a[i++] in o) /* empty */ ;

