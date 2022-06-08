import axios from "axios";
import { endPoint } from "../../assets/config";

export const getDataArea = () => async (dispatch) => {
  dispatch({ type: "SET_LOADING", value: true });
  const URL = `${endPoint[0].url}${
    endPoint[0].port !== "" ? ":" + endPoint[0].port : ""
  }/api/v1/area/`;
  await axios
    .get(URL)
    .then((response) => {
      dispatch({ type: "SET_AREA", value: response.data.data.areas });
      setTimeout(() => {
        dispatch({ type: "SET_LOADING", value: false });
      }, 3000);
    })
    .catch((error) => {
      console.log(error);
    });
};

export const createArea = (form) => async (dispatch) => {
  const URL = `${endPoint[0].url}${
    endPoint[0].port !== "" ? ":" + endPoint[0].port : ""
  }/api/v1/area/`;
  await axios
    .post(URL, {
      area_name: form,
    })
    .then((response) => {
      alert("success");
      dispatch({ type: "SET_MODAL", value: false });
      dispatch({ type: "SET_AREA_ADD", value: "" });
      setTimeout(() => {
        dispatch(getDataArea());
      }, 2000);
    })
    .catch((error) => {
      alert("something wrong ");
    });
};

export const editArea = (form, id) => async (dispatch) => {
  const URL = `${endPoint[0].url}${
    endPoint[0].port !== "" ? ":" + endPoint[0].port : ""
  }/api/v1/area/${id}`;
  await axios
    .patch(URL, {
      area_name: form,
    })
    .then((response) => {
      alert("success edit");
      dispatch({ type: "SET_MODAL_EDIT", value: false });
      dispatch({ type: "SET_AREA_ADD", value: "" });
      setTimeout(() => {
        dispatch(getDataArea());
      }, 2000);
    })
    .catch((error) => {
      alert("something wrong ");
    });
};
