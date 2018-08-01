import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { Card, Icon, Button } from "semantic-ui-react";

import { setExpandedAnnotation } from "../actions/annotations";

import CommentsList from "../containers/CommentsList";

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

  renderLabel = () => {
    return (
      <div
        className="anno anno-label"
        style={{ top: this.props.yPos - this.props.currentBoundingRectY }}
      >
        <Card>
          <Card.Content style={{ padding: 0 }}>
            <Card.Description
              style={{ padding: "3px", verticalAlign: "center" }}
            >
              <div style={{ float: "left", fontWeight: "bold" }}>
                {this.props.user.attributes.username}
              </div>
              <Card.Meta style={{ position: "absolute", right: 35, top: 0 }}>
                {this.props.annotation.points}
              </Card.Meta>
              <Icon
                size="large"
                onClick={this.handleExpandClick}
                name="angle down"
                style={{ position: "absolute", right: 0, top: 0 }}
              />
            </Card.Description>
          </Card.Content>
        </Card>
      </div>
    );
  };

  renderCard = () => (
    <div
      className="anno anno-card"
      style={{ top: this.props.yPos - this.props.currentBoundingRectY }}
    >
      <Card>
        <Card.Content>
          <Card.Header>
            <Icon
              name="angle left"
              size="small"
              style={{ position: "absolute", left: -20, top: 5 }}
            />
            {this.props.user.username}
            <Button
              size="mini"
              basic
              icon="angle up"
              floated="right"
              onClick={this.handleMinimizeClick}
            />
          </Card.Header>
          <Card.Meta>Reputation: {this.props.user.attributes.points}</Card.Meta>
          <Card.Description>{this.props.annotation.content}</Card.Description>
          <Card.Meta floated="left" style={{ paddingTop: 10 }}>
            Points: {this.props.annotation.points}
          </Card.Meta>
          {/* <div style={{ position: "absolute", left: "20%", top: "60%" }}>
            <Icon size="small" name="minus" />
            <Icon size="small" name="plus" />
          </div> */}
        </Card.Content>
        <Card.Content extra>
          {this.props.comments.length ? (
            <Button
              size="small"
              basic
              floated="right"
              onClick={this.handleCommentsClick}
            >
              Comments
            </Button>
          ) : null}
        </Card.Content>
        {this.state.commentsExpanded ? (
          <CommentsList comments={this.props.comments} />
        ) : null}
      </Card>
      {/* <div className="anno-card-user">{this.props.user.username}</div>
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
      {this.state.commentsExpanded ? <div className="anno anno-card" /> : null} */}
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
