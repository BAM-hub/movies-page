export const login = (userName, password) => (dispatch) => {
  try {
    dispatch({
      type: "auth/login",
      payload: {
        userName,
        password,
      },
    });
  } catch (err) {
    dispatch({
      type: "auth/logout",
    });
  }
};
