import React, { useEffect } from "react";

function MyComponent(){
    useEffect(()=>{
        console.log("App Component is mounting ....")
    },[])

    return (
        <div>
            Hey, there!
        </div>
    );
}

export default MyComponent;