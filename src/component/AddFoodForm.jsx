import { Card, Row, Col, Divider, Input, Button } from 'antd';
// import FormInput from './FormInput';
import React, { useState } from 'react';

const AddFoodForm = (props) => {
  const initFormValue = {
    name: '',
    image: '',
    calories: '',
    servings: '',
  };
  const [formValueState, setFormValueState] = useState(initFormValue);

  const nameHandler = (event) => {
    setFormValueState((prevState) => {
      return { ...prevState, name: event.target.value };
    });
  };

  const imageHandler = (event) => {
    setFormValueState((prevState) => {
      return { ...prevState, image: event.target.value };
    });
  };

  const calorieHandler = (event) => {
    setFormValueState((prevState) => {
      return { ...prevState, calories: Number(event.target.value) };
    });
  };

  const servingsHandler = (event) => {
    setFormValueState((prevState) => {
      return { ...prevState, servings: Number(event.target.value) };
    });
  };

  const submitForm = (e) => {
    e.preventDefault();
    props.submitData(formValueState);
    setFormValueState(initFormValue);
  };

  return (
    <form onSubmit={submitForm}>
      <label>
        Name
        <Input
          value={formValueState.name}
          onChange={nameHandler}
          type="text"
          name="name"
        />
      </label>

      <label>
        Image
        <Input
          value={formValueState.image}
          onChange={imageHandler}
          type="text"
          name="image"
        />
      </label>
      <label>
        Calories
        <Input
          value={formValueState.calories}
          type="number"
          onChange={calorieHandler}
          name="calories"
        />
      </label>
      <label>
        Servings
        <Input
          value={formValueState.servings}
          type="number"
          onChange={servingsHandler}
          name="servings"
        />
      </label>
      <button type="click" onClick={props.toggleFoodForm}>
        Hide Form
      </button>

      <button type="submit">Create</button>
    </form>
  );
};

export default AddFoodForm;
