import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Header from './HeaderComponent';
import Home from './HomeComponent';
import Menu from './MenuComponent';
import DishDetail from './DishdetailComponent';
import Footer from './FooterComponent';
import { DISHES } from '../shared/dishes';

class MainComponent extends Component {

  constructor(props) {
    super(props);

    this.state = {
      dishes: DISHES,
      selectedDish: null
    }

  }


  render() {

    const HomePage = () => {
      return(
          <Home 
          />
      );
    }

    return (
      <div>
        <Header />
        <Switch>
          <Route path='/home' component={HomePage} />
          <Route exact path='/menu' component={() => <Menu dishes={this.state.dishes} />} />
          <Redirect to="/home" />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default MainComponent;
