import { useState } from "react"

const Counter = () => {
    // useState hook so we can use state value 
    // access the value with 'num' update the value with 'setNum'
    const [num, setNum] = useState(0)

    // my addOne function to update the value of num
    // with the 'setNum' function
    let addOne = () => {
        setNum(num + 1)
    }

    return (
        <div>
            <h1>Counter</h1>
            {/* passing a function reference */}
            <button onClick={addOne}>+</button>
            <h2>{num}</h2>
            {/* using an anonymous function to pass a value */}
            {/* updating by using the 'setNum' function */}
            <button onClick={() => setNum(num - 1)}>-</button>
        </div>
    )
}
export default Counter