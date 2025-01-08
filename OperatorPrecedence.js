let my = {
    functions: [
        function(arg) {
            return arg * 2;
        },
        function(arg) {
            return arg + 3;
        }
    ]
};

let result = my.functions[0](5); // Call the first function with argument 5
console.log(typeof result); // Output the type of the returned value