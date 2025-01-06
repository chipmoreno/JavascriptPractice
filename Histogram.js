class DefaultMap extends Map{ // Instantiates class Default Map, which extends Map.
    constructor(defaultValue){ // Defining a constructor 
    // based on the super constructor of Map, 
    // but this constructor accepts and saves a default value
        super(); // This constructor will be 90% based on super 
        // constructor of map.
        this.defaultValue = defaultValue; // But the default value accepted
        // in the constructor will be saved.
    }

    get(key){ // Overriding get() method of map.
        if (this.has(key)){ // Method checking if DefaultMap instance
            // contains a specified key, using the has() method,
            // inherited from Map class.
            return super.get(key); // If key exists, retrieve 
            // value using super.get (key).
        }
        else{
            return this.defaultValue; // Else, return default value.
        }
    }
}

class Histogram{ // Defining new class Histogram.
    constructor(){ // Defining default constructor...
        this.letterCounts = new DefaultMap(0); // New property
        // "letterCounts" of Histogram. It's a new DefaultMap
        // with a default key of 0.
        this.totalLetters = 0; // New property of Histogram, totalLetters.
        // It's just an integer set to 0.
    }

    add(text){ // Defining "add" method within Histogram class
        //that accepts a string parameter 'text'.
        text = text.replace(/\s/g, "").toUpperCase();

        // Explaining characters within (/\s/g, ""):

        // /: delimiter that starts regular expression

        // \s: backslash is escape character that signals following
        // character should be interpreted specially. s represents
        // "whitespace" character in Regex. Matches any whitespace
        // including spaces, tabs, newlines.

        // /: This delimiter ENDS regular expression. So, total 
        // regular expression is /\s/, which is searching for 
        // whitespace character. 

        // g: g stands for global, meaning regular expression
        // should match all occurences of whitespace characters
        // in the string, not just the first one.

        // The comma separates the two arguemnts passed to the 
        // replace() method. 1st argument being regex /\s/g,
        // second argument being value that will replace matched text.

        // "" represents an empty string: every whitespace
        // character matched by /\s/g will be replaced with nothing
        // effectively removing them

        // .toUpperCase(): After removing whitespace, text is 
        // converted to Upper Case

        for (let character of text){

        //Begins for loop iterating over each character in text string
        // let character - creates variable character that will hold
        // each individual character from the text string, one by one
        // of: used to iterate over iterable ojects such as strings
        // or arrays, allows access to each item in the collection

        // So, the loop will run once for each char in string text.

        // Text is a string - strings are iterable -
        // the name character could be named anything, 
        // Javascript knows a String is iterable.

            let count = this.letterCounts.get(character);
            // let count: Instantiates Count.
            // this.letterCounts = this is an instantiation
            // of DefaultMaps that exists within every
            // Histogram class.
            // .get(character) - calls get method within
            // DefaultMap. If DefaultMap has that character as a key,
            // it will return the corresponding value.
            
            // If not: it returns the default value.
            // letterCounts default value was set as 0.

            this.letterCounts.set(character, count+1);

            // Calls Set method of Default Map, inherited from Map
            // set(x, y): set method accepts a key and a new value
            // In this case, set accepts the current character 
            // we are iterating over in the text string as a key,
            // and count+1 as the new value. On the first iteration,

            // .get(character) will return the default value of 0.
            // So, this method will be setting the value for character
            // as 1 on the first iteration

            // If the method iterates over that character again,
            // count would be set to 1 + 1.
            this.totalLetters++;

            // totalLetters, originally an interger set to 0, 
            // is incremented once.
            
        } // This marks the end of "for (let character of text)"
            // The method would repeat for each character of 
            // the given string.
    }

    toString(){ // Defining new method of Histogram class: toString()
        let entries = [...this.letterCounts]; 
        // Creates Entries, an array. 

        // [] defines an array.

        // "..." is the spread operator. It converts a map
        // into an array. When applied to a Map, it turns
        // map's entries into array with [key, value] pairs.

        // this.letterCounts is our Histogram class instantiation
        // of DefaultMap. After iterating over a string of text
        // using add(text), it would have keys for each character
        // within that string, and the values for those keys
        // would correspond to the number of occurences of that
        // character within the string.

        // Thus, entries is now a new array, converted from a map
        // using the ... spread operator, of the local instantiation
        // of DefaultMap, containing keys (characters gathered from
        // add(text) method) and values (number of occurences of 
        // those chars). )

        entries.sort((a,b) => {
            // The array is first sorted by frequency 
            // (a[1] vs. b[1]), from highest to lowest
            // 
            // If two elements have the same frequency, they are then 
            // sorted alphabetically by their letter (a[0] vs. b[0])
            // 
            // Example [ ['C', 8], ['E', 8], ['D', 5], ['A', 5], ['B', 3] ]
            // 
            // First step: compare frequency values ['C', 8] & ['E', 8]
            // Values are frequency sorted already, so move on to alphabetic
            //sorting

            // Alphabetic values
            // The only swap that would occur alphabetically would be
            // D and A, as they are the same values of 5.

            // sort() is a built in Javascript method for arrays.
            // It can be used on an array in Javascript to reorder elements.
            // sort() mutates the array it is called on:
            //meaning it changes the original array's order.

            //by default, it sorts elements as strings in 
            //alphabetical order

            //Entries is an array of keys. sort()
            //works on the arrays [key, value] inside of it

            // the comparison function (a, b) => { ... } provides
            // a way to specify the exact logic for sorting, based
            // on the values of a and b

            // In this case: sort(a, b) compares the second elements
            // of each entry (a[1] and b[1]) which are the counts for
            // each letter. This determines the sorting order, by
            // the frequency of the chars within the entries array.

            // sort() couldn't be used without parameters, because
            //entries is an array of arrays, you'd need to specify
            // how to compare the elements, which are key-value pairs.

            // ['A', 5] couldn't be converted into a string that could be
            // sorted into alphabetical order. 

            // We are overriding the basic sort method which would just sort
            // strings based on alphabetical order, but we still need to define
            // what the overridden function is going to do with a and b.
            // It doesn't know by default.

            if (a[1] === b[1]){
                // sort() automatically knows to iterate through entries.
                // This is a conditional statement to check 
                //if a[1] is equal to b[1]...
                return a[0] < b[0] ? -1 : 1;
                // Compares the first element of the array a
                // with first element of array b. 
                // ? -1 : 1 is a ternary operator
                // condition ? valueifTrue: valueIfFalse
                // Thus, if a[0] <b[0], return -1
                // else, return 1
            } else{
                // If a[1] is NOT equal to b[1], return 
                // b[1] - a[1]
                return b[1] - a[1];

                // sorts entries in descending order

                // The sort() function uses these return values as 
                // the sort ranking with a fallback of 
                // alphabetic order in the case of a tie.
            }
        });

        for (let entry of entries){
            // initiates For loop, iterating over values in entries
            // entries being array of [key, value]
            entry[1] = entry[1] / this.totalLetters*100;
            //entry[1] (ie. 10 of [A, 10] = 10 * (local count of 
            // total letters * 100)
        }

        entries = entries.filter(entry => entry[1] >= 1);

        // This line uses the filter() method to modify
        // the entries array, keeping only those elemetns
        // whose second value (frequency count) is greater than
        // or equal to 1. 

        //filter() creates a new array containing only the 
        // elements that satisfy the condition specified
        // in the provided callback function. 

        // Original entries array is not modified directly
        // result of filter() is assigned back to entries.

        // (entry => entry[1] >= 1): callback function used by
        // filter(). takes key-value pair and checks if value 
        // is greater than or equal to 1.
        // >= 1: condition ensures only key-value pairs with 
        // value greater than 1 are kept in array.

        let lines = entries.map(
        // initializes new variable lines and uses map() method
        // to transform each element into formatted string.
        // entries being the key-value pairs sorted and filtered
        // with entries value less than 1 removed

        // map() function is built in JS array method 
        // creating a new array by applying a given function to 
        // each element of original array. 

        // does not mutate original array, but returns new array
        //wher each element has been transformed.

        //iterates over each element, applies callback function
        // which can return transformed value for that element,
        // result of each callback function is placed into a new array
        // that is returned by map()


        // the below defines the callback function used by map()
        // to transform entries into formatted string
        // for each entry.

        // ([l, n]): destructuring of each elements of each entry
        // in the entries array. 
        // l representing letter, n represeting count

        // `: backticks denote a template literal, allowing for 
        // embedded expressions inside of a string.
        // Template literal constructs a string by combining l
        // and a string of # symbols.

        // ${l}: inserts letter ('A')
        // ${"#".repeat(Math.round(n))}: generates string of #
        // based on n count. Math.round rounds to nearest int.

        // "#".repeat(...) repeat() method repeats # char
        // in number of times equal to rounded value of n.

        // Except math.round is redunant. 
        // How could we have 1/2 of a letter?
        // We could revise this line to `${"#".repeat(n)}`.
            ([l,n]) => `${l}: ${"#".repeat(Math.round(n))}
            ${n.toFixed(2)}%` 

            // above line continues template literal
            // $n.toFixed(2): n is the count of letter occurences
            // toFixed(2) is a method used on numbers to convert
            // them into a string, rounded to specified
            // number of decimal places, in this case 2

            // if n = 3.456, n.toFixed(2) would be "3.46"
            // if n = 3, n.toFixed(2) would be "3.00"
            // % would just be "%" to follow formatted number
            );

            return lines.join("\n"); 
            // return lines with a new line
            // A: #### 20.00%
            // B: ### 15.00%.
        }
    }

    async function histogramFromStdin(){
        // Declares Asynchronous function
        // These allow you to write code to handle operations
        // like file reading, network requests, or other
        // tasks that may take time, without
        // blocking the rest of the program from running
        // When an asynch function contains an await expression,
        // JS pauses the function execution until the awaited
        // promise resolves
        //


        process.stdin.setEncoding("utf-8");

        // Instantiate new histogram
        let histogram = new Histogram();
        console.log("Histogram instantiated");
        // process.stdin: readable stream representing standard input
        // read data entered by user or piped from other process
        for await (let chunk of process.stdin){
            console.log("Received chunk:", chunk);
            // let chunk defines variable chunk holding
            // individual chunks of data as received 
            // chunk is passed to histogram.add for processing
            histogram.add(chunk);
        }
        // return histogram;
    }


    // .then(histogram => { ... }):
    // .then() is method used to handle result of a Promise
    // when histogramFromStdin() completes and returns, 
    // then() block is executed

    // Inside the .then() block, we log the result to the    console by calling histogram.toString().
    // histogram.toString() is a method defined in the Histogram class
    // that converts the histogram into a human-readable string, 
    // showing the frequencies of letters and their 
    // relative percentages.
    histogramFromStdin().then(histogram => {
        console.log(histogram.toString()); });