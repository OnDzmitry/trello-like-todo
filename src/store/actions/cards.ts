import Card from '../../models/Card';

export enum ActionTypes {
    CREATE_CARD = "CREATE_CARD",
    REMOVE_CARD = "REMOVE_CARD",
}

export interface CreateCardAction { type: ActionTypes.CREATE_CARD, payload: { card: Card } }
export interface RemoveCardAction { type: ActionTypes.REMOVE_CARD, payload: { columnId: string}}

export function createCard(card: Card): CreateCardAction {
    return {
        type: ActionTypes.CREATE_CARD,
        payload: {
            card
        }
    };
}

/*export function removeColumn(columnId: number): RemoveColumnAction {
    return { 
        type: ActionTypes.REMOVE_COLUMN,
        payload: { columnId },
    };
}*/

export type Action = CreateCardAction;