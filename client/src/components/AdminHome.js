import React, { Component } from 'react';
import { Header, Image } from 'semantic-ui-react';
import PhoFamily from '../Images/PhoFamily.jpg'
import AdminHomeForm from './AdminHomeForm';


class AdminHome extends Component {
  render() {
    return (
      <div>
        <Header as='h1' textAlign='center'>Pho Tay Ho Admin</Header>

        < AdminHomeForm />
      </div>

    );
  }
}

export default AdminHome;
