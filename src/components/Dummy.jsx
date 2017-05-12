import React, { Component } from 'react';

class Dummy extends Component {
  render() {
    const dummyValue = this.props.dummy;

    return (
      <div>Dummy value of <span>{dummyValue}</span></div>
    );
  }
}

export default Dummy;
