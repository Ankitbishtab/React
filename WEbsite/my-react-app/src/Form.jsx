import React,{useState} from 'react';

function Form(){
    const [name, setName] = useState("Guest");
    
    const [quamtity, setQuantity] = useState(1);
    
    const [comment, setComment] = useState("");
    
    const [payment, setPayment] = useState("");
    
    const [shipping, SetShipping] = useState("Delivery");

    function handelNameChange(event){
        setName(event.target.value);
    }

    function handelQuantityChange(event){
        setQuantity(event.target.value);
    }
    function handelCommentChange(event){
        setComment(event.target.value);
    }
    function handelPaymentChange(event){
        setPayment(event.target.value);
    }    
    
    function handelShippingChange(event){
        SetShipping(event.target.value);
    } 

    return(<div>

        <input type="text" value={name} onChange={handelNameChange} />
        <p>Name: {name}</p>
        <input type="text" value={quamtity} onChange={handelQuantityChange} />
        <p>Quantity: {quamtity}</p>
        <input type="text" value={comment} onChange={handelCommentChange} />
        <p>Comment: {comment}</p>
        <select value={payment} onChange={handelPaymentChange} >
            <option value="">Select and options</option>
            <option value="visa">Visa</option>
            <option value="MasterCard">MasterCard</option>
            <option value="UPI">UPI</option>
            <option value="Net Banking">Net Banking</option>
        </select>
        <p>Payment: {payment}</p>
        <label>
            <input type="radio" value="Pick Up" 
            checked = { shipping === 'Pick Up'}
            onChange={handelShippingChange} />
            Pick Up
        </label>
        <label>
            <input type="radio" value="Delivery" 
            checked={shipping === 'Delivery'}
            onChange={handelShippingChange} />
            Delivery
        </label>
        <p>Shipping: {shipping}</p>

        </div>
    );
}

export default Form