import React from 'react';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';
import classes from './Burger.css';

const burger = (props) => {
  let burgerIncredients;
  const addedIngredients = Object.keys(props.ingredients).map(igKey => {
    return [...Array(props.ingredients[igKey])].map( (_, i) => <BurgerIngredient key={igKey + i} type={igKey} />)
  }).reduce( (arr, ing) => arr.concat(ing), []);
  // console.log(addedIngredients);
  if (addedIngredients.length === 0) {
    burgerIncredients = <p>Please add ingredients.</p>
  } else {
    burgerIncredients = addedIngredients;
  }
  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top"/>
      { burgerIncredients }
      <BurgerIngredient type="bread-bottom"/>
    </div>
  )
}

export default burger;