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
    let userId = this.getAnnotationById(id).user_id;
    return this.props.availableUsers.find(user => user.id == userId);
  };

  getCommentsById = id => {
    return this.props.comments.filter(comment => comment.annotation_id === id);
  };

  renderAnnotationsArray = () => {
    let annotationsArray = [];
    let indexCounter = 0;
    const highlights = this.props.currentHighlightPositions.sort((a, b) => a.start > b.start)
    debugger
    highlights.forEach(highlight => {
      annotationsArray.push(
        <AnnotationRailCard
        key={highlight.id}
        annotation={this.getAnnotationById(highlight.id)}
        user={this.getUserById(highlight.id)}
        comments={this.getCommentsById(highlight.id)}
        yPos={highlight.position}
        index={indexCounter}
        />
      );
      indexCounter++
    });
    return annotationsArray;
  };

  render() {
    return (
      <div className="statement-rail">
        {this.props.currentHighlightPositions.length &&
        this.props.currentBoundingRectY &&
        !this.props.annotationLoadingStatus
          ? this.renderAnnotationsArray()
          : // this.props.currentHighlightPositions.map(highlight => (
            //     <AnnotationRailCard
            //       key={highlight.id}
            //       annotation={this.getAnnotationById(highlight.id)}
            //       user={this.getUserById(highlight.id)}
            //       comments={this.getCommentsById(highlight.id)}
            //       yPos={highlight.position}
            //     />
            //   ))
            "Loading Annotations..."}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  currentHighlightPositions: state.highlights.currentHighlightPositions,
  currentBoundingRectY: state.highlights.currentBoundingRectY,
  currentAnnotations: state.annotations.currentAnnotations,
  annotationLoadingStatus: state.annotations.annotationLoadingStatus,
  currentStatement: state.statements.currentStatement,
  availableUsers: state.users.availableUsers
});

const mapDispatchToProps = dispatch => ({
  clearExpandedAnnotation: () => dispatch(clearExpandedAnnotation())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AnnotationRail);
