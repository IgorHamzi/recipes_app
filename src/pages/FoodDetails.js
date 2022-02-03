import React from 'react';
import { useParams } from 'react-router-dom';

function FoodDetails() {
  const { id } = useParams();

  return (
    <p>{ id }</p>
  );
}

export default FoodDetails;
