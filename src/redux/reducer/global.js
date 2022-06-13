const initGlobalState = {
  isLoading: false,
  isLoadingMenu: false,
  token: "",
  isModal: false,
  isModalEdit: false,
  selectedValue: [],
  menus: [],
  isMenuAccess: false,
  isError: null,
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
    case "SET_MENU":
      return {
        ...state,
        menus: action.value,
      };
    case "SET_LOADING_MENU":
      return {
        ...state,
        isLoadingMenu: action.value,
      };
    case "SET_MENU_ACCESS":
      return {
        ...state,
        isMenuAccess: action.value,
      };

    case "SET_IS_ERROR":
      return {
        ...state,
        isError: action.value,
      };

    default:
      return state;
  }
};
