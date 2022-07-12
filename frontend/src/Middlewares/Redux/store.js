import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
// Example start --- you can remove from this line
import Template_reducer_ from './Reducers/Tempate.reducers';
const all_reducers = combineReducers({ Template_reducer_ });
// Example end --- to this line if you dont need the template

const store = createStore(all_reducers, applyMiddleware(thunk));

export default store;
