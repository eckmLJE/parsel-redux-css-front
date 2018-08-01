import React, { Component, Fragment } from "react";
import { connect } from "react-redux";

import { setCurrentStatement } from "../actions/statements";
import { setBoundingRectY } from "../actions/highlights";

import StatementViewContent from "../components/StatementViewContent";
import AnnotationRail from "../containers/AnnotationRail";

class StatementView extends Component {
  componentDidMount = () => {
    this.props.setCurrentStatement(this.props.match.params.id);
  };

  handleRef = node => {
    node
      ? this.props.setBoundingRectY(node.getBoundingClientRect().y)
      : this.props.setBoundingRectY(0);
  };

  render() {
    return (
      <div className="statement-view" ref={this.handleRef}>
        {!this.props.statementLoadingStatus && this.props.currentStatement ? (
          <Fragment>
            <StatementViewContent statement={this.props.currentStatement} />
            <AnnotationRail
              annotations={this.props.currentStatement.attributes.annotations}
              users={this.props.currentStatement.attributes.users}
              comments={this.props.currentStatement.attributes.comments}
            />
          </Fragment>
        ) : (
          "Loading Statement..."
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  currentStatement: state.statements.currentStatement,
  statementLoadingStatus: state.statements.statementLoadingStatus
});

const mapDispatchToProps = dispatch => ({
  setCurrentStatement: statementId =>
    dispatch(setCurrentStatement(statementId)),
  setBoundingRectY: y => dispatch(setBoundingRectY(y))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StatementView);
