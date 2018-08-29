import Column from "../../models/Column";
import * as uniqid from "uniqid";
import { ActionTypes } from "../actions/columns";
import { Action } from "../actions/columns";
import { Map, List } from 'immutable';

export interface State {
    columns: Column[]
}

export const initialState: State = {
    columns: [{
        id: "0asd",
        title: "First Column",
        cards: [{
            id: uniqid(),
            columnId: "0",
            title: "First Card",
            text: "asdas"
        },
        {
            id: uniqid(),
            columnId: "0",
            title: "Second Card",
            text: "asdas"
        }],
    }]
}

export function reducer(state: State = initialState, action: Action) {
    console.log(state);
    switch(action.type) {
        case ActionTypes.CREATE_COLUMN: {
            const newColumn = action.payload.column;
            newColumn.id = uniqid();
            newColumn.cards = [];

            return {...state, columns: [...state.columns, newColumn]};
        }
        case ActionTypes.REMOVE_COLUMN: {
            return state;
        }
        case ActionTypes.REORDER_COLUMNS: {
            const {startIndex, endIndex} = action.payload;

            const columns = Array.from(state.columns);

            const [removed] = columns.splice(startIndex, 1);
            columns.splice(endIndex, 0, removed);

            return {...state, columns: columns};
        }
        default:
            return state;
    }
}

