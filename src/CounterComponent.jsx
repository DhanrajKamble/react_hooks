import React, { useState } from "react";

function CounterComponent(){
    const [count, setCount] = useState(0);
    console.log("Hello", count);

    return (
        <div>
            <p>Count is {count}</p>
            <button onClick={()=>setCount(count+1)}>InCrement</button>
            <button onClick={()=>setCount(count-1)}>DeCrement</button>
        </div>
    );
}


export default CounterComponent;