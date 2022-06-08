import axios from "axios";
import { endPoint } from "../../assets/config";
import { getDataArea } from "./area";

// Get Data
export const getDataDepartement = () => async (dispatch) => {
  dispatch({ type: "SET_LOADING", value: true });
  const URL = `${endPoint[0].url}${
    endPoint[0].port !== "" ? ":" + endPoint[0].port : ""
  }/api/v1/departement/`;
  await axios
    .get(URL)
    .then((response) => {
      dispatch({
        type: "SET_DEPARTEMENT",
        value: response.data.data.departements,
      });

      dispatch(getDataArea());
      setTimeout(() => {
        dispatch({ type: "SET_LOADING", value: false });
      }, 3000);
    })
    .catch((error) => {
      console.log(error);
    });
};

// Create Data
export const createDepartement = (form, selected) => async (dispatch) => {
  const URL = `${endPoint[0].url}${
    endPoint[0].port !== "" ? ":" + endPoint[0].port : ""
  }/api/v1/departement/`;

  const data = {
    departement_name: form,
    id_area: parseInt(selected.value),
  };

  await axios
    .post(URL, data)
    .then((response) => {
      alert("success");
      dispatch({ type: "SET_MODAL", value: false });
      dispatch({ type: "SET_DEPARTEMENT_ADD", value: "" });
      setTimeout(() => {
        dispatch(getDataDepartement());
      }, 2000);
    })
    .catch((error) => {
      alert("something wrong ");
    });
};

// Update Data
export const editDepartement = (form, selected, id) => async (dispatch) => {
  const URL = `${endPoint[0].url}${
    endPoint[0].port !== "" ? ":" + endPoint[0].port : ""
  }/api/v1/departement/${id}`;

  const data = {
    departement_name: form,
    id_area: parseInt(selected.value),
  };
  await axios
    .patch(URL, data)
    .then((response) => {
      alert("success edit");
      dispatch({ type: "SET_MODAL_EDIT", value: false });
      dispatch({ type: "SET_DEPARTEMENT_ADD", value: "" });
      dispatch({ type: "SET_SELECTED", value: [] });
      setTimeout(() => {
        dispatch(getDataDepartement());
      }, 2000);
    })
    .catch((error) => {
      alert("something wrong ");
    });
};
