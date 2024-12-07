import React,{useState} from "react"
function Count(){
    const [count,setCount]=useState(0);
    const increment=()=>{
        setCount(count+1);
    }
    const decrement=()=>{
        setCount(count-1);
    }
    const reset=()=>{
        setCount(0);
    }
    return(<div className="counter-container">
        <p className="count-display">{count}</p>
        <button onClick={increment} className="c-button">increment</button>
        <button onClick={decrement} className="c-button">decrement</button>
        <button onClick={reset} className="c-button">reset</button>

    </div>)
}
export default Count