import { useState } from "react"

const If = () => {
    const [error, setError] = useState(false)

    if(error){
        return <Error />
    }
    return (
        <div>
            <h1>my list</h1>
            <ul>
                <li>lord of the rings - the fellowship of the ring</li>
                <li>lord of the rings - two towers</li>
                <li>blade runner</li>
            </ul>
            <button
                onClick={() => setError(true)}
            >hit for error</button>
        </div>
    )
}

const Error = () => {
    return (
        <div>
            <p>there has been an error</p>
        </div>
    )
}
export default If