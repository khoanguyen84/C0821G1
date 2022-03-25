const h1 =  React.createElement(
    "h1",
    {
        className: "heading-1",
        title: "This is heading 1"
    },
    "Heading 1");

const p = React.createElement("p", null, "Đây là nội dung của thẻ P");

// const div = React.createElement("div", null, h1, p)
// console.log(div)
const container =  React.createElement(React.Fragment , null, h1, p)
ReactDOM.render(container, document.querySelector("#root"))

// Destructuring
// let numbers = [10, 20, 30];
// let n1 = numbers[0];
// let n2 = numbers[1];
// let n3 = numbers[2];
// let [n1, n2, n3] = numbers;

// const khoa = {
//     fullname: "khoa",
//     age: 18,
//     gender: true,
//     email: "khoa.nguyen@codegym.vn",
//     hello: function () {
//         console.log("Hello")
//     },
//     greeting: function () {
//         console.log("Greeting")
//     }
// }
// // let fullname = khoa.fullname;
// // let email = khoa.email;
// let { fullname, email } = khoa;
// // console.log(fullname)
// // console.log(email)

// let { hello, greeting } = khoa;
// hello();
// greeting();