import { combineReducers } from "redux";

import statementsReducer from "./statementsReducer";

export const rootReducer = combineReducers({
  statements: statementsReducer
});