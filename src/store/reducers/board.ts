import * as fromColumns from './columns';
import * as fromCards from './cards';
import { Action, ActionTypes } from "../actions/board";
import { List } from "immutable";
import undoable, { distinctState } from 'redux-undo';

export interface State {
    columns?: fromColumns.State,
}

export interface UndoableState {
    present: State,
    past: Array<fromColumns.State>,
    future: Array<fromColumns.State>,
}

export const initialState: UndoableState = {
    present: { columns: fromColumns.initialState },
    past: [
        fromColumns.initialState
    ],
    future: [
        fromColumns.initialState
    ]
}

function undoableReducer(state: UndoableState = null, action: Action) {
    const { past, present, future } = state
  ​
    switch (action.type) {
      case ActionTypes.BOARD_UNDO:
        const previous = past[past.length - 1]
        const newPast = past.slice(0, past.length - 1)
        return {
          past: newPast,
          present: previous,
          future: [present, ...future]
        }
      case ActionTypes.BOARD_REDO:
        const next = future[0]
        const newFuture = future.slice(1)
        return {
          past: [...past, present],
          present: next,
          future: newFuture
        }
      default:
        return state
    }
}

export const reducer = (state: State, action: Action) => {
    let columnState = fromColumns.reducer(state, action);

    return fromCards.reducer(columnState, action);
};

export const uReducer = undoable(reducer);

export const Dreducer = (state: State, action: Action) => {
    console.log(state);

    let State = uReducer(state, action);

    return undoableReducer(State,action);
}