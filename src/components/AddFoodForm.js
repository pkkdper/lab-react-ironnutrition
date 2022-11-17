import { Card, Row, Col, Divider, Input, Button } from 'antd';
import React, { useState } from 'react';

const AddFoodForm = () => {
const [newFood, setNewFood] = useState({ 
    name:"", 
    servings:0, 
    calories:0, 
    image:""
})
const handleChange = (e) => {
    e.preventDefault()
    newFood[e.target.name] = e.target.value
    setNewFood({...newFood,})
}
console.log(newFood)
 return (<div>
    <label>Name</label>
<Input value={newFood.name} type="text" name="name" onChange={(e)=>handleChange(e)}/>
    <label>Image</label>
    <Input value={newFood.image} type="text" name="image" onChange={(e)=>handleChange(e)}/>
    <label>Calories</label>
    <Input value={newFood.calories} type="number" name="calories" onChange={(e)=>handleChange(e)}/>
    <label>Servings</label>
    <Input value={newFood.servings} type="number" name="servings" onChange={(e)=>handleChange(e)}/>
 </div>)   
}

export default AddFoodForm;