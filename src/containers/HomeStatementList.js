import React, { Component } from "react";
import { connect } from "react-redux";
import { Item } from "semantic-ui-react";
import HomeStatementItem from "../components/HomeStatementItem";

class HomeStatementList extends Component {
  render() {
    return (
      <Item.Group className="home-statement-list">
        {this.props.availableStatements.map(statement => (
          <HomeStatementItem key={statement.id} statement={statement} />
        ))}
      </Item.Group>
      // <div className="home-statement-list">
      // </div>
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
