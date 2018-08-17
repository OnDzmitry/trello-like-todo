import Card from '../../models/Card';

export enum ActionTypes {
    ADD_CARD = "ADD_CARD",
    REMOVE_CARD = "REMOVE_CARD",
}

export interface AddCardAction { type: ActionTypes.ADD_CARD, payload: {card: Card } }
export interface RemoveCardAction { type: ActionTypes.REMOVE_CARD, payload: { columnId: number}}

export function addCardToColumn(columnId: string, card: Card): AddCardAction {
    return {
        type: ActionTypes.ADD_CARD,
        payload: { 
            card: card
        }
    };
}

/*export function removeColumn(columnId: number): RemoveColumnAction {
    return { 
        type: ActionTypes.REMOVE_COLUMN,
        payload: { columnId },
    };
}*/

export type Action = AddCardAction;