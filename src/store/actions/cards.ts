import CardModel from '../../models/Card';

export enum ActionTypes {
    CREATE_CARD = "CREATE_CARD",
    UPDATE_CARD = "UPDATE_CARD",
    REMOVE_CARD = "REMOVE_CARD",
    SHIFT_CARD = "SHIFT_CARD",
}

export interface DndData {
    droppableId: string,
    index: number
}

export interface CreateCardAction { type: ActionTypes.CREATE_CARD, payload: { columnId: string, card: CardModel }}

export interface RemoveCardAction { type: ActionTypes.REMOVE_CARD, payload: { columnId: string, card: CardModel }}

export interface ShiftCardAction { type: ActionTypes.SHIFT_CARD, payload: { cardId: string, source: DndData, destination: DndData }}

export interface UpdateCardAction { type: ActionTypes.UPDATE_CARD, payload: {columnId: string, card: CardModel} }

export function createCard(columnId: string, card: CardModel): CreateCardAction {
    return {
        type: ActionTypes.CREATE_CARD,
        payload: {
            columnId: columnId,
            card: card
        }
    };
}

export function removeCard(columnId: string, card: CardModel): RemoveCardAction {
    return {
        type: ActionTypes.REMOVE_CARD,
        payload: {
            columnId: columnId,
            card: card
        }
    }
}

export function updateCard(columnId: string, card: CardModel): UpdateCardAction {
    return {
        type: ActionTypes.UPDATE_CARD,
        payload: {
            columnId: columnId,
            card: card
        }
    }
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

export type Action = CreateCardAction | ShiftCardAction | RemoveCardAction | UpdateCardAction;