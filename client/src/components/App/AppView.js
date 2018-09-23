import React, { Component } from 'react';
import axios from 'axios';

class AppView extends Component {
  componentDidMount() {
    axios
      .post('/api/restaurant', { name: 'Hey' })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <div>
        <span>hello world!</span>
      </div>
    );
  }
}

export default AppView;
