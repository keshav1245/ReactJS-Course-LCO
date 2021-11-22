import React, {useState} from 'react';
import './App.css'

const App = () => {

    const [count, setCount] = useState(0) // [count, setCount] implies name of the state variable, function that will mutate the variable
                                        // 0 is the initial value
    return(
        <div className="App">
            <header>
                <h1>Counter App using State/hooks</h1>
            </header>
            <h2>Current Value of Count is : {count}</h2>
            <button onClick={()=>setCount(0)} > Reset Counter</button>
            <button onClick={()=>setCount(count + 1)} >Increment Counter</button>
            <button onClick={()=>setCount( count - 1 < 0 ? 0 : count - 1 )} >Decrement Counter</button>
        </div>
    )

}

export default App