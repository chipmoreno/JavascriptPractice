fetch("/api/users/current")
.then(response=>response.json())
.then(currentUser=>{displayUserInfo(currentUser);
});

async function isServiceRead(){
    let response = await fetch("api/service/status");
    let body = await response.text();
    return body === "ready";
}
