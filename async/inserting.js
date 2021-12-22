async function learningAsync(){
    let promise = new Promise((resolve, reject) => {
        resolve('promise is resolved');
    })
    let wait = await promise;
    console.log(wait);
    console.log("Will I be printed first or the data which promise resolves");
}

learningAsync();