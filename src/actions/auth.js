export const login =
  ({ email, password }) =>
  (dispatch) => {
    try {
      dispatch({
        type: "auth/login",
        payload: {
          email,
          password,
        },
      });
    } catch (err) {
      dispatch({
        type: "auth/logout",
      });
    }
  };
