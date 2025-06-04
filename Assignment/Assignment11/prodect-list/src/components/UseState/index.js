import React from 'react'
import { useState } from 'react'

const UseState = () => {
    const [Count, setCount] = useState(0);
    const [showdecri, setShowdecri] = useState(false);

    const handleClick = (value) => {

        console.log(value);
        console.log(Count);
        if (Count <= 1) {
            setShowdecri(true);
        } else {
            setShowdecri(false);
        }
        setCount(Count + value);
    }
    
    return (
        <div style={{ margin: '20px' }}>
            <h1>UseState</h1>
            <p>useState is a React Hook that allows you to add state to functional components. It returns an array with two elements: the current state value and a function to update that value.</p>
            <p>Example:</p>
            <pre>
                {`const [count, setCount] = useState(0);`}
            </pre>
            <p>In this example, count is the current state value, and setCount is the function used to update it.</p>
            <p>To update the state, you can call setCount with the new value:</p>

            Example:
            <h1>Counter</h1>
            <p>Current Count: {Count}</p>
            <button onClick={() => handleClick(1)}>Increment </button>
            {/* {
                showdecri && (<button onClick={() => handleClick(-1)}>Decrement</button>)
            } */}
            {
                
                    showdecri ? (<button onClick={() => handleClick(-1)}>Decrement</button>) : (<button disabled>Decrement</button>)
                
            }

            <button onClick={() => handleClick(-Count)}>Reset</button>
        </div>
    )
}

export default UseState