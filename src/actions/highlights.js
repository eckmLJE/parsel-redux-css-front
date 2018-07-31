export const clearHighlightPositions = () => ({
  type: "CLEAR_HIGHLIGHT_POSITIONS"
});

export const addHighlightPosition = (position, annotationId) => ({
  type: "ADD_HIGHLIGHT_POSITION",
  position,
  annotationId
});

export const setBoundingRectY = y => ({
  type: "SET_BOUNDING_RECT_Y",
  y
});

export const removeHighlightPosition = annotationId => ({
  type: "REMOVE_HIGHLIGHT_POSITION",
  annotationId
});

export const setCurrentSelection = selection => ({
  type: "SET_SELECTION",
  selection
});
