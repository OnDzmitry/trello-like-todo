import * as uniqid from "uniqid";
import { ActionTypes, Action } from "../actions/board";
import { List, Map } from "immutable";
import * as fromBoard from "./board";

export function reducer(state: fromBoard.State = null, action: Action) {
    switch(action.type) {
        case ActionTypes.CREATE_CARD: {
            let columns = state.columns;

            const { columnId } = action.payload;
            const newCard = {...action.payload.card, id: uniqid()};

            columns = columns.update(
                columns.findIndex((column) => column.id === columnId),
                (column) => {
                    column.cards = column.cards.push(newCard);

                    return {...column};
                }
            );

            return {...state, columns};
        }
        case ActionTypes.REMOVE_CARD: {
            const { columnId, card } = action.payload;
            const cardId = card.id;
            let columns = state.columns;

            columns = columns.update(
                columns.findIndex((column) => column.id === columnId),
                (column) => {
                    column.cards = column.cards.delete(column.cards.findIndex((card) => card.id === cardId));

                    return {...column};
                }
            )

            return {...state, columns};
        }
        case ActionTypes.UPDATE_CARD: {
            let { columns } = state;
            const { columnId, card } = action.payload;
            const cardId = card.id;

            columns = columns.update(
                columns.findIndex(column => column.id === columnId),
                (column) => {
                    column.cards = column.cards.update(
                        column.cards.findIndex((card) => card.id === cardId),
                        () => card
                    );

                    return {...column};
                }
            );

            return {...state, columns};
        }
        case ActionTypes.SHIFT_CARD: {
            let { columns } = state;
            const { cardId, source, destination } = action.payload;
            
            const sourceCard = columns.find(column => column.id === source.droppableId).cards.get(source.index);

            columns = columns.update(
                columns.findIndex(column => column.id === source.droppableId),
                (column) => {
                    column.cards = column.cards.delete(source.index);

                    return {...column};
                }
            ); 
            
            columns = columns.update(
                columns.findIndex(column => column.id === destination.droppableId),
                (column) => {
                    column.cards = column.cards.insert(destination.index, sourceCard);

                    return {...column};
                }
            );

            return {...state, columns};
        }
        default:
            return state;
    }
}