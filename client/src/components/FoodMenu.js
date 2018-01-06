import React, { Component } from 'react';
import { Header } from 'semantic-ui-react';

class FoodMenu extends Component {
  render() {
    return (
      <div>
        <Header as='h1' textAlign='center'>Menu</Header>
        <h3 textAlign='center'> Pork </h3>
      </div>
    );
  }
}

export default FoodMenu;
