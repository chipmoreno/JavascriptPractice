function DataBase(){
    return 42;
}
let {proxy, revoke} = Proxy.revocable(DataBase, {});
console.log(proxy());
revoke();
proxy();