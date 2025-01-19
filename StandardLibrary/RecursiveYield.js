function* sequence(...iterables){
    for (let iterable of iterables){
        for(let item of iterable){ yield item;
        }
    }
}

console.log([...sequence("xywsdz")])