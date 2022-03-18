// function sum(){
//     let total = 0;
//     for(let i=0; i< arguments.length; i++){
//         total += arguments[i]
//     }
//     return total;
// }
// console.log(sum(1,2,3,4,6,7,8,9,9,9))
// ...rest
// ...spread (rải)

// function sum(msg,...rest){
//     let total = 0;
//     for(let i=0; i< rest.length; i++){
//         total += rest[i]
//     }
//     return `${msg}: ${total}`;
// }
// console.log(sum("Tổng",2,3,4,6,7,8,9,9,9))

// Kiểu tham chiếu: mảng, object, function

// let a1 = [1,2,4,5,6]
// let a2 = [...a1]
// // let a2 = [1,2,4,5,6]
// // let a2 = a1;
// a2[1] = 20;
// console.log(a2)
// console.log(a1)

// let obj1 = {
//     fullname: "khoa",
//     age: 18,
//     gender : true
// }

// let obj2 = obj1;
// let obj2 = {
//     ...obj1, 
//     email: "huu@gmail.com"
// }
// obj2.fullname = "Hữu"
// console.log(obj2)
// console.log(obj1)

function sum(...rest) {
    console.log(rest)
    let total = 0;
    for (let i = 0; i < rest.length; i++) {
        total += rest[i]
    }
    return total;
}
// sum(4,5,6,7,8,8,9,9,9,8)
let array = [4, 5, 6, 7, 8, 8, 9, 9, 9, 8];
console.log(sum(array));

// function calcArray(array){

// }

class Student {
    hello() {

    }
}


// let logger = function(msg){
//     console.log(msg)
// }
// let logger = msg => console.log(msg)

// let hello = function(){
//     console.log("Hello world")
// }
// let hello = ()=> console.log("Hello world")
// hello()

// let checkEvenNumber = function(number){
//     if(number % 2 == 0)
//         return `${number} is even`
//     return `${number} is odd`
// }
// let checkEvenNumber = (number) => {
//     if(number % 2 == 0)
//         return `${number} is even`
//     return `${number} is odd`
// }

// console.log(checkEvenNumber(5))

let numbers = [3, 4, 5, 6, 7, 8, 9, 9, 0];
// let result = numbers.reduce(function(prev,curr){
//     return prev + curr;
// })
// let result = numbers.reduce((prev, curr) => prev + curr)
// let result = numbers.map(function (number) {
//     return number * 2;
// })
let result = numbers.map((number) => number * 2)
console.log(result)