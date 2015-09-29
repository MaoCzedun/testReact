import React from 'react';
import './todolist.scss';

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
      <div className="todo">
        <input type="text"/>
      </div>
    );
  }
});
