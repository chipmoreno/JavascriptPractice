async function printStream(stream){
    for await (let chunk of stream){
        console.log(chunk)
    }
}

