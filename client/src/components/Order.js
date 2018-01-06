import React, { Component } from 'react';
import { Header, Table } from 'semantic-ui-react';

class Order extends Component {
  render() {
    return (
      <div>
      <Header as='h1' textAlign='center'>Your Order</Header>
        <Table fixed>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Name</Table.HeaderCell>
              <Table.HeaderCell>Quantity</Table.HeaderCell>
              <Table.HeaderCell>Description</Table.HeaderCell>
              <Table.HeaderCell>Price</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            <Table.Row>
              <Table.Cell>Tai Nam Gau Gan Sach</Table.Cell>
              <Table.Cell>2</Table.Cell>
              <Table.Cell>Steak, Flank, Brisket, Tendon, Tripe</Table.Cell>
              <Table.Cell>$13.50</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Tain Nam Sach</Table.Cell>
              <Table.Cell>1</Table.Cell>
              <Table.Cell>Steak Flank Tendon Tripe</Table.Cell>
              <Table.Cell>$12.95</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Chin Nam Gua</Table.Cell>
              <Table.Cell>1</Table.Cell>
              <Table.Cell>Brisket and Flank</Table.Cell>
              <Table.Cell>$11.98</Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
        </div>
      )

  }
}

export default Order;
