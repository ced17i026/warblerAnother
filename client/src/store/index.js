import rootReducer from './reducers';
import {createStore,applyMiddleWare,compose} from 'redux';
import thunk from "redux-thunk";

export function configureStore(){
    const store = createStore(rootReducer,compose(applyMiddleWare(thunk),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    ));
    return store;
}