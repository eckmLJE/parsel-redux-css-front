import { combineReducers } from "redux";

import statementsReducer from "./statementsReducer";
import highlightsReducer from "./highlightsReducer"

export const rootReducer = combineReducers({
  statements: statementsReducer,
  highlights: highlightsReducer
});