import React, { Component } from 'react';
import { Header, Image, Grid } from 'semantic-ui-react';

class About extends Component {
  render() {
    return (
    <div>
      <Header as='h1' textAlign='center'>About Pho Tay Ho</Header>
      <Grid celled>
    <Grid.Row>
      <Grid.Column width={7}>
        <Image src='https://photayho.files.wordpress.com/2013/03/old-restaurant.jpg?w=600&h=450'/>
        </Grid.Column>
      <Grid.Column width={9}>
        <p>Pho Tay Ho originally opened in 1995 and was located on the first floor of an apartment complex.The owner, Mai,
        created a menu that was very simple, but focused. Appetizers included fried eggrolls,steamed eggrolls, and vermicelli noodles.
        The main entree was Pho, a dish unique to the Vietnamese culture,consisting of rice noodles, vegetables, and cuts of beef.
        She chose to specialize on this dish for three reasons: it was healthy, it was delicious, and it could be reasonably priced for customers.
        </p>
      </Grid.Column>
    </Grid.Row>

    <Grid.Row>
      <Grid.Column width={9}>
        <p>
        When she moved the restaurant to a new location down the street in 2009, she added a couple additional dishes to the menu,
        including the fresh Spring Rolls, the Vietnamese salad, and most notably – the Chicken and Vegetarian Pho.
        </p>
      </Grid.Column>
      <Grid.Column width={7}>
        <Image src='https://photayho.files.wordpress.com/2013/03/pho-tay-ho.jpg' />
      </Grid.Column>
      <Grid.Column width={9}>
        <Image src='https://photayho.files.wordpress.com/2013/03/pho-tay-ho-2.jpg' />
      </Grid.Column>
      <Grid.Column width={7}>
          <p>
          Her restaurants successful transition landed a story on the front cover of Salt Lake Tribune
          and earned the "Best Pho" award in 2012 and "Best Broth" award in 2014 in City Weeklys annual "Best of Utah" issue
          showing that her families teamwork really pays off.
          </p>
      </Grid.Column>

    </Grid.Row>
  </Grid>
    </div>
    );
  }
}


export default About;
