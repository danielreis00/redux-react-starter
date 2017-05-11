import React, { Component } from 'react';
import { connect } from 'react-redux';
import { doDummy } from '../actions/actions';

class AppContainer extends Component {
  componentDidMount() {
    this.props.onDummy(100);
  }

  render() {
    return (
      <div>
        <h1 className="dr-header">Hello to my Redux-React boilerplate</h1>
        <div>Dummy: {this.props.dummy}</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
    dummy: state.get('dummy'),
});

const App = connect(
  mapStateToProps,
  {onDummy: doDummy}
)(AppContainer);

export default App;
