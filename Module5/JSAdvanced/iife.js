// "use strict"
// strict mode

// Declareration Function
// console.log(sum(5, 7))
function sum(n1, n2) {
    return n1 + n2;
}
// Expression Function
let sum2 = function(n1, n2){
    return n1 + n2;
}
// console.log(sum2(6,7))
// // Anonymous Function
// let array = [1,2,3,4,5];
// let result = array.reduce(function(total, value){
//     return total + value;
// })
// console.log(result)

// copy mã nguồn ctrl + alt + arrows key
// copy mã nguồn alt + arrows key
// for (i = 0; i < 10; i++) {
//     console.log(i)
// }
// console.log(i)
// scope
// Global
// Local
// Block code
var number = 1;
{
    let number = 10;
    console.log(number)
    {
        let number = 20;
        console.log(number)
        {
            {
                console.log(number)
            }
        }
    } 
}
console.log(number)

(function(){
    console.log("Hello")
})()

// function hello(){
//     console.log("Hello")
// }

// hello()

// (function (){
//     console.log("Hello")
// })()

// IIFE ~ Immediately Invoked Function Expression
// Bước 1: tạo function
// Bước 2: thực thi/ gọi function
// gộp 2 bước trên thành 1?

// function subtract(n1, n2){
//     console.log(n1 - n2);
// }
// subtract(7,5)

(function(n1, n2){
    console.log(n1 - n2);
})(7,5)
// (function(){
//     let a = 6;
//     if(a%2==0){
//         console.log("is even number")
//     }
//     else{
//         console.log("is odd numer")
//     }
// })()

console.log(5,7,8,8,9,0,0,8,8)