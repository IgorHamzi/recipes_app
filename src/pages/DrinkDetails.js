import React from 'react';
import { useParams } from 'react-router-dom';

function DrinkDetails() {
  const { id } = useParams();

  return (
    <p>{ id }</p>
  );
}

export default DrinkDetails;
