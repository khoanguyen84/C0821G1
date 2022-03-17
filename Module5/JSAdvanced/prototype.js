class Student{
    constructor(fullname, age, gender){
        this.fullname = fullname;
        this.age = age;
        this.gender = gender;
    }
    greeting(){
        return `I am ${this.gender ? "Mr" : "Ms"}. ${this.fullname}`;
    }
}

Student.prototype.email = "khoa@gmail.com"

Student.prototype.getAge = function(){
    return this.age;
}

// let hoang = new Student("Hoàng", 18, true)
// console.log(hoang.email)

let array = [1,2,3,4,5];
let array2 = [10,20,30,40,50];
Array.prototype.join2 = function(msg, separator=",") {
    let str = "";
    for(let i=0; i<this.length; i++){
        if(i != this.length - 1){
            str += `${this[i]}${separator}`
        }
        else{
            str += `${this[i]}`
        }
    }
    return str;
    // return `${msg}:${this.join(separator)}`;
}

console.log(array2.join2("result","+"));

// polyfill

if(Array.prototype.includes2 != "function"){

}

let $ = document.querySelector.bind(document);
// console.log(document.querySelector("#heading-1").innerText)
console.log($("#heading-1").innerText)