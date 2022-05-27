const initGlobalState = {
  isLoading: false,
  token: "",
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
    default:
      return state;
  }
};
