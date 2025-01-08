for(let count = 0; count < 10; count++) { console.log(count);
}

let i, j, sum = 0;
for(i = 0, j = 10; i < 10; i++, j--){
    sum += i * j;
}

function tail(o){ // Returns tail of linked list o
    for (; o.next; o =  o.next) /* empty */ ; //Traverse while o.next is truthy
    return o;
}

