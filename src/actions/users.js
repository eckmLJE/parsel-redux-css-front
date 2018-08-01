const usersUrl = "http://localhost:3000/api/v1/users";

export const fetchUsers = () => {
  return dispatch => {
    dispatch({ type: "START_FETCHING_USERS_REQUEST" });
    return fetch(usersUrl)
      .then(res => res.json())
      .then(json =>
        dispatch({ type: "ADD_USERS", users: json.data })
      );
  };
};