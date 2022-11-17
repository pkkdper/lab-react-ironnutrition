import { Card, Row, Col, Divider, Input, Button } from 'antd';

const FoodBox = ({food}) => {
  const {name, servings, calories, image} = food
  return (
    <>
      <Col>
        <Card title={name} style={{ width: 230, height: 300, margin: 10 }}>
          <img src={image} height={60} alt="food" />
          <p>Calories:{calories}</p>
          <p>Servings:{servings}</p>
          <p><b>Total calories:{calories * servings} </b>kcal</p>
          <Button type='primary'>Delete</Button>
        </Card>
      </Col>
    </>
  );
};
export default FoodBox;
