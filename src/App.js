import './App.css';
import foods from './foods.json';
import React, { useState } from 'react';
import { Card, Row, Col, Divider, Input, Button } from 'antd';
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm'
function App() {
  const [food, setFood] = useState(foods);
  return (
    <div className="App">
      <Button> Hide Form / Add New Food </Button>
      <AddFoodForm/>
      <div></div>
      {/* Display Search component here */}

      <p> FOOD_NAME_HERE </p>

      <img src="FOOD_IMAGE_HERE" width={0} />
      <Row style={{ width: '100%', justifyContent: 'center' }}>
        {/* Render the list of Food Box components here */}{' '}
        <Divider>Food List</Divider>
        {food.map((theFood) => {
          return <FoodBox food={theFood} />;
        })}
      </Row>
    </div>
  );
}

export default App;
