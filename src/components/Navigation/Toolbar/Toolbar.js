import React from 'react';
import classes from './Toolbar.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import NavigationItem from '../NavigationItems/NavigationItem/NavigationItem';

const toolbar = (props) => (
  <header className={classes.Toolbar}>
    <div>MENU</div>
    <Logo />
    <nav>
      <NavigationItems>
        <NavigationItem link="/burgerBuilder" active> Burger Builder</NavigationItem>
        <NavigationItem link="/checkout"> Checkout</NavigationItem>
      </NavigationItems>
    </nav>
  </header>
)

export default toolbar;