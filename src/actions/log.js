import url from "../services/url";

export const LOGIN_SUCCESS = "LOGIN_SUCESS";
export const LOGOUT_REQUEST = "LOGOUT_REQUEST";
export const LOGIN_ERROR = "LOGIN_ERROR";
export const USER_INFO = "USER_INFO";
let token = "";

export const loginRequest = (email, password) => {
  return (dispatch) => {
    url
      .post("user/login", { email, password })
      .then((res) => {
        token = res.data.body.token;
        localStorage.setItem("token", token);
        dispatch({ type: LOGIN_SUCCESS, payload: { email, token } });
      })
      .catch(() => {
        dispatch({ type: LOGIN_ERROR });
      });
  };
};

/** logout
 */
export const logOut = () => ({
  type: LOGOUT_REQUEST,
});

/** call api for user infos
 */
export const userInfo = () => {
  return (dispatch) => {
    url
      .post(
        "user/profile",
        {},
        { headers: { Authorization: `Bearer` + localStorage.getItem("token") } }
      )
      .then((res) => {
        dispatch({
          type: USER_INFO,
          payload: {
            firstName: res.data.body.firstName,
            lastName: res.data.body.lastName,
          },
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

/** call api for user infos
 * @param {string} firstName
 * @param {string} lastName
 */
export const changeUserInfo = (firstName, lastName) => {
  return (dispatch) => {
    url
      .put(
        "user/profile",
        { firstName, lastName },
        { headers: { Authorization: `Bearer` + localStorage.getItem("token") } }
      )
      .then(() => {
        dispatch({ type: USER_INFO, payload: { firstName, lastName } });
      })
      .catch((error) => {
        console.log(error);
      });
  };
};
