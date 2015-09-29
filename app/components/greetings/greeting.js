import React from 'react';
import './greeting.scss';

export default React.createClass({

  propTypes: {
    name: React.PropTypes.string
  },

  getDefaultProps() {
    return {
      name: 'React'
    };
  },

  render() {
    return (
      <div className="greeting">
        Hello, {this.props.name}!
      </div>
    );
  }
});
