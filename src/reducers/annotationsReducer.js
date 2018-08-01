const annotationsReducer = (
  state = {
    currentExpandedAnnotation: null
  },
  action
) => {
  switch (action.type) {
    case "SET_EXPANDED_ANNOTATION":
      return {
        ...state,
        currentExpandedAnnotation: action.id
      };
    case "CLEAR_EXPANDED_ANNOTATION":
      return {
        ...state,
        currentExpandedAnnotation: null
      };
    default:
      return state;
  }
};

export default annotationsReducer;
