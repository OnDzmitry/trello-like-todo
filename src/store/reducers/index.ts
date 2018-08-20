import * as fromColumn from './columns';
import * as fromCardPopup from './cardPopup';
import * as fromCards from './cards';
import { combineReducers } from 'redux';

export interface State {
    columns: fromColumn.State,
    cardPopup: fromCardPopup.State
    cards: fromCards.State
}

export const initialState: State = {
    columns: fromColumn.initialState,
    cardPopup: fromCardPopup.initialState,
    cards: fromCards.initialState
}

export const reducer = combineReducers<State>({
    columns: fromColumn.reducer,
    cardPopup: fromCardPopup.reducer,
    cards: fromCards.reducer
});