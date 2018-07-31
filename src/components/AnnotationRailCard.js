import React, { Component, Fragment } from "react";
import { connect } from "react-redux";

class AnnotationRailCard extends Component {
  state = {
    expanded: false
  };

  handleClick = () => {
    this.setState({
      expanded: !this.state.expanded
    });
  };

  renderLabel = () => (
    <div
      onClick={this.handleClick}
      className="anno anno-label"
      style={{ top: this.props.yPos - this.props.currentBoundingRectY }}
    >
      Label
    </div>
  );

  renderCard = () => (
    <div
      onClick={this.handleClick}
      className="anno anno-card"
      style={{ top: this.props.yPos - this.props.currentBoundingRectY }}
    >
      Card
    </div>
  );

  render() {
    return (
      <Fragment>
        {this.state.expanded ? this.renderCard() : this.renderLabel()}
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  currentBoundingRectY: state.highlights.currentBoundingRectY
});

// const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  null
)(AnnotationRailCard);
