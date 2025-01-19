// equivalent:

package.then(null, c);
package.catch(c);

fetch("/api/user/profile").then(response =>{
    if(!response.ok){
        console.log("Null")
        return null;
    }
    let type = response.headers.get("content-type");
    if (type !== "application/json"){
        throw new TypeError(`Expected JSON, got ${type}`);
    }
    return response.json();
})
.then(profile => {
    if (profile){
        displayUserProfile(profile);
    }
    else{
        displayLoggedOutProfilePage();
    }
})
.catch(e => {
    if (e instanceof NetworkError){
        displayErrorMessage("Check internet");
    } else if (e instanceof TypeError){
        displayErrorMessage("server error");
    } else {console.error(e); // unanticipated error
}
});