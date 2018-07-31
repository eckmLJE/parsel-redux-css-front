import React, { Component } from "react";
import { connect } from "react-redux";

import AnnotationRailCard from "../components/AnnotationRailCard";

class AnnotationRail extends Component {
  getAnnotationById = id => {
    console.log(this.props.annotations);
  };

  getUserById = id => {
    console.log(this.props.users);
  };

  render() {
    return (
      <div className="statement-rail">
        {this.props.currentHighlightPositions.length &&
        this.props.currentBoundingRectY
          ? this.props.currentHighlightPositions.map(highlight => (
              <AnnotationRailCard
                annotation={this.getAnnotationById(highlight.id)}
                user={this.getUserById()}
                yPos={highlight.position}
              />
            ))
          : "Loading Annotations..."}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  currentHighlightPositions: state.highlights.currentHighlightPositions,
  currentBoundingRectY: state.highlights.currentBoundingRectY
});

// const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  null
)(AnnotationRail);
