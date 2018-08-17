import * as uniqid from "uniqid";
import { ActionTypes } from "../actions/cardPopup";
import { Action } from "../actions/cardPopup";

export interface State {
    opened: boolean,
    columnId: string,
    cardId?: string
}

export const initialState: State = {
    opened: false,
    columnId: "",   
}

export function reducer(state: State = initialState, action: Action) {
    switch(action.type) {
        case ActionTypes.OPEN_CARD_POPUP: {
            return {
                ...state, 
                opened: action.payload.opened,
                columnId: action.payload.columnId,
                cardId: action.payload.cardId 
            };
        }
        case ActionTypes.CLOSE_CARD_POPUP: {
            return {
                ...state, 
                opened: action.payload.opened, 
            };
        }
        default:
            return state;
    }
}

