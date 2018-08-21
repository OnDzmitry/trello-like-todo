import * as uniqid from "uniqid";
import { ActionTypes } from "../actions/columnDialog";
import { Action } from "../actions/columnDialog";

export interface State {
    opened: boolean,
}

export const initialState: State = {
    opened: false,  
}

export function reducer(state: State = initialState, action: Action) {
    switch(action.type) {
        case ActionTypes.OPEN_COLUMN_DIALOG: {
            return {
                ...state, 
                opened: action.payload.opened,
            };
        }
        case ActionTypes.CLOSE_COLUMN_DIALOG: {
            return {
                ...state, 
                opened: action.payload.opened, 
            };
        }
        default:
            return state;
    }
}

