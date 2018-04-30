import React, { Component } from "react";
import SectionList from "./section-list";
import { connect } from "react-redux";
import { loadSections, createSection } from "actions/todo";

class App extends Component {
  componentDidMount() {
    this.props.loadSections();
  }
  onSubmit = e => {
    e.preventDefault();
    let ref = this.refs["section-name"];
    let sectionName = ref.value;
    this.props.createSection(sectionName);
    ref.value = "";
  };
  render() {
    return (
      <div>
        <SectionList sections={this.props.sections} />
        <form onSubmit={this.onSubmit}>
          <input ref="section-name" />
          <button>Add new section</button>
        </form>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    sections: state.todo.sections
  };
};

export default connect(mapStateToProps, { loadSections, createSection })(App);
