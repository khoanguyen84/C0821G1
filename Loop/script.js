// for(let i=1;i<=10;i++){
//     document.write(`${i}<br>`);
// }

// let i=1;
// for(;i<=10;i++){
//     document.write(`${i}<br>`);
// }
// alert(i);

// let i=1;
// for(;i<=10;){
//     document.write(`${i}<br>`);
//     i++;
// }

// let n = 10;
// for(let i=n;i >= 1;i--){
//     document.write(`${n - i + 1}<br>`);
// }

// for(let i=1;i<=10;i++){
//     if(i%2==0){
//         document.write(`${i}<br>`);
//     }
// }
// for(let i=2, total = 0; i<=10;i+=2){
//     total += i;
//     document.write(`${i}<br>`);
// }

// for(let i=2, total = 0; total <=15 && i<=10;i+=2){
//     total += i;
//     document.write(`${i}<br>`);
// }

// for(let i=2, total = 0; i<=10;i+=2){
//     if(total >= 15){
//         break;
//     }
//     total += i;
//     document.write(`${i}<br>`);
// }

// for(let i=1;i<=10;i++){
//     if(i%2 != 0){
//         continue;
//     }
//     document.write(`${i}<br>`);
// }
// let i= 1;
// for(;;){
//     if(i > 10){
//         break;
//     }
//     document.write(`${i}<br>`);
//     i++;
// }

// let i=11;
// while(i<=10){
//     document.write(`${i}<br>`);
//     i++;
// }

// let i=11;
// do{
//     document.write(`${i}<br>`);
//     i++;
// }
// while( i <= 10);

let number = Number(prompt("Enter number:"));
while(number != 0){
    document.write(`${number} <br>`);
    number = Number(prompt("Enter number:"));
}


function sum(number1, number2) {
    return number1 + number2;
}

function process(operator){
    let result;
    if(operator == 'cong'){
        number1 = 5;
        number2 = 7;
        result = sum(number1, number2);
    }

    
}