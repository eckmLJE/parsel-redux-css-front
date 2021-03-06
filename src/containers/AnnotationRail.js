import React, { Component } from "react";
import { connect } from "react-redux";

import { clearExpandedAnnotation } from "../actions/annotations";

import AnnotationRailCard from "../components/AnnotationRailCard";

class AnnotationRail extends Component {
  componentDidMount = () => {};

  getAnnotationById = id => {
    return this.props.currentAnnotations.find(
      annotation => annotation.id === id
    );
  };

  getUserById = id => {
    return this.props.users.find(
      user => user.id === this.getAnnotationById(id).user_id
    );
  };

  getCommentsById = id => {
    return this.props.comments.filter(comment => comment.annotation_id === id);
  };

  render() {
    return (
      <div className="statement-rail">
        {this.props.currentHighlightPositions.length &&
        this.props.currentBoundingRectY &&
        !this.props.annotationLoadingStatus
          ? this.props.currentHighlightPositions.map(highlight => (
              <AnnotationRailCard
                key={highlight.id}
                annotation={this.getAnnotationById(highlight.id)}
                user={this.getUserById(highlight.id)}
                comments={this.getCommentsById(highlight.id)}
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
  currentBoundingRectY: state.highlights.currentBoundingRectY,
  currentAnnotations: state.annotations.currentAnnotations,
  annotationLoadingStatus: state.annotations.annotationLoadingStatus
});

const mapDispatchToProps = dispatch => ({
  clearExpandedAnnotation: () => dispatch(clearExpandedAnnotation())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AnnotationRail);
