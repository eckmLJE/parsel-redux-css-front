import { combineReducers } from "redux";

import statementsReducer from "./statementsReducer";
import highlightsReducer from "./highlightsReducer";
import annotationsReducer from "./annotationsReducer";
import usersReducer from "./usersReducer";

export const rootReducer = combineReducers({
  statements: statementsReducer,
  highlights: highlightsReducer,
  annotations: annotationsReducer,
  users: usersReducer
});
