import Card from "../../models/Card";
import * as uniqid from "uniqid";
import { ActionTypes } from "../actions/cards";
import { Action } from "../actions/cards";
import { List, Map } from "immutable";


export interface State {
    cards: Card[]
}

export const initialState: State = {
    cards:  [{
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
    }]
}

export function reducer(state: State = initialState, action: Action) {
    switch(action.type) {
        case ActionTypes.CREATE_CARD: {
            const card = action.payload.card;
            card.id = uniqid();

            let cards = List(state.cards);
            cards = cards.push(card);

            return { ...state, cards: cards.toArray()};
        }
        default:
            return state;
    }
}