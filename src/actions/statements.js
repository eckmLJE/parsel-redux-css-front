import { push } from "connected-react-router";

const statementsUrl = "http://localhost:3000/api/v1/statements";

export const setCurrentStatement = statementId => {
  return dispatch => {
    dispatch({ type: "START_FETCHING_STATEMENT_REQUEST" });
    return fetch(statementsUrl + `/${statementId}`)
      .then(res => res.json())
      .then(json => {
        dispatch({ type: "SET_STATEMENT", statement: json.data });
        dispatch({
          type: "SET_CURRENT_ANNOTATIONS",
          annotations: json.data.attributes.annotations
        });
      });
  };
};

export const navToStatement = statementId => {
  return dispatch => {
    dispatch(push(`/statement/${statementId}`));
  };
};

export const addStatements = statements => ({
  type: "ADD_STATEMENTS",
  statements
});

export const fetchStatements = () => {
  return dispatch => {
    dispatch({ type: "START_FETCHING_STATEMENTS_REQUEST" });
    return fetch(statementsUrl)
      .then(res => res.json())
      .then(json =>
        dispatch({ type: "ADD_STATEMENTS", statements: json.data })
      );
  };
};
