// useState
// callback
import { useState } from 'react'

// const orders = [100, 200, 300, 400]
// function App() {
//   // const totalAmount = orders.reduce((total, amount) => total + amount)
//   // console.log(totalAmount)
//   const [counter, setCounter] = useState(() => {
//     const totalAmount = orders.reduce((total, amount) => total + amount)
//     console.log(totalAmount)
//     return totalAmount;
//   })
//   const handleIncrease = () => {
//     setCounter(prevCount => prevCount + 1)
//   }

//   return (
//     <div style={{ padding: 30 }}>
//       <h1>{counter}</h1>
//       <button onClick={handleIncrease}>Increase</button>
//     </div>
//   );
// }

// one-way binding
// two-way binding

// function App(){
//   const [name, setName] = useState("");
//   const [password, setPassword] = useState("");
//   const handleLogin = () => {
//     console.log({
//       name: name,
//       password: password
//     })
//     setName("")
//     setPassword("")
//   }
//   return (
//     <div style={{padding: 30}}>
//       <input 
//         value={name}
//         onChange={(e) => setName(e.target.value)}
//       />
//       <br/>
//       <input 
//         value={password}
//         type="password"
//         onChange={(e) => setPassword(e.target.value)}
//       />
//       <br/>
//       {/* <button onClick={() => setName("Hữu Trần")}>Change Name</button> */}
//       <button onClick={handleLogin}>Login</button>
//     </div>
//   )  
// }

function App(){
  const [info, setInfo] = useState({
    name: "khoa",
    gender: "male",
    email: "khoa@gmail.com"
  })

  const handleAddInfo = () => {
    // setInfo({
    //   ...info,
    //   "dob" : "10/10/2000"
    // })
    setInfo(prev => {
      
      return {
        ...prev,
        "dob" : "10/10/2000"
      }
    })
  }
  return (
    <div>
      <h1>{JSON.stringify(info)}</h1>
      <button onClick={handleAddInfo}>Add Info</button>
    </div>
  )
}
export default App;
