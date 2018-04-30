import React, { Component } from "react";
import TodoList from "./todo-list";
import { getSectionById } from "reducers/todo";
import { connect } from "react-redux";

class ShowTodo extends Component {
  render() {
    return (
      <div>
        <h4>{this.props.section.name}</h4>
        <TodoList todos={this.props.section.todos} />
        <form>
          <input ref="todo-item-name" />
          <button>Add new item</button>
        </form>
      </div>
    );
  }
}
const mapStateToProps = (state, props) => {
  //passing todo reducer and section's id
  return { section: getSectionById(state.todo, props.param.id) };
};
export default connect(mapStateToProps)(ShowTodo);
