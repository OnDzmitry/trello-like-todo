import * as fromCardDialog from './cardDialog';
import * as fromBoard from './board';
import * as fromColumnDialog from './columnDialog';
import { combineReducers, Reducer, compose } from 'redux';
import undoable, { distinctState } from 'redux-undo';
import * as fromCardDialogActions from '../actions/cardDialog';
import * as fromColumnDialogActions from '../actions/columnDialog';
import { ignoreActions } from 'redux-ignore';

export interface State {
    board: { 
        present: fromBoard.State
    },
    cardDialog: fromCardDialog.State,
    columnDialog: fromColumnDialog.State,
}

export const initialState: State = {
    board: {
        present: fromBoard.initialState
    },
    cardDialog: fromCardDialog.initialState,
    columnDialog: fromColumnDialog.initialState,
}

const ignoredBoardActions = [
    fromCardDialogActions.ActionTypes.CLOSE_CARD_DIALOG,
    fromCardDialogActions.ActionTypes.OPEN_CARD_DIALOG,
    fromColumnDialogActions.ActionTypes.OPEN_COLUMN_DIALOG,
    fromColumnDialogActions.ActionTypes.CLOSE_COLUMN_DIALOG,
];

export const reducer = combineReducers({
    board: ignoreActions(undoable(fromBoard.reducer, {ignoreInitialState: true,debug: true,syncFilter: true,}), ignoredBoardActions),
    cardDialog: fromCardDialog.reducer,
    columnDialog: fromColumnDialog.reducer
});