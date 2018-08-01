import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import moment from "moment";
import { Item, Divider } from "semantic-ui-react";

import { navToStatement } from "../actions/statements";

class HomeStatementItem extends Component {
  handleClick = () => {
    this.props.navToStatement(this.props.statement.id);
  };

  render() {
    const statementAttributes = this.props.statement.attributes;
    return (
      <Fragment>
        <Item>
          <Item.Content>
            <Item.Header as="a" onClick={this.handleClick}>
              {this.props.statement.attributes.title}
            </Item.Header>
            <Item.Meta>
              {statementAttributes.politician.name +
                ` (${statementAttributes.politician.party})`}
            </Item.Meta>
            <Item.Extra>
              {moment(statementAttributes.datetime).format("MMMM Do YYYY")}
            </Item.Extra>
          </Item.Content>
        </Item>
        <Divider />
      </Fragment>
      // <div className="home-statement-item" onClick={this.handleClick}>
      //   <div className="home-statement-item-title">

      //   </div>
      //   <div className="home-statement-item-politician">

      //   </div>
      //   <div className="home-statement-item-date">

      //   </div>
      // </div>
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
