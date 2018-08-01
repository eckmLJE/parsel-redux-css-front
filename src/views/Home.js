import React, { Component } from "react";
import { connect } from "react-redux";

import { fetchStatements } from "../actions/statements";
import { fetchUsers } from "../actions/users";

import HomeStatementList from "../containers/HomeStatementList";

class Home extends Component {
  componentDidMount = () => {
    this.props.fetchStatements();
    this.props.fetchUsers();
  };

  render() {
    return (
      <div>
        {!this.props.statementLoadingStatus &&
        this.props.availableStatements.length ? (
          <HomeStatementList />
        ) : (
          "Loading Statements..."
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  availableStatements: state.statements.availableStatements,
  statementLoadingStatus: state.statements.statementLoadingStatus
});

const mapDispatchToProps = dispatch => ({
  fetchStatements: () => dispatch(fetchStatements()),
  fetchUsers: () => dispatch(fetchUsers())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
