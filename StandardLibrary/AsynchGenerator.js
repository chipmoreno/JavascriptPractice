function elapsedTime(ms){
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function* clock(inteval, max=Infinity){
    for(let i = 1;i<=max;i++){
        await elapsedTime(interval);
        yield i;
    }
}

async function(test){
    for await(let i of clock(300,100)){
        console.log(i)
    }
}

