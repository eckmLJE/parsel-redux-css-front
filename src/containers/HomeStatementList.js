import React, { Component } from "react";
import { connect } from "react-redux";
import HomeStatementItem from "../components/HomeStatementItem";

class HomeStatementList extends Component {
  render() {
    return (
      <div>
        {this.props.availableStatements.map(statement => (
          <HomeStatementItem key={statement.id} statement={statement} />
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  availableStatements: state.statements.availableStatements
});

export default connect(
  mapStateToProps,
  null
)(HomeStatementList);
