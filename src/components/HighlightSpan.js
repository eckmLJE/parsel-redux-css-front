import React, { Component } from "react";
import {
  addHighlightPosition,
  removeHighlightPosition
} from "../actions/highlights";
import { connect } from "react-redux";
import colors from "../interpreters/colors";

class HighlightSpan extends Component {
  logHighlightPos = node => {
    if (node === null) {
      this.props.removeHighlightPosition(this.props.id);
    } else {
      this.props.addHighlightPosition(
        node.getBoundingClientRect().y,
        this.props.id
      );
    }
  };

  render() {
    return (
      <span
        ref={this.logHighlightPos}
        style={{
          borderBottom: `solid 5px ${colors[this.props.index]}`
        }}
        name={this.props.name}
        key={this.props.id}
      >
        {this.props.content}
      </span>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  addHighlightPosition: (position, annotationId) =>
    dispatch(addHighlightPosition(position, annotationId)),
  removeHighlightPosition: annotationId =>
    dispatch(removeHighlightPosition(annotationId))
});

export default connect(
  null,
  mapDispatchToProps
)(HighlightSpan);