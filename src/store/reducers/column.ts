import Column from "../../models/Column";
import * as uniqid from "uniqid";
import { ActionTypes } from "../actions/column";
import { Action } from "../actions/column";

export interface State {
    columns: Column[]
}

export const initialState: State = {
    columns: [{
        id: uniqid(),
        title: "First Column",
        cards: [
            {id: uniqid(), columnId: "0", title: "title", text: "test text"},
            {id: uniqid(), columnId: "0", title: "title", text: "t text"},
            {id: uniqid(), columnId: "0", title: "title", text: "test text"},
            {id: uniqid(), columnId: "0", title: "title", text: "tttt text"}
        ]
    }]
}

export function reducer(state: State = initialState, action: Action) {
    switch(action.type) {
        case ActionTypes.ADD_COLUMN: {
            const column = action.payload.column;
            
            return {...state, columns: [...state.columns, column]};
        }
        case ActionTypes.REMOVE_COLUMN: {
            return state;
        }
        default:
            return state;
    }
}

