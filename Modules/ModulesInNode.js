// In Node, it is normal to split programs into as many files
// as seems natural. 

// Each file is an independent module with a private namespace.
// Node modules import other modules with the require() function
// and export their public API by setting properties of the Exports
// object, or by replacing module.exports object entirely.

const sum = (x, y) => x + y; const square = x => x * x;
exports.mean = data => data.reduce(sum)/data.length; 
exports.stddev = function(d){
    let m = exports.mean(d);
    return Math.sqrt(d.map(x => x - m).map(square).reduce(sum)/(d.length-1));
};

// Defining module exporting single function/class:

module.exports = class Bitset extends AbstractEnumerableSet{};

// Define all functions, public and private

module.exports = { mean, stddev }

