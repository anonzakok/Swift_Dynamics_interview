import { combineReducers, createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";

// reducer
import form from 'store/form/form.reducer';

// interface
import { IFormState } from "shared/modules/form";
export interface IReducer {
  form: IFormState;
}

const rootReducer = combineReducers({
  form,
});

export default createStore(rootReducer, applyMiddleware(thunkMiddleware));
