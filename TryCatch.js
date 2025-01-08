try{
    let n = Number(prompt("Enter positive int",""));
    let f = factorial(n)
    alert(n + "! - " + f);
} catch(ex){
    alert (ex);
}