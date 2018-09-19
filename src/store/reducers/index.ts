import * as fromCardDialog from './cardDialog';
import * as fromBoard from './board';
import * as fromColumnDialog from './columnDialog';
import { combineReducers, Reducer, compose } from 'redux';
import undoable, { distinctState } from 'redux-undo';
import * as fromCardDialogActions from '../actions/cardDialog';
import * as fromColumns from './columns';
import * as fromCards from './cards';

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

const excludeActions = [fromCardDialogActions.openCardDialog, fromCardDialogActions.openCardDialog];

export const reducer = combineReducers({
    board: undoable(fromBoard.reducer, {filter: distinctState(), excludeAction: excludeActions}),
    cardDialog: fromCardDialog.reducer,
    columnDialog: fromColumnDialog.reducer
});