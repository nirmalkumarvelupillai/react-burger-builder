import React from 'react';
import classes from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
  {type: 'meat', label: 'Meat'},
  {type: 'cheese', label: 'Cheese'},
  {type: 'bacon', label: 'Bacon'},
  {type: 'salad', label: 'Salad'}
]

const buildControls = (props) => {
  return (
    <div className={classes.BuildControls}>
      { controls.map(control => (
        <BuildControl 
          key={control.label} 
          control={control} 
          added={props.onAddIncredients} 
          removed={props.onRemoveIncredients} 
          disabled={props.disabledInfo[control.type]}/>
      )) }
    </div>
  );
}

export default buildControls;