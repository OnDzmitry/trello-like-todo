import * as uniqid from "uniqid";
import { ActionTypes } from "../actions/cards";
import { Action } from "../actions/cards";
import { List, Map } from "immutable";
import Cards from "../../models/Cards";
import Column from "../../models/Column";


export type State = Cards;

export const initialState: State = {
    "0asd": List([
        {
            id: "01",
            title: "First Card",
            text: "asdas",
        },
        {   
            id: "02",
            title: "Second Card",
            text: "asdas",
        }
])};

export function reducer(state: State = initialState, action: Action) {
    switch(action.type) {
        case ActionTypes.CREATE_CARD: {
            let cards = state;
            const { columnId } = action.payload;
            const newCard = {...action.payload.card, id: uniqid()};

            cards[columnId] = cards[columnId].push(newCard);
            return {...cards};
        }
        case ActionTypes.SHIFT_CARD: {
            
            return {...state};
        }
        default:
            return state;
    }
}