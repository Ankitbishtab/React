import React,{useState} from "react";


function MyComponent(){
    const [name, setName] = useState("Name");
    const [Age, setAge] = useState(0);
    const updateName = () => {
        setName("A SQUAD");
        console.log(name)
    }
    const incrementAge = () => {
        setAge(Age + 1);
    }
    return(
        <div>
            <p>Name: {name}</p>
            <p>Age: {Age}</p>
            <button onClick={updateName}>Set Name</button>
            <button onClick={incrementAge}>increase age</button>
        </div>
    );
}
export default MyComponent