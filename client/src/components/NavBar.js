import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { handleLogout } from '../actions/auth';
import FoodMenu from './FoodMenu';
import About from './About';



class NavBar extends Component {
  rightNavs = () => {
    const { user, dispatch, history } = this.props;

    if (user.id) {
      return (
        <Menu.Menu position='right'>
            <div>
            ADMIN
            </div>
            <Link to='/FoodMenu'>
              <Menu.Item name='Menu' />
            </Link>
            <Link to='/order'>
              <Menu.Item name='Order' />
            </Link>
            <Link to='/about'>
              <Menu.Item name='About' />
            </Link>
            <Menu.Item
              name='Logout'
              onClick={() => dispatch(handleLogout(history))}
            />
        </Menu.Menu>
      );
    }
    return (
      <Menu.Menu position='right'>
        <Link to='/FoodMenu'>
          <Menu.Item name='Menu' />
        </Link>
        <Link to='/order'>
          <Menu.Item name='Order' />
        </Link>
        <Link to='/about'>
          <Menu.Item name='About' />
        </Link>


      </Menu.Menu>
    );
  }

  render() {
    return (
      <div>
        <Menu pointing secondary>
          <Link to='/'>
            <Menu.Item name='home' />
          </Link>
          { this.rightNavs() }
        </Menu>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { user: state.user };
};

export default withRouter(connect(mapStateToProps)(NavBar));
