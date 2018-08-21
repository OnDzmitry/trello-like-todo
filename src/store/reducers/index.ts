import * as fromColumn from './columns';
import * as fromCardDialog from './cardDialog';
import * as fromCards from './cards';
import * as fromColumnDialog from './columnDialog';
import { combineReducers } from 'redux';

export interface State {
    columns: fromColumn.State,
    cardDialog: fromCardDialog.State,
    columnDialog: fromColumnDialog.State,
    cards: fromCards.State
}

export const initialState: State = {
    columns: fromColumn.initialState,
    cardDialog: fromCardDialog.initialState,
    cards: fromCards.initialState,
    columnDialog: fromColumnDialog.initialState
}

export const reducer = combineReducers<State>({
    columns: fromColumn.reducer,
    cardDialog: fromCardDialog.reducer,
    cards: fromCards.reducer,
    columnDialog: fromColumnDialog.reducer
});