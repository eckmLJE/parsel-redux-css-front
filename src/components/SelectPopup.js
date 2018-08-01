import React, { Component } from "react";
import { connect } from "react-redux";

import { postAnnotation } from "../actions/annotations";

class SelectPopup extends Component {
  state = { annotationInput: "" };

  handleInput = e => {
    this.setState({ annotationInput: e.target.value });
  };

  handleSubmit = () => {
    const annotationObj = {
      content: this.state.annotationInput,
      statement_id: this.props.currentStatement.id,
      user_id: this.props.currentUser,
      start: "",
      end: ""
    };
    this.props.postAnnotation(annotationObj);
  };

  render() {
    return (
      <div
        className="anno select-popup"
        style={{
          position: "absolute",
          top: `${this.props.pos.popupY}px`,
          left: `${this.props.pos.popupX}px`
        }}
      >
        <div className="select-header">New Annotation</div>
        <div className="select-input">
          <textarea
            onChange={this.handleInput}
            value={this.state.annotationInput}
            rows="4"
            cols="30"
          />
        </div>
        <div className="select-popup-submit">
          <button onClick={this.handleSubmit}>Submit</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  currentUser: state.users.currentUser,
  currentStatement: state.statements.currentStatement
});

const mapDispatchToProps = dispatch => ({
  postAnnotation: (annotationObj, statementId) =>
    dispatch(postAnnotation(annotationObj, statementId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SelectPopup);
