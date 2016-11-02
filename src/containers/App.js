import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as actions from '../actions/index';

import darkBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';

import Counter from '../components/Counter';
import  './style/App.css';

import LeftMenu from './LeftMenu';
const darkMuiTheme = getMuiTheme(darkBaseTheme);

class App extends React.Component {

  constructor(props) {
    super(props);

    this.increment = props.actions.increment.bind(this);
    this.zeroing = props.actions.zeroing.bind(this);
  }

  //noinspection JSUnusedGlobalSymbols
  render() {
    return (
      <MuiThemeProvider muiTheme={darkMuiTheme}>
        <div style={{fontFamily: 'Roboto'}}>
          <AppBar title='Title' iconElementLeft={<div></div>}  className='header'/>
          <div style={{padding: '10px'}} className='HolyGrail-body'>
            <LeftMenu className='HolyGrail-nav'/>
            <Counter
              count={this.props.count}
              increment={this.increment}
              zeroing={this.zeroing} />
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

App.propTypes = {
  count: React.PropTypes.number.isRequired
};

function mapStateToProps(state) {
  return {
    count: state.counter.count
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
