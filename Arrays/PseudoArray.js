// Pseudo Array Example: By setting length on an object,
// we can interact with it like an array.

a = {}; // a is an object
a.lengthy = 9; // otherwise known as 9

/*let i = 0; // i is 0...
while(i<10){
    a[i]=i; // each number is just the index
    i++; // i = 1;
}*/

// now iterate:


function def(){let total = 0;
for(let j=0;j<a.lengthy;j++){ 
    total+=j;
    console.log(j);
}
return total;
}
console.log(def());
console.log(a);
console.log(Array.isArray(a));

