import React, { Component } from 'react';
import { Header, List } from 'semantic-ui-react';

class FoodMenu extends Component {
  render() {
    return (
      <div>
        <Header as='h1' textAlign='center'>Pho Tay Ho Menu</Header>
        <Header as='h3' textAlign='center'> Kids Size 3.75  Small Bowl - 6.50  Large Bowl - 7.50   To-Go - 8.00 </Header>
        <List>
          <List.Item as= 'h3'>
            <List.Icon name='food' />
            <List.Content>
              <List.Header as='a'>Tai Nam Gau Gan Sach </List.Header>
              <List.Description>Steak, Flank, Brisket, Tendon, Tripe</List.Description>
            </List.Content>
          </List.Item>
          <List.Item as= 'h3'>
            <List.Icon name='food' />
            <List.Content>
              <List.Header as='a'>Chin Nam Gau Gan Sach</List.Header>
              <List.Description>
                Flank, Brisket, Tendon, Tripe
              </List.Description>
            </List.Content>
          </List.Item>
          <List.Item as ='h3'>
            <List.Icon name='food' />
            <List.Content>
              <List.Header as='a'>Tai Chin Gau Gan Sach</List.Header>
              <List.Description>Steak Brisket Tendon Tripe</List.Description>
            </List.Content>
          </List.Item>
          <List.Item as= 'h3'>
            <List.Icon name='food' />
            <List.Content>
              <List.Header as='a'>Tai Nam Gan Sach</List.Header>
              <List.Description>Steak Flank Tendon Tripe</List.Description>
            </List.Content>
          </List.Item>
  </List>




      </div>
    );
  }
}

export default FoodMenu;
