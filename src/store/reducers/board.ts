import Column from "../../models/Column";
import * as uniqid from "uniqid";
import { ActionTypes, Action } from "../actions/board";
import { Map, List } from 'immutable';

export interface State {
    columns?: List<Column>
}

export const initialState: State = {
    columns: List([{
        position: 0,
        id: "0asd",
        title: "First Column",
        cards: List([
            {
                id: "01",
                title: "First Card",
                text: "asdas",
                position: 0
            },
            {   
                id: "02",
                title: "Second Card",
                text: "asdas",
                position: 1
            }
        ]),
    }])
};

export function reducer(state: State = initialState, action: Action) {
    switch(action.type) {
        case ActionTypes.CREATE_COLUMN: {
            const { columns } = state;
            const newColumn = action.payload.column;
            newColumn.id = uniqid();
            newColumn.cards = List();

            return {...state, columns: columns.push(newColumn)};
        }
        case ActionTypes.REMOVE_COLUMN: {
            return state;
        }
        case ActionTypes.REORDER_COLUMNS: {
            const {startIndex, endIndex} = action.payload;
            let { columns } = state;
            const endColumn = columns.get(startIndex);
            const startColumn = columns.get(endIndex);

            const removedColumn = columns.get(startIndex);
            columns = columns.splice(startIndex, 1).toList();
            columns = columns.splice(endIndex, 0, removedColumn).toList();
            
            return {...state, columns: columns};
        }
        case ActionTypes.CREATE_CARD: {
            let { columns } = state;
            const { columnId } = action.payload;
            const newCard = {...action.payload.card, id: uniqid()};

            const columnIndex = columns.findIndex(column => column.id === columnId);

            const cards = columns.get(columnIndex).cards;

            columns.get(columnIndex).cards = cards.push(newCard);

            return {...state, columns: columns.sort()};
        }
        case ActionTypes.SHIFT_CARD: {
            let { columns } = state;
            const { cardId, source, destination } = action.payload;
            
            const sourceColumnIndex = columns.findIndex(column => column.id === source.droppableId);
            const destinationColumnIndex = columns.findIndex(column => column.id === destination.droppableId);
            
            const sourceCard = columns.get(sourceColumnIndex).cards.get(source.index);

            const destinationColumn = columns.get(destinationColumnIndex);
            const sourceColumn = columns.get(sourceColumnIndex);

            if (source.droppableId === destination.droppableId) {
                sourceColumn.cards = sourceColumn.cards.remove(source.index);
                sourceColumn.cards = sourceColumn.cards.insert(destination.index, sourceCard);
            } else {
                destinationColumn.cards = destinationColumn.cards.insert(destination.index, sourceCard);
                sourceColumn.cards = sourceColumn.cards.splice(source.index, 1).toList();    
            }

            columns.get(destinationColumnIndex).cards = destinationColumn.cards;
            columns.get(sourceColumnIndex).cards = sourceColumn.cards;
            
            return {...state, columns: columns.sort()};
        }
        default: {
            return state;
        }
    }
}