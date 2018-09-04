import * as uniqid from "uniqid";
import { ActionTypes } from "../actions/cards";
import { Action } from "../actions/cards";
import { List, Map } from "immutable";
import Cards from "../../models/Cards";
import Column from "../../models/Column";
import localState from '../local-store';

export type State = Cards;

export const initialState: State = localState && localState.board.cards ? localState.board.cards : {
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

            cards[columnId] = !(columnId in cards) ? List(): cards[columnId];
            cards[columnId] = cards[columnId].push(newCard);

            return {...cards};
        }
        case ActionTypes.SHIFT_CARD: {
            let cards = state;
            const { cardId, source, destination } = action.payload;

            const sourceCard = cards[source.droppableId].get(source.index);
            cards[destination.droppableId] = !(destination.droppableId in cards) ? List(): cards[destination.droppableId];

            cards[source.droppableId] = cards[source.droppableId].delete(source.index);
            cards[destination.droppableId] = cards[destination.droppableId].insert(destination.index, sourceCard).toList();

            return {...cards};
        }
        default:
            return state;
    }
}