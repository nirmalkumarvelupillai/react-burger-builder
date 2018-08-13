import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/BuildControls/BuildControls';

const INCREDIENT_PRICE = {
  meat: 1.5,
  cheese: 0.5,
  sald: 0.8,
  bacon: 0.6
}
class BurgerBuilder extends Component {
  state = {
    ingredients : {
      meat: 0,
      cheese: 0,
      salad: 0,
      bacon: 0
    },
    totalPrice: 5
  }

  addIngredientHandler (type) {
    const preCount = this.state.ingredients[type];
    const ingredients = {
      ...this.state.ingredients
    };
    ingredients[type] = preCount + 1;
    const totalPrice = this.state.totalPrice + INCREDIENT_PRICE[type] 
    this.setState({
      ingredients,
      totalPrice
    });
  }

  removeIngredientHandler (type) {    
    const preCount = this.state.ingredients[type];
    if (preCount <= 0) {
      return;
    }
    const ingredients = {
      ...this.state.ingredients
    };
    ingredients[type] = preCount - 1;
    if (ingredients[type] < 0) {

    }
    const totalPrice = this.state.totalPrice - INCREDIENT_PRICE[type] 
    this.setState({
      ingredients,
      totalPrice
    });
  }

  render () {
    const disabledInfo = Object.keys(this.state.ingredients).reduce((info, ingKey)=> {
      info[ingKey] = this.state.ingredients[ingKey] <= 0;
      return info;
    }, {});
    return (
      <Aux>
        <Burger ingredients={this.state.ingredients}/>
        <BuildControls 
          onAddIncredients={this.addIngredientHandler.bind(this)} 
          onRemoveIncredients={this.removeIngredientHandler.bind(this)} 
          disabledInfo={disabledInfo}/>
      </Aux>
    )
  }
}

export default BurgerBuilder;