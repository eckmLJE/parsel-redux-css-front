const usersReducer = (
  state = {
    availableUsers: [],
    currentUserId: 1,
    usersLoadingStatus: false
  },
  action
) => {
  switch (action.type) {
    case "START_FETCHING_USERS_REQUEST":
      return { ...state, usersLoadingStatus: true };
    case "ADD_USERS":
      return {
        ...state,
        availableUsers: action.users,
        usersLoadingStatus: false
      };
    case "CLEAR_CURRENT_USERS":
      return {
        ...state,
        availableUsers: []
      };
    default:
      return state;
  }
};

export default usersReducer;
