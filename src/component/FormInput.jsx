import React from 'react';

const FormInput = (props) => {
  return <input type="text" id={`foodInput${props.name}`} />;
};

export default FormInput;
