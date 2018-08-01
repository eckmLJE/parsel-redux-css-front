import { combineReducers } from "redux";

import statementsReducer from "./statementsReducer";
import highlightsReducer from "./highlightsReducer";
import annotationsReducer from "./annotationsReducer";

export const rootReducer = combineReducers({
  statements: statementsReducer,
  highlights: highlightsReducer,
  annotations: annotationsReducer
});
