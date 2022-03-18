const promise = new Promise(
    //logic
    function (resolve, reject) {
        if(true)
            resolve("excuter resolve")
        else
            reject("excuter reject")
        // resolve(1)
    }
)
// promise chain
promise
    .then(function(number){
        console.log(number)
        return ++number;
    })
    .then(function(number){
        console.log(number)
        return ++number;
    })
    .then(function(number){
        console.log(number)
        return ++number;
    })
    .then(function(number){
        console.log(number)
        return ++number;
    })
    .catch(function(error){
        console.log(error)
    })
    .finally(function(){
        console.log("call finally")
    })

// fetch
