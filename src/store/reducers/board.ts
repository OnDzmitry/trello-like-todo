import * as fromColumns from './columns';
import * as fromCards from './cards';
import { Action } from "../actions/board";

export interface State {
    columns?: fromColumns.State,
}

export const initialState: State = {
    columns: fromColumns.initialState,
}

export const reducer = (state: State, action: Action) => {
    const columnState = fromColumns.reducer(state, action);

    return fromCards.reducer(columnState, action);
};