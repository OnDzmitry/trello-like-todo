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
        "0": [{
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
}

export function reducer(state: State = initialState, action: Action) {
    
    switch(action.type) {
        
        case ActionTypes.CREATE_CARD: {
            const card = action.payload.card;
            card.id = uniqid();

            let cards = state.cards;

            if (card.columnId in cards) {
                cards[card.columnId].push(card);                
            } else {
                cards[card.columnId] = [card];
            }

            return { ...state, cards: cards};
        }
        case ActionTypes.SHIFT_CARD: {
            const { index, columnId, cardId } = action.payload;

            const cards = Map(state.cards);

            const columnKey = cards.findKey((column) => {
                return column.some((card) => {
                    return card.id === cardId;
                });
            });

            const cardIndex = cards.get(columnKey).findIndex(card => card.id === cardId);

            cards.get(columnKey)[cardIndex].columnId = columnId;
            
            cards.get(columnId).splice(index, 0, cards.get(columnKey)[cardIndex]);
            cards.get(columnKey).splice(cardIndex, 1);

            return {...state, cards: cards.toObject()};
        }
        default:
            return state;
    }
}