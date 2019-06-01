import React from 'react';

const HelloComponent = (props) => {
  const {message} = props;
  return <p>{`Hello ${message ? message : 'default'}`}</p>;
};

export default HelloComponent;