function printArray(a) {
    let len = a.length, i = 0; if (len === 0) {
    console.log("Empty Array"); } else {
    do { console.log(a[i]);
    } while(++i < len); }
    }

printArray([1, 2, 3, 4])