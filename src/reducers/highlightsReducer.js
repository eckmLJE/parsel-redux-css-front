const highlightsReducer = (
  state = {
    currentHighlightPositions: [],
    currentBoundingRectY: 0
  },
  action
) => {
  switch (action.type) {
    case "ADD_HIGHLIGHT_POSITION":
      return {
        ...state,
        currentHighlightPositions: [
          ...state.currentHighlightPositions,
          { id: action.annotationId, position: action.position }
        ]
      };
    case "REMOVE_HIGHLIGHT_POSITION":
      return {
        ...state,
        currentHighlightPositions: state.currentHighlightPositions.filter(
          highlight => highlight.id !== action.annotationId
        )
      };
    case "SET_BOUNDING_RECT_Y":
      return {
        ...state,
        currentBoundingRectY: action.y
      };
    default:
      return state;
  }
};

export default highlightsReducer;
