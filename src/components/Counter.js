import React from 'react';

import FlatButton from 'material-ui/FlatButton';

class Counter extends React.Component {
  //noinspection JSUnusedGlobalSymbols
  render() {
    return (
      <div>
        <span style={{fontSize: '200%'}}>{this.props.count}</span><br />
        <FlatButton label='＋' onTouchTap={this.props.increment} />
        <FlatButton label='ZERO' onTouchTap={this.props.zeroing} />
      </div>
    );
  }
}

Counter.propTypes = {
  count: React.PropTypes.number.isRequired,
  increment: React.PropTypes.func.isRequired,
  zeroing: React.PropTypes.func.isRequired
};

export default Counter;
