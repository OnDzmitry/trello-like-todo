import Card from '../../models/Card';

export enum ActionTypes {
    CREATE_CARD = "CREATE_CARD",
    REMOVE_CARD = "REMOVE_CARD",
    SHIFT_CARD = "SHIFT_CARD",
}

export interface DndData {
    droppableId: string,
    index: number
}

export interface CreateCardAction { type: ActionTypes.CREATE_CARD, payload: { columnId: string, card: Card }}

export interface RemoveCardAction { type: ActionTypes.REMOVE_CARD, payload: { columnId: string}}

export interface ShiftCardAction { type: ActionTypes.SHIFT_CARD, payload: { cardId: string, source: DndData, destination: DndData }}

export function createCard(columnId: string, card: Card): CreateCardAction {
    return {
        type: ActionTypes.CREATE_CARD,
        payload: {
            columnId: columnId,
            card: card
        }
    };
}

export function shiftCard(cardId: string, source: DndData, destination: DndData): ShiftCardAction {
    return {
        type: ActionTypes.SHIFT_CARD,
        payload: {
            cardId: cardId,
            source: source,
            destination: destination
        }
    };
}

export type Action = CreateCardAction | ShiftCardAction | RemoveCardAction;