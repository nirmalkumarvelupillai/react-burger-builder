import React from 'react';
import classes from './Modal.css';
import Aux from '../../../hoc/Aux';
import BackDrop from '../BackDrop/BackDrop';

const modal = (props) => (
  <Aux>
    <div 
      className={classes.Modal} 
      style={{
        transform: props.show ? 'translateY(0)' : 'translateY(-1000)',
        opacity: props.show ? 1 : 0,
        display: props.show ? 'block' : 'none'
      }}
      >
      {props.children}
    </div>
    <BackDrop show={props.show} clicked={props.modalClosed}/>
  </Aux>
);

export default modal;