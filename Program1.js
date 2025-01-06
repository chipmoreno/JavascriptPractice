let x;
x = 0;
x

x = 1;
x = 0.01;
x = "Hello";
x = true;
x = false;
x = null;
x=undefined;

let thingsImDoing = {
    topic: "Testing Javascript",
    time: 7
};

thingsImDoing.topic
thingsImDoing["time"]
thingsImDoing.myname = "Chip";
thingsImDoing.contents = {};

thingsImDoing.contents?.ch01?.sect1 // Undefined
    
let points = [
    {x: 0, y: 0},
    {x: 1, y: 1}
    ];

let data = {
    trial1: [[1,2],[3,4]],
    trial2: [[2,3],[4,5]]
}

points[1].x - points[0].x

let count = 0;
count++;
count--;
count += 2;
count *= 3;

let x = 2, y = 3; 

x === y
x !== y
x < y
false === (x > y) 

function plus1(x) {
    return x + 1;
}

plus1(y)

let square = function(x) {
    return x * x;
}