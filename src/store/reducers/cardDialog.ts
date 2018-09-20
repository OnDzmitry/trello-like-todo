import * as uniqid from "uniqid";
import { ActionTypes } from "../actions/cardDialog";
import { Action } from "../actions/cardDialog";
import CardModel from "../../models/Card";

export interface State {
    opened: boolean,
    columnId: string,
    card?: CardModel
}

export const initialState: State = {
    opened: false,
    columnId: "",   
}

export function reducer(state: State = initialState, action: Action) {
    switch(action.type) {
        case ActionTypes.OPEN_CARD_DIALOG: {
            return {
                ...state, 
                opened: action.payload.opened,
                columnId: action.payload.columnId,
                card: action.payload.card 
            };
        }
        case ActionTypes.CLOSE_CARD_DIALOG: {
            return {
                ...state, 
                opened: action.payload.opened, 
            };
        }
        default:
            return state;
    }
}

