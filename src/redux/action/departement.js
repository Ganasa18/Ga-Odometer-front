import axios from "axios";
import { endPoint } from "../../assets/config";
import { MessageComp } from "../../components";
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

  dispatch({ type: "SET_IS_ERROR", value: null });

  const data = {
    departement_name: form,
    id_area: parseInt(selected.value),
  };

  await axios
    .post(URL, data)
    .then((response) => {
      dispatch({ type: "SET_MODAL", value: false });
      dispatch({ type: "SET_DEPARTEMENT_ADD", value: "" });
      MessageComp("Succsess Create", "success");
      setTimeout(() => {
        dispatch(getDataDepartement());
      }, 2000);
    })
    .catch((err) => {
      if (err.response.status === 400) {
        const error = {
          departement_name: err.response.data.message,
        };
        return dispatch({ type: "SET_IS_ERROR", value: error });
      }
      MessageComp("Something Wrong", "warning");
    });
};

// Update Data
export const editDepartement = (form, selected, id) => async (dispatch) => {
  const URL = `${endPoint[0].url}${
    endPoint[0].port !== "" ? ":" + endPoint[0].port : ""
  }/api/v1/departement/${id}`;

  dispatch({ type: "SET_IS_ERROR", value: null });

  const data = {
    departement_name: form,
    id_area: parseInt(selected.value),
  };
  await axios
    .patch(URL, data)
    .then((response) => {
      dispatch({ type: "SET_MODAL_EDIT", value: false });
      dispatch({ type: "SET_DEPARTEMENT_ADD", value: "" });
      dispatch({ type: "SET_SELECTED", value: [] });
      MessageComp("Succsess Updated Data", "success");
      setTimeout(() => {
        dispatch(getDataDepartement());
      }, 2000);
    })
    .catch((err) => {
      if (err.response.status === 400) {
        const error = {
          departement_name: err.response.data.message,
        };
        return dispatch({ type: "SET_IS_ERROR", value: error });
      }
      MessageComp("Something Wrong", "warning");
    });
};
