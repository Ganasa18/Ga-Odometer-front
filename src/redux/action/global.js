import axios from "axios";
import { endPoint } from "../../assets/config";
import Cookies from "universal-cookie";

const cookies = new Cookies();

export const setLoading = (value) => {
  return { type: "SET_LOADING", value };
};

export const setSelected = (value) => {
  return { type: "SET_SELECTED", value };
};

export const setToken = (form) => (dispatch) => {
  const URL = `${endPoint[0].url}${
    endPoint[0].port !== "" ? ":" + endPoint[0].port : ""
  }/api/v1/user/login-web`;

  dispatch({ type: "SET_LOADING", value: true });

  (async () => {
    let apiRes = null;
    try {
      apiRes = await axios
        .post(`${URL}`, {
          username: form.username.target.value,
          password: form.password.target.value,
        })
        .then((response) => {
          console.log(response.data.data.user.username);
          cookies.set("token", response.data.token, {
            path: "/",
          });
          cookies.set("username", response.data.data.user.username);

          setTimeout(() => {
            window.location.reload();
          }, 2000);
        })
        .catch((error) => {
          alert(error.response.data.message);
          dispatch({ type: "SET_LOADING", value: false });
        });
    } catch (err) {
      console.log(err);
      dispatch({ type: "SET_LOADING", value: false });
    }
  })();
};
