import React from 'react';
import classes from './BuildControl.css';

const buildControl = (props) => {
  const { label, type } = props.control;
  return (
    <div className={classes.BuildControl}>
      <label className={classes.Label}>{label}</label>
      <button className={classes.Less} onClick={()=>props.removed(type)} disabled={props.disabled}>-</button>
      <button className={classes.More} onClick={()=>props.added(type)}>+</button>
    </div>
  );
}

export default buildControl;