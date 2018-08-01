const annotationsReducer = (
  state = {
    currentExpandedAnnotation: null,
    annotationLoadingStatus: false,
    currentAnnotations: []
  },
  action
) => {
  switch (action.type) {
    case "SET_EXPANDED_ANNOTATION":
      return {
        ...state,
        currentExpandedAnnotation: action.id
      };
    case "SET_CURRENT_ANNOTATIONS":
      return {
        ...state,
        currentAnnotations: action.annotations
      };
    case "CLEAR_CURRENT_ANNOTATIONS":
      return {
        ...state,
        currentAnnotations: []
      };
    case "ADD_POSTED_ANNOTATION":
      return {
        ...state,
        currentAnnotations: [...state.currentAnnotations, action.annotation],
        annotationLoadingStatus: false
      };
    case "CLEAR_EXPANDED_ANNOTATION":
      return {
        ...state,
        currentExpandedAnnotation: null
      };
    case "START_POSTING_ANNOTATION_REQUEST":
      return {
        ...state,
        annotationLoadingStatus: true
      };
    default:
      return state;
  }
};

export default annotationsReducer;
