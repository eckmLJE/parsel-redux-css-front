const statementsReducer = (
  state = {
    currentStatement: null,
    availableStatements: [],
    statementLoadingStatus: false
  },
  action
) => {
  switch (action.type) {
    case "SET_STATEMENT":
      return {
        ...state,
        currentStatement: action.statement,
        statementLoadingStatus: false
      };
    case "START_FETCHING_STATEMENTS_REQUEST":
      return { ...state, statementLoadingStatus: true };
    case "START_FETCHING_STATEMENT_REQUEST":
      return { ...state, statementLoadingStatus: true };
    case "ADD_STATEMENTS":
      return {
        ...state,
        availableStatements: action.statements,
        statementLoadingStatus: false
      };
    case "CLEAR_CURRENT_STATEMENT":
      return {
        ...state,
        currentStatement: null
      };
    default:
      return state;
  }
};

export default statementsReducer;
