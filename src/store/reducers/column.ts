import Column from "../../models/Column";

import { ActionTypes } from "../actions/column";
import { Action } from "../actions/column";

export interface State {
    columns: Column[]
}

export const initialState: State = {
    columns: [{
        id: 0,
        title: "First Column",
        cards: [{text: "test text"}]
    },]
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

