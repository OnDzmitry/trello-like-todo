import { createStore, Store } from 'redux';
import * as appReducers  from './reducers/index';
import ColumnReducers  from './reducers/column';

const initialState = {};

const store: Store<any> = createStore(ColumnReducers, initialState);

export default store;