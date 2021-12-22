//create a new promise
let user = "srijit"
let pr = new Promise((resolve, reject) => {
    //console.log("inside executor function")
    setTimeout(() => {
        if(user == "srijith")
        resolve(user);
        else
        reject(new Error("user is not Srijith"));
    }, 1000);
});

console.log("hi user");
pr
.then(val => console.log(val))
.catch(val => console.log(val.message));