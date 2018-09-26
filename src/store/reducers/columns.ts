import Column from "../../models/Column";
import * as uniqid from "uniqid";
import { ActionTypes, Action } from "../actions/board";
import { Map, List } from 'immutable';
import * as fromBoard from "./board";

export type State = List<Column>;

export const initialState: State = List([
    {
        id: "0asd",
        title: "First Column",
        cards: List([
            {
                id: "01",
                title: "First Card",
                text: "asdas",
                color: "",
            },
            {   
                id: "02",
                title: "Second Card",
                text: "asdas",
                color: " ",
            }
        ])
    }
]);

export function reducer(state: fromBoard.State = null, action: Action) {
    switch(action.type) {
        case ActionTypes.CREATE_COLUMN: {
            const columns = state.columns;
            const newColumn = action.payload.column;
            newColumn.id = uniqid();
            newColumn.cards = List();

            return {...state, columns: columns.push(newColumn)};
        }
        case ActionTypes.REMOVE_COLUMN: {
            let columns = state.columns;
            const { columnId } = action.payload;

            columns = columns.delete(
                columns.findIndex(column => column.id === columnId)
            );

            return {...state, columns};
        }
        case ActionTypes.REORDER_COLUMNS: {
            const {startIndex, endIndex} = action.payload;
            let columns = state.columns;
            const endColumn = columns.get(startIndex);
            const startColumn = columns.get(endIndex);

            const removedColumn = columns.get(startIndex);
            columns = columns.splice(startIndex, 1).toList();
            columns = columns.splice(endIndex, 0, removedColumn).toList();
            
            return {...state, columns};
        }
        default: {
            return state;
        }
    }
}