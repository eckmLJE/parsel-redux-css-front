import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { Item, Header, Divider } from "semantic-ui-react";
import HomeStatementItem from "../components/HomeStatementItem";

class HomeStatementList extends Component {
  render() {
    return (
      <Item.Group className="home-statement-list">
        <Header as="h1" style={{marginBottom: 30}}>
          Featured Statements
        </Header>
        {/* <Divider /> */}
        {this.props.availableStatements.map(statement => (
          <HomeStatementItem key={statement.id} statement={statement} />
        ))}
      </Item.Group>
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
