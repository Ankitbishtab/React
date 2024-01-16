import React,{useState} from 'react'

function MyComponent2(){
    const [foods,setFoods] = useState(["Apple","Orange","Banana"]);

    function handelAddFood(){
        const newfood = document.getElementById("foodInput").value;
        document.getElementById("foodInput").value = "";

        setFoods(f=> [...foods,newfood]);
    }

    function handelRemoveFood(index){
        setFoods(foods.filter((elemet,i) => i !== index));
    }

    return(
        <div>
            <h2>List of food</h2>

            <ul>
                {foods.map((food,index)=>
                <li key={index} onClick={()=>handelRemoveFood(index)}>
                    {food}</li>)}
            </ul>
            <input type="text" id="foodInput" placeholder="Enter food name"/>
            <button onClick={handelAddFood}>Add food</button>
        </div>
    );

}

export default MyComponent2;