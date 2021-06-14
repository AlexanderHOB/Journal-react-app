import thunk from 'redux-thunk' ;
import { createStore, applyMiddleware,compose,combineReducers } from 'redux';
import {authReducer } from '../reducers/authReducer';
import {uiAuthReducer} from '../reducers/uiAuthReducer';
import { noteReducer } from '../reducers/noteReducer';


const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const myReducers = combineReducers({
    auth:authReducer,
    uiAuth:uiAuthReducer,
    notes:noteReducer
}
    )
export const store = createStore(
    myReducers,
    composeEnhancers(
        applyMiddleware(thunk)
        )
    );