import React from 'react';
import Aux from '../../../hoc/Aux';
import Button from '../../ui/Button/Button';

const orderSummary = (props) => {
  const ingredientsList = Object.keys(props.ingredients).map((ingKey) => (
    <li key={ingKey}>
      <span style={{textTransform:'capitalize'}}>{ingKey}</span>: {props.ingredients[ingKey]}
    </li>
  ));
  return (
    <Aux>
      <h3>Your Order</h3>
      <p>A delicious burger with following ingredients:</p>
      <ul>
        {ingredientsList}
      </ul>
      <p>Total Price : <strong>{props.totalPrice}</strong></p>
      <p>Continue to checkout?</p>
      <Button btnType="Danger" clicked={props.cancelOrder}>Cancel</Button>
      <Button btnType="Success" clicked={props.proceedOrder}>Continue</Button>
    </Aux>
  );
}

export default orderSummary;