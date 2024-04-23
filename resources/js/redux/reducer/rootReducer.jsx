import { combineReducers } from "redux";
import productReducer from "./ProductReducer";
import categoryReducer from "./CategoryReducer";


const rootReducer = combineReducers({
  product: productReducer,
  category: categoryReducer,

});

export default rootReducer;