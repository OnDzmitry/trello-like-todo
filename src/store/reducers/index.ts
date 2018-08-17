import * as fromColumn from './column';
import * as fromCardPopup from './cardPopup';
import { combineReducers } from 'redux';

export interface State {
    columns: fromColumn.State,
    cardPopup: fromCardPopup.State
}

export const initialState: State = {
    columns: fromColumn.initialState,
    cardPopup: fromCardPopup.initialState,
}

export const reducer = combineReducers<State>({
    columns: fromColumn.reducer,
    cardPopup: fromCardPopup.reducer
});