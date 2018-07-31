import React, { Component } from "react";
import { connect } from "react-redux";

import { navToStatement } from "../actions/statements";

class HomeStatementItem extends Component {
  handleClick = () => {
    this.props.navToStatement(this.props.statement.id);
  };

  render() {
    return (
      <div onClick={this.handleClick}>
        {this.props.statement.attributes.title}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  availableStatements: state.statements.availableStatements,
  statementLoadingStatus: state.statements.statementLoadingStatus
});

const mapDispatchToProps = dispatch => ({
  navToStatement: statementId => dispatch(navToStatement(statementId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeStatementItem);
