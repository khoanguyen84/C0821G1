import React from "react"
import ReactDOM from "react-dom"
function App(){
    return (
        <div style={{backgroundColor:"green", color:"white"}}>
            <h1>Xin chào anh em F8!</h1>
            <h2>Anh em codegym học F8</h2>
        </div>
    )
}

ReactDOM.render(<App/>, document.querySelector('#root'))