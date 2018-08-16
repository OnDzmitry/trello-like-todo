import * as fromColumn from './column';
import { combineReducers } from 'redux';

export interface State {
    columns: fromColumn.State,
}

export const initialState: State = {
    columns: fromColumn.initialState,
}

export const reducer = combineReducers<State>({
    columns: fromColumn.reducer,
});