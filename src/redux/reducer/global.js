const initGlobalState = {
  isLoading: false,
  token: "",
  isModal: false,
  isModalEdit: false,
  selectedValue: [],
};

export const globalReducer = (state = initGlobalState, action) => {
  switch (action.type) {
    case "SET_LOADING":
      return {
        ...state,
        isLoading: action.value,
      };
    case "SET_TOKEN":
      return {
        ...state,
        token: action.value,
      };
    case "SET_MODAL":
      return {
        ...state,
        isModal: action.value,
      };
    case "SET_MODAL_EDIT":
      return {
        ...state,
        isModalEdit: action.value,
      };
    case "SET_SELECTED":
      return {
        ...state,
        selectedValue: action.value,
      };

    default:
      return state;
  }
};
