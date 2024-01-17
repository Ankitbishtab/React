import { setSelectionRange } from "@testing-library/user-event/dist/utils";
import React,{useState,useEffect} from "react";
function MyComponent(){
    const [Count, setCount] = useState(0);
    
    function addCount() {
        setCount(c => c+1);
    }
    function subCount(){
        setCount(c => c-1);
    }
    useEffect( () => {
        document.title = Count;
    },[Count])
    
    return(
        <div>
            <p>count: {Count}</p>
            <button onClick={addCount}>Add Count</button>
            <button onClick={subCount}>Subtract Count</button>

            <p>the title of this doc will change whenever the component will render</p>
        </div>
    );
}

export default MyComponent;