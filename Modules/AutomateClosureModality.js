// Tool taking set of files, wrapping content of each files
// within immediately invoked function expression, keeps track of
// return value of each function, concatenates into one file

const modules = {};
function require(moduleName) { return modules[moduleName]; }
modules["sets.js"] = (function(){
    const exports = {};
    exports.BitSet = class BitSet{};
    return exports;
}());

modules["stats.js"] = (function(){
    const exports = {};
    const sum = (x, y) => x + y;
    const square = x => x * x;
    exports.mean = function(data) { }; 
    exports.stddev = function(data) {};
    return exports; 
}());