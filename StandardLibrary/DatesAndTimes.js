let now = new Date();
console.log(now)
let epoch = new Date(0)
console.log(epoch)

let century = new Date(Date.UTC(2100,0,1));


// timestamps

d = new Date();
d.setTime(d.getTime()+30000) // 30000 milliseconds
console.log(d)
console.log(Date.now()) // current time in milliseconds
// Above is useful for measuring how long code takes to run

startTime = Date.now();
complexArray = [129731279,248572,2387419]
temp = 0;
for (i in complexArray){
    console.log(complexArray[i])
    temp = i;
    i * temp;
    console.log(i%5);
    console.log(complexArray[i])
    temp = i;
    i * temp;
    console.log(i%5);
    console.log(complexArray[i])
    temp = i;
    i * temp;
    console.log(i%5);
    console.log(complexArray[i])
    temp = i;
    i * temp;
    console.log(i%5);
}

endTime = Date.now();
console.log(`Calculation took ${endTime-startTime} ms`)

let d = new Date();
d.setMonth(d.getMonth() + 3, d.getDate() + 14); 
// Adds 3 months, 2 weeks to current date

