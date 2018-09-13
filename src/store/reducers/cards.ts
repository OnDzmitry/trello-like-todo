import * as uniqid from "uniqid";
import { ActionTypes } from "../actions/cards";
import { Action } from "../actions/cards";
import { List, Map } from "immutable";
import Cards from "../../models/Cards";

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
    ])
};

export function reducer(state: State = null, action: Action) {
    switch(action.type) {
        case ActionTypes.CREATE_CARD: {
            let cards = state;
            const { columnId } = action.payload;
            const newCard = {...action.payload.card, id: uniqid()};

            cards[columnId] = !(columnId in cards) ? List(): cards[columnId];
            cards[columnId] = cards[columnId].push(newCard);

            return {...cards};
        }
        case ActionTypes.REMOVE_CARD: {
            let cards = state;
            const { columnId, card } = action.payload;

            cards[columnId] = cards[columnId].delete(
                cards[columnId].findIndex(
                    (columnCard) => columnCard.id === card.id
                )
            );

            return {...cards};
        }
        case ActionTypes.UPDATE_CARD: {
            let cards = state;
            const { columnId, card } = action.payload;
            let columnCards = cards[columnId];
            
            cards[columnId] = columnCards.update(columnCards.findIndex((columnCard) => columnCard.id === card.id), () =>  card);

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