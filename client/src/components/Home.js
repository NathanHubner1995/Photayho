import React, { Component } from 'react';
import { Header, Image } from 'semantic-ui-react';
import PhoFamily from '../Images/PhoFamily.jpg'


class Home extends Component {
  render() {
    return (
      <div>
        <Header as='h1' textAlign='center'>Pho Tay Ho</Header>
        <Image  src= {PhoFamily} fluid circular/>
      </div>
    );
  }
}

export default Home;
