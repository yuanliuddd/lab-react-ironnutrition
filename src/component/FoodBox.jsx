import React from 'react';
import FoodBoxStyle from './FoodBox.module.css';
import { Card, Row, Col, Divider, Input, Button } from 'antd';

const FoodBox = ({ food, deleteFoodData }) => {
  const deleteButtonHandler = () => {
    deleteFoodData(food.name);
  };


  
  return (
    <Card style={{ width: 230, height: 300, margin: 10 }}>
      <div>
        <p>{food.name}</p>
      </div>
      <div>
        <img src={food.image} alt="Picture" className={FoodBoxStyle.img} />
        <p>
          <strong>Calories : </strong> {food.calories}
        </p>
        <p>
          <strong>Servings : </strong> {food.servings}
        </p>
      </div>
      <Button type="primary" onClick={deleteButtonHandler}>
        Delete
      </Button>
    </Card>
  );
};

export default FoodBox;
