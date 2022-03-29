// const h1 =  React.createElement(
//     "h1",
//     {
//         className: "heading-1",
//         title: "This is heading 1"
//     },
//     "Heading 1");

// const p = React.createElement("p", null, "Đây là nội dung của thẻ P");

// const div = React.createElement("div", null, h1, p)
// console.log(div)
// const container =  React.createElement(React.Fragment , null, h1, p)
// const ul = React.createElement(
//         "ul",
//         {
//             className: "menu"
//         },
//         React.createElement("li", { className:"menu-item"}, "Bia"),
//         React.createElement("li", { className:"menu-item"}, "Nước ngọt"),
//         React.createElement("li", { className:"menu-item"}, "Nước ép"),
//         )
// ReactDOM.render(ul, document.querySelector("#root"))

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

// JSX ~ JavaScript XML 
// XML/ HTML

// Component
// Hook
// 1. function component
// 2. class component

const drinks = [
    "Bia",
    "Nước ngọt",
    "Nước ép",
    "Nước có ga"
]
// let ulReact = (
//     <ul className="menu">
//         {
//             drinks.map( (drink, index) => 
//                 <li 
//                     style={{
//                         color:"white",
//                         backgroundColor: "green"
//                     }}
//                     key={index} 
//                     className="menu-item"
//                     onClick = {() => alert(drink)}
//                 >{drink}</li>
//             )
//         }
//     </ul>
// )
// ReactDOM.render(ulReact, document.querySelector("#root"))

// function List({data, color, children}){
//     console.log(children)
//     return (
//         <ul>
//             {
//                 data.map((drink, index) => (
//                     <li style ={
//                         {
//                             color: color
//                         }
//                     } key={index}>{drink}</li>
//                 ))
//             }
//         </ul>
//     )
// }
// ReactDOM.render(<List data={drinks} color="red">My List</List>, document.querySelector("#root"))

// class List extends React.Component {
//     render() {
//         return (
//             <ul>
//                 {
//                     this.props.data.map((drink, index) => (
//                         <li style={
//                             {
//                                 color: this.props.color
//                             }
//                         } key={index}>{drink}</li>
//                     ))
//                 }
//             </ul>
//         )
//     }
// }

// ReactDOM.render(<List data={drinks} color="red" />, document.querySelector("#root"))

// One way binding
// Two way binding

function Input({ type, placeholder, onInput }){
    return (
        <input 
            type = {type} 
            placeholder={placeholder}
            onInput = {onInput}
         />
    )
}

function handleInput(e){
    console.log(e)
}
ReactDOM.render(<Input 
                    type="text" 
                    placeholder="Enter name..."
                    onInput = {handleInput} />, 
                document.querySelector("#root"))

function f2(a){

}
function f1(a){
    f2(a)
}