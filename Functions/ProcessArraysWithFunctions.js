let data = [1,1,3,5,5];
let total = 0;
for(let i = 0; i < data.length; i++) 
    total += data[i];
let mean = total/data.length;

total = 0;
for(let i = 0; i < data.length;i++){
    let deviation = data[i] - mean;
    total+=deviation*deviation;
}

let stddev = Math.sqrt(total/(data.length-1));

// We can perform same computation in concise style
// using map and reduce

const sum = (x,y) => x+y;
const square = x => x*x;

data = [1,1,3,5,5];
mean = data.reduce(sum)/data.length;
deviations = data.map(x => x.mean);
stddev = Math.sqrt(deviations.map(square).reduce(sum) /(data.length-1));


