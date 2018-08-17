import Card from "../../models/Card";
import * as uniqid from "uniqid";
import { ActionTypes } from "../actions/card";
import { Action } from "../actions/card";

export interface State {
    card: Card
}

export function reducer(state: State, action: Action) {
    switch(action.type) {
        case ActionTypes.ADD_CARD: {
            const card = action.payload.card;
            
            return {...state, card};
        }
        default:
            return state;
    }
}