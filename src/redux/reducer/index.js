import { combineReducers } from "redux";
import { globalReducer } from "./global";
import { areaReducer } from "./area";
import { departementReducer } from "./departement";

const reducer = combineReducers({
  globalReducer,
  areaReducer,
  departementReducer,
});

export default reducer;
