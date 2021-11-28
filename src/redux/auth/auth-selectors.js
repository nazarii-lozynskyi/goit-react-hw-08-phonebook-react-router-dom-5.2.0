const getIsLoggedIn = (state) => state.auth.isLoggedIn;
//const getUserName = (state) => state.auth.user.name;
const getIsFetchingCurrent = (state) => state.auth.getIsFetchingCurrentUser;

const authSelectors = { getIsLoggedIn, getIsFetchingCurrent };

export default authSelectors;
