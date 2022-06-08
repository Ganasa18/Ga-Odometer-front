const initDepartement = {
  departement: [],
  departementCreate: "",
};

export const departementReducer = (state = initDepartement, action) => {
  switch (action.type) {
    case "SET_DEPARTEMENT":
      return {
        ...state,
        departement: action.value,
      };
    case "SET_DEPARTEMENT_ADD":
      return {
        ...state,
        areaCreate: action.value,
      };

    default:
      return state;
  }
};
