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

function sum(...rest){
    console.log(rest)
    let total = 0;
    for(let i=0; i< rest.length; i++){
        total += rest[i]
    }
    return total;
}
// sum(4,5,6,7,8,8,9,9,9,8)
let array = [4,5,6,7,8,8,9,9,9,8];
console.log(sum(array));

// function calcArray(array){

// }