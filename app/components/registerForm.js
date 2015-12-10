'use strict'
var InputField = React.createClass({
 render:function(){
   return (
     <div className="input-field col s6">
       <label for={this.props.labelId}>{this.props.textLabel}</label>
       <input type="text" id={this.props.labelId} name={this.props.inputName}/>
     </div>
   );
 }
});
// import InputField from "InputField"
var RegisterForm = React.createClass({
  render:function(){
    return (
      <div className="row">
        <form className="col s12">
          <InputField labelId="UN" inputName="User[name]"    textLabel="Имя"/>
          <InputField labelId="US" inputName="User[surname]" textLabel="Фамилия"/>
          <InputField labelId="UP" inputName="User[phone]"   textLabel="Телефон"/>
          <div className="input-field col s6">
            <div></div>
            <button className="btn waves-effect waves-light" type="submit">Зарегестрироваться</button>
          </div>
        </form>
      </div>
    );
  }
});
React.render(<RegisterForm />,document.querySelector('#root'));
