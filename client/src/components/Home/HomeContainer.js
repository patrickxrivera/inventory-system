import React, { Component } from 'react';
import { connect } from 'react-redux';

import { selectRestaurants } from '../../reducers/restaurants';
import { fetchRestaurants } from '../../actions/restaurants';
import { HomeBranch } from './';

class HomeContainer extends Component {
  componentDidMount() {
    this.props.fetchRestaurants();
  }

  render() {
    return <HomeBranch restaurants={this.props.restaurants} />;
  }
}

const mapStateToProps = (state) => ({
  restaurants: selectRestaurants(state)
});

export default connect(mapStateToProps, { fetchRestaurants })(HomeContainer);
