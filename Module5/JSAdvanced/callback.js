// CallBack
// 1. Nó phải là 1 function
// 2. Phải được truyền như 1 đối số/ tham số vào 1 hàm khác
// 3. Phải được thực thi

function callBack() {
    console.log("hello from inside callback")
}

function executor(paras) {
    paras()
}

executor(callBack)


let numbers = [3, 4, 5, 6, 7, 8, 9, 9, 0];
// function process (number) {
//     return number * 2;
// }
// let result = numbers.map(process)
Array.prototype.map2 = function (callBack) {
    let array = [];
    for (let i = 0; i < this.length; i++) {
        array.push(callBack(this[i]))
    }
    return array;
}

function handleMap(number){
    return number * 2;
}
let result = numbers.map2(handleMap)

// let result = numbers.map2(function(number) {
//     return number * 2;
// })
// console.log(result)


// console.log(numbers.includes(91))

// Array.prototype.includes2 = function(number){
//     for(let i=0; i< this.length ;i++){
//         if(this[i] === number)
//             return true;
//     }
//     return false;
// }

// console.log(numbers.includes2(91))

let arr = numbers.filter(function(number){
    return number > 8;
})

console.log(arr)
