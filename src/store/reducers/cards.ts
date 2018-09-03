import * as uniqid from "uniqid";
import { ActionTypes } from "../actions/cards";
import { Action } from "../actions/cards";
import { List, Map } from "immutable";
import Cards from "../../models/Cards";
import Column from "../../models/Column";


export interface State {
    cards: Cards,
}

export const initialState: State = {
    cards: {
        
    }
}

export function reducer(state: State = initialState, action: Action) {
    
    switch(action.type) {
        
        
        default:
            return state;
    }
}