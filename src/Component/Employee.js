/* eslint-disable no-useless-constructor */
import React from "react";
import { connect } from "react-redux";
class Employee extends React.Component {
  constructor(props) {
    super(props);
  }

  incrementSalary = () => {
    this.props.dispatch({ type: "INCREMENT" });
  };

  decrementSalary = () => {
    this.props.dispatch({ type: "DECREMENT" });
  };

  render() {
    return (
      <div>
        <h2>Welcome to Employee Component...</h2>
        <div>
          <p>
            <label>
              Employee Salary : <b>{this.props.salary}</b>
            </label>
          </p>
          <button onClick={this.incrementSalary}>Increment</button>
          <button onClick={this.decrementSalary}>Decrement</button>
        </div>
      </div>
    );
  }
}

//what data we want from the store
//Connect fucntion connect react component to redux store
function mapStateToProps(state) {
  return {
    salary: state.salary,
  };
}
export default connect(mapStateToProps)(Employee);
