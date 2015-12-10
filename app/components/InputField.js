import React from 'react'
export default class InputField extends React.component {
  render() {
        return (
          <div className="input-field col s6">
            <label for={this.props.labelId}>{this.props.textLabel}</label>
            <input type="text" id={this.props.labelId} name={this.props.inputName}/>
          </div>
        );
  }
}
