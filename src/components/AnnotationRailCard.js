import React, { Component, Fragment } from "react";
import { connect } from "react-redux";

import { setExpandedAnnotation } from "../actions/annotations";

class AnnotationRailCard extends Component {
  state = {
    commentsExpanded: false
  };

  handleExpandClick = () => {
    const id = this.props.annotation.id;
    this.props.setExpandedAnnotation(id);
    this.setState({ commentsExpanded: false });
  };

  handleMinimizeClick = () => {
    this.props.setExpandedAnnotation(null);
    this.setState({ commentsExpanded: false });
  };

  handleCommentsClick = () => {
    this.setState({
      commentsExpanded: !this.state.commentsExpanded
    });
  };

  renderLabel = () => (
    <div
      className="anno anno-label"
      style={{ top: this.props.yPos - this.props.currentBoundingRectY }}
    >
      <div className="anno-label-user">{this.props.user.username}</div>
      <div className="anno-label-points">{`(${
        this.props.annotation.points
      })`}</div>
      <div className="anno-expand-button" onClick={this.handleExpandClick}>
        +
      </div>
    </div>
  );

  renderCard = () => (
    <div
      className="anno anno-card"
      style={{ top: this.props.yPos - this.props.currentBoundingRectY }}
    >
      <div className="anno-card-user">{this.props.user.username}</div>
      <div className="anno-card-user-points">{`(${
        this.props.annotation.points
      })`}</div>
      <div className="anno-expand-button" onClick={this.handleMinimizeClick}>
        -
      </div>

      <div className="anno-card-content">{this.props.annotation.content}</div>
      <div className="anno-card-content-points">
        {this.props.annotation.points}
      </div>
      <div
        className="anno-card-expand-comments-button"
        onClick={this.handleCommentsClick}
      />
      {this.state.commentsExpanded ? <div className="anno anno-card" /> : null}
    </div>
  );

  render() {
    return (
      <Fragment>
        {this.props.currentExpandedAnnotation === this.props.annotation.id
          ? this.renderCard()
          : this.renderLabel()}
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  currentBoundingRectY: state.highlights.currentBoundingRectY,
  currentExpandedAnnotation: state.annotations.currentExpandedAnnotation
});

const mapDispatchToProps = dispatch => ({
  setExpandedAnnotation: id => dispatch(setExpandedAnnotation(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AnnotationRailCard);
