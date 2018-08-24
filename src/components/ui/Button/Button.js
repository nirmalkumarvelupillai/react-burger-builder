import React from 'react';
import classes from './Button.css'
const button = (props) => (
  <button onClick={props.clicked} className={[classes.Button, classes[props.btnType]].join(' ')}>
    <span>{props.children}</span>
  </button>
)
export default button;