import React, { Component, Fragment } from "react";

class AnnoLabel extends Component {
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
      style={{ top: `${this.props.yPos}px` }}
    >
      Label
    </div>
  );

  renderCard = () => (
    <div
      onClick={this.handleClick}
      className="anno anno-card"
      style={{ top: `${this.props.yPos}px` }}
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

export default AnnoLabel;
