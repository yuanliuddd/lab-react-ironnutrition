import foods from './foods.json';
import './App.css';
import FoodBox from './component/FoodBox.jsx';
import { Card, Row, Col, Divider, Input, Button } from 'antd';
import AddFoodForm from './component/AddFoodForm.jsx';
import React, { useState } from 'react';
import SearchBar from './component/SearchBar.jsx';

function App() {
  const [stateApp, setStateApp] = useState(foods);
  const [searchData, setsearchData] = useState('');
  const [toggleIsTrue, setToggle] = useState(true);

  const filterResult = stateApp.filter((ele) => {
    return ele.name.includes(searchData);
  });

  const deleteFoodData = (deletedFood) => {
    const deleteResult = stateApp.filter((ele) => {
      return ele.name !== deletedFood;
    });
    setStateApp(deleteResult);
  };

  const foodItems = filterResult.map((food) => {
    return (
      <Col key={Math.random()}>
        <FoodBox food={food} deleteFoodData={deleteFoodData} />
      </Col>
    );
  });

  const submitData = (submitData) => {
    setStateApp((prevState) => {
      return [...prevState, submitData];
    });
  };

  const searchBarData = (searchData) => {
    setsearchData(searchData);
  };

  const toggleFoodForm = () => {
    setToggle(!toggleIsTrue);
  };


  return (
    <div className="App">
      <Divider>
        <h1>Add Food Entry</h1>
      </Divider>

      {toggleIsTrue ? (
        <button onClick={toggleFoodForm}>Add Food </button>
      ) : (
        <AddFoodForm submitData={submitData} toggleFoodForm={toggleFoodForm} />
      )}

      <Divider>
        <SearchBar searchBarData={searchBarData} />
      </Divider>

      <Divider>
        <h1>Food List</h1>
      </Divider>
      <Row style={{ width: '100%', justifyContent: 'center' }}>
        {stateApp.length ===0 ? <h1> Oops! No More Content ! </h1> : foodItems}
      </Row>
    </div>
  );
}

export default App;
