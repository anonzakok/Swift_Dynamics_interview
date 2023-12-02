import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';

// reducer
import authenticate from 'store/auth/authenticate';

// interface
import { IAuthenticateState } from 'store/auth/authenticate';

export interface IReducer {
  authenticate: IAuthenticateState;
}

const rootReducer = combineReducers({
  authenticate,
});

export default createStore(rootReducer, applyMiddleware(thunkMiddleware));
