import Column from "../../models/Column";
import * as uniqid from "uniqid";
import { ActionTypes, Action } from "../actions/board";
import { Map, List } from 'immutable';
import localState from '../local-store';

export type State = List<Column>;

export const initialState: State = localState && localState.board.columns ? 
    List(localState.board.columns) : 
    List([{
        id: "0asd",
        title: "First Column",
    }]);

export function reducer(state: State = initialState, action: Action) {
    switch(action.type) {
        case ActionTypes.CREATE_COLUMN: {
            const columns = state;
            const newColumn = action.payload.column;
            newColumn.id = uniqid();

            return state.push(newColumn);
        }
        case ActionTypes.REMOVE_COLUMN: {
            return state;
        }
        case ActionTypes.REORDER_COLUMNS: {
            const {startIndex, endIndex} = action.payload;
            let columns = state;
            const endColumn = columns.get(startIndex);
            const startColumn = columns.get(endIndex);

            const removedColumn = columns.get(startIndex);
            columns = columns.splice(startIndex, 1).toList();
            columns = columns.splice(endIndex, 0, removedColumn).toList();
            
            return columns;
        }
        default: {
            return state;
        }
    }
}