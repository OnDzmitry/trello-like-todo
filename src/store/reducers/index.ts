import * as fromColumn from './column';
import { combineReducers } from 'redux';

export interface State {
    column: fromColumn.State,
}

export const initialState: State = {
    column: fromColumn.initialState,
}

export const reducer = combineReducers<State>({
    column: fromColumn.reducer,
});