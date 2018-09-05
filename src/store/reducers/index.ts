import * as fromCardDialog from './cardDialog';
import * as fromBoard from './board';
import * as fromColumnDialog from './columnDialog';
import { combineReducers, Reducer } from 'redux';

export interface State {
    board: fromBoard.State,
    cardDialog: fromCardDialog.State,
    columnDialog: fromColumnDialog.State,
}

export const initialState: State = {
    board: fromBoard.initialState,
    cardDialog: fromCardDialog.initialState,
    columnDialog: fromColumnDialog.initialState,
}

export const reducer = combineReducers({
    board: fromBoard.reducer,
    cardDialog: fromCardDialog.reducer,
    columnDialog: fromColumnDialog.reducer
});