import React, { useState } from  "react";
import  "./style.css"

function Likes (){
    const [counter, setCounter] = useState(0);
    return(
        <button onClick = {() => setCounter(counter +1 )}>{counter}</button>

    );
}

export default Likes;