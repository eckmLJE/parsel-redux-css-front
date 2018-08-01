const annotationsUrl = "http://localhost:3000/api/v1/annotations";

export const setExpandedAnnotation = id => ({
  type: "SET_EXPANDED_ANNOTATION",
  id
});

export const clearExpandedAnnotation = () => ({
  type: "CLEAR_EXPANDED_ANNOTATION"
});

export const setCurrentAnnotations = annotations => ({
  type: "SET_CURRENT_ANNOTATIONS",
  annotations
});

export const clearCurrentAnnotations = () => ({
  type: "CLEAR_CURRENT_ANNOTATIONS"
});

export const addPostedAnnotation = annotation => ({
  type: "ADD_POSTED_ANNOTATION",
  annotation
});

export const postAnnotation = annotationObj => {
  return dispatch => {
    dispatch({ type: "START_POSTING_ANNOTATION_REQUEST" });
    return fetch(annotationsUrl, {
      method: "POST",
      body: JSON.stringify(annotationObj),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      }
    })
      .then(res => res.json())
      .then(json => {
        const convertedAnnotation = convertPostedAnnotation(json.data);
        dispatch(addPostedAnnotation(convertedAnnotation));
      });
  };
};

const convertPostedAnnotation = data => ({
  id: parseInt(data.id, 10),
  statement_id: parseInt(data.attributes["statement-id"], 10),
  user_id: parseInt(data.attributes.user.id, 10),
  content: data.attributes.content,
  start: data.attributes.start,
  end: data.attributes.end,
  points: data.attributes.points
});
