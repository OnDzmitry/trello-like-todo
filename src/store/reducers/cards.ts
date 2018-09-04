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

            cards[columnId] = !cards[columnId] ? List([newCard]) : cards[columnId].push(newCard);

            return {...cards};
        }
        case ActionTypes.SHIFT_CARD: {
            let cards = state;
            const { cardId, source, destination } = action.payload;

            const sourceCard = cards[source.droppableId].get(source.index);
            
            cards[destination.droppableId] = cards[destination.droppableId].insert(destination.index, sourceCard);
            cards[source.droppableId] = cards[source.droppableId].remove(source.index);

            return {...cards};
        }
        default:
            return state;
    }
}