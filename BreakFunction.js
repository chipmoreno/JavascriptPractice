for(let i = 0; i < a.length; i++){
    if (a[i] === target) break;
}

//break can also be followed by statement label 
// break labelname; 
// in this case it terminates enclosing statement with 
// specified label
// .

let matrix = getData();
let sum = 0, success = false;
computeSum: if (matrix) {
    // computeSum can be broken with break
    // or continued with continue
    for(let x = 0; x < matrix.length; x++){
        let row = matrix[x];
        if (!row) break computeSum;
        for(let y = 0; y < row.length; y++){
            let cell = row[y];
            if (isNaN(cell)) break computeSum;
            sum += cell;
        }
    }
    success = true;
}

// Break statements jump here if if success = false