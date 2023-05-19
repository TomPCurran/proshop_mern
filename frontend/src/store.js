import { configureStore } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

const store = configureStore({ reducer: reducers });

//const reducer = combineReducers({});
//const initialState = {};
//const store = createStore(reducer, initialState);
