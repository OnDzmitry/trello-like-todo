import Column from "../../models/Column";
import * as uniqid from "uniqid";
import { ActionTypes } from "../actions/columns";
import { Action } from "../actions/columns";

export interface State {
    columns: Column[]
}

export const initialState: State = {
    columns: [{
        id: "0",
        title: "First Column",
    }]
}

export function reducer(state: State = initialState, action: Action) {
    switch(action.type) {
        case ActionTypes.CREATE_COLUMN: {
            const column = action.payload.column;
            column.id = uniqid();
            
            return {...state, columns: [...state.columns, column]};
        }
        case ActionTypes.REMOVE_COLUMN: {
            return state;
        }
        default:
            return state;
    }
}

