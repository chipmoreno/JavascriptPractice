let s = new Set();
let t = new Set([1,s]);
// any iterable object including other Set is allowed
let unique = new Set("Mississippi");
unique.size // 4 elements m,i,s,p
s.delete(s)
s.delete(s)
s.delete(s)
s.delete(s)

// in practice, most important thing is to not add and remove 
// elements from sets, but to see if they are a member

let oneDigitPrimes= new Set([2,3,5,7]);
oneDigitPrimes.has(2);
oneDigitPrimes.has(4);
sum = 0;
for(let p of oneDigitPrimes){
    sum+=p;
}
console.log(sum)
