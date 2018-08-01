import React, { Component } from "react";
import { connect } from "react-redux";
import moment from "moment";

import { navToStatement } from "../actions/statements";

class HomeStatementItem extends Component {
  handleClick = () => {
    this.props.navToStatement(this.props.statement.id);
  };

  render() {
    const statementAttributes = this.props.statement.attributes;
    return (
      <div className="home-statement-item" onClick={this.handleClick}>
        <div className="home-statement-item-title">
          {this.props.statement.attributes.title}
        </div>
        <div className="home-statement-item-politician">
          {statementAttributes.politician.name +
            ` (${statementAttributes.politician.party})`}
        </div>
        <div className="home-statement-item-date">
          {moment(statementAttributes.datetime).format("MMMM Do YYYY")}
        </div>
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
