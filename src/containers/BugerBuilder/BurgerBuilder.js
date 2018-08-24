import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/ui/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';

const INCREDIENT_PRICE = {
  meat: 1.5,
  cheese: 0.5,
  salad: 0.8,
  bacon: 0.6
}
const DEFAULT_BURGER_PRICE = 5;
class BurgerBuilder extends Component {
  state = {
    ingredients : {
      meat: 0,
      cheese: 0,
      salad: 0,
      bacon: 0
    },
    totalPrice: DEFAULT_BURGER_PRICE,
    purchasable: false,
    purchasing: false
  }

  purchaseHandler = () => {
    this.setState({
      purchasing: true
    });
  }

  cancelPurchaseHandler = () => {
    this.setState({
      purchasing: false
    });
  }

  proceedPurchaseHandler = () => {
    alert('are you ready for payment!');
  }

  addIngredientHandler = (type) => {
    const preCount = this.state.ingredients[type];
    const ingredients = {
      ...this.state.ingredients
    };
    ingredients[type] = preCount + 1;
    const totalPrice = this.state.totalPrice + INCREDIENT_PRICE[type] 
    this.setState({
      ingredients,
      totalPrice,
      purchasable: totalPrice > DEFAULT_BURGER_PRICE
    });
  }

  removeIngredientHandler = (type) => {    
    const preCount = this.state.ingredients[type];
    if (preCount <= 0) {
      return;
    }
    const ingredients = {
      ...this.state.ingredients
    };
    ingredients[type] = preCount - 1;
    const totalPrice = this.state.totalPrice - INCREDIENT_PRICE[type] 
    this.setState({
      ingredients,
      totalPrice,
      purchasable:  totalPrice > DEFAULT_BURGER_PRICE
    });
  }

  render () {
    const disabledInfo = Object.keys(this.state.ingredients).reduce((info, ingKey)=> {
      info[ingKey] = this.state.ingredients[ingKey] <= 0;
      return info;
    }, {});
    return (
      <Aux>
        <Modal show={this.state.purchasing} modalClosed={this.cancelPurchaseHandler}>
          <OrderSummary 
            ingredients={this.state.ingredients} 
            totalPrice={this.state.totalPrice} 
            cancelOrder={this.cancelPurchaseHandler} 
            proceedOrder={this.proceedPurchaseHandler} 
            />
        </Modal>
        <Burger ingredients={this.state.ingredients}/>
        <BuildControls 
          onAddIncredients={this.addIngredientHandler} 
          onRemoveIncredients={this.removeIngredientHandler} 
          disabledInfo={disabledInfo} 
          price={this.state.totalPrice} 
          purchasable={this.state.purchasable} 
          ordered={this.purchaseHandler} 
          />
      </Aux>
    )
  }
}

export default BurgerBuilder;