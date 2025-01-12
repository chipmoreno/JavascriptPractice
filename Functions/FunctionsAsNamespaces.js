// It is at times useful to define a function to
// act as a temp namespace in which you can define variables
// without cluttering global namespace

// You may have a chunk of JS code you want to use in different
// JS programs (or for client side JS, web pages)

//  Since this code will be used in different programs, you don't
// know whether the variables it creates will conflict with 
// variables created by the programs that use it

// Solution: Put chunk of code into function and then invoke function
// That way, variables that would have been global become local to function

function chunkNameSpace(){
    // Chunk of code goes here
    //Variables defined are local to this function
    // instead of cluttering global namespace
}

// Rewriting as unnamed expression:

(function(){ //chunkNameSpace() rewritten as unnamed expression
    // Chunk of code goes here
    }()); // End function literal and invoke it now

// Defining and invoking a function in a single expression
// is used often enough that it is named "immediately invoked
// function expression"

// Leading parenthesis helps readers recognize when a function
// is being defined to be immediately invoked instead of defined
// for later use

