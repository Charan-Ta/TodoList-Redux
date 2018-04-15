import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { addTodo } from "../actions";

class Todobar extends Component {
  render() {
    return (
      <div>
        <div>
          <input tye="text" ref="todo" />
        </div>
        <br />
        <div>
          <button
            type="button"
            onClick={() => {
              this.props.addTodo(this.refs.todo.value);
            }}
          >
            Add Todo
          </button>
        </div>

        <ul>
          {this.props.reducerrs.map(todo => {
            return <li>{todo} </li>;
          })}
        </ul>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    reducerrs: state.reducerrs
  };
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ addTodo: addTodo }, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(Todobar);
