import url from "../services/url";

export const LOGIN = "LOGIN_SUCESS";
export const LOGOUT = "LOGOUT";
export const ERROR = "ERROR";
export const USERDETAIL = "USERDETAIL";
let token = "";

export const authentification = (email, password) => {
  return (dispatch) => {
    url
      .post("user/login", { email, password })
      .then((res) => {
        token = res.data.body.token;
        localStorage.setItem("token", token);
        dispatch({ type: LOGIN, payload: { email, token } });
      })
      .catch(() => {
        dispatch({ type: ERROR });
      });
  };
};

export const logoutProfil = () => ({
  type: LOGOUT,
});

export const userDetails = () => {
  return (dispatch) => {
    url
      .post(
        "user/profile",
        {},
        { headers: { Authorization: `Bearer` + localStorage.getItem("token") } }
      )
      .then((res) => {
        dispatch({
          type: USERDETAIL,
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

export const updateProfile = (firstName, lastName) => {
  return (dispatch) => {
    url
      .put(
        "user/profile",
        { firstName, lastName },
        { headers: { Authorization: `Bearer` + localStorage.getItem("token") } }
      )
      .then(() => {
        dispatch({ type: USERDETAIL, payload: { firstName, lastName } });
      })
      .catch((error) => {
        console.log(error);
      });
  };
};
