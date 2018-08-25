import React from 'react';
import classes from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';
import Button from '../../ui/Button/Button';
const controls = [
  {type: 'meat', label: 'Meat'},
  {type: 'cheese', label: 'Cheese'},
  {type: 'bacon', label: 'Bacon'},
  {type: 'salad', label: 'Salad'}
]

const buildControls = (props) => {
  return (
    <div className={classes.BuildControls}>
      <p>Current Price: <strong>{ props.price.toFixed(2) }</strong></p>
      { controls.map(control => (
        <BuildControl 
          key={control.label} 
          control={control} 
          added={props.onAddIncredients} 
          removed={props.onRemoveIncredients} 
          disabled={props.disabledInfo[control.type]}/>
      )) }
      <Button 
        btnType="Orange" 
        clicked={props.ordered}
        disabled={!props.purchasable}>ORDER NOW</Button>
    </div>
  );
}

export default buildControls;