import './App.css';
import foods from './foods.json';
import React, { useState } from 'react';
import { Card, Row, Col, Divider, Input, Button } from 'antd';
import FoodBox from './components/FoodBox';
function App() {
  const [food, setFood] = useState(foods);
  return (
    <div className="App">
      {food.map((oneFood) => {
        return (
          <>
            <p>{oneFood.name}</p>
            <img
              src={oneFood.image}
              alt="food"
              style={{ width: '100px', height: 'auto' }}
            />
          </>
        );
      })}
      <FoodBox
        food={{
          name: 'Orange',
          calories: 85,
          image: 'https://i.imgur.com/abKGOcv.jpg',
          servings: 1,
        }}
      />
      <Button> Hide Form / Add New Food </Button>
      <div></div>
      {/* Display Search component here */}

      <Divider>Food List</Divider>
      <p> FOOD_NAME_HERE </p>

      <img src="FOOD_IMAGE_HERE" width={0} />
      <Row style={{ width: '100%', justifyContent: 'center' }}>
        {/* Render the list of Food Box components here */}
      </Row>
    </div>
  );
}

export default App;
