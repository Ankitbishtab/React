import React,{useState} from "react";

function Cars(){
    const [cars,setCars] = useState([]);
    const [carYears, setCarYear] = useState(new Date().getFullYear());
    const [carMake, setCarMake] = useState("");
    const [carModel, setCarModel] = useState("");

    function handleAddCar(){
        const newcar = {year: carYears, make: carMake, model: carModel};

        setCars(c => [...c, newcar]);

        setCarMake("");
        setCarModel("");
        setCarYear(new Date().getFullYear());
    }
    function haldleRemoveCar(index){
        setCars(c => c.filter((element,i) => i !== index))
    }
    function handelMakeChange(event){
        setCarMake(event.target.value)
    }
    function haldleYearChange(event){
        setCarYear(event.target.value)
    }
    function handelModelChange(event){
        setCarModel(event.target.value)
    }

    return(<>
        <h2> List of cars object</h2>
        <ul>
            {cars.map((car,index) => <li key={index}
            onClick={ () => haldleRemoveCar(index)}>
                {car.year} {car.model} {car.make}</li>)}
        </ul>

        <input type="number" value = {carYears} onChange={haldleYearChange}/> <br/>
        <input type="text" value = {carMake} onChange={handelMakeChange}
            placeholder="enter car make"/> <br/>
        <input type="text" value = {carModel} onChange={handelModelChange}
            placeholder="enter car model"/> <br/>
        <button onClick={handleAddCar}>Add car</button>

    </>)
}

export default Cars;