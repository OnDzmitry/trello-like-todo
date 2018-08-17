import Column from '../../models/Column';

export enum ActionTypes {
    OPEN_CARD_POPUP = "OPEN_CARD_POPUP",
    CLOSE_CARD_POPUP = "CLOSE_CARD_POPUP"
}

export interface OpenCardPopup { 
    type: ActionTypes.OPEN_CARD_POPUP,
    payload: 
    { 
        opened: boolean,
        columnId: string,
        cardId?: string
    }
}

export interface CloseCardPopup { 
    type: ActionTypes.CLOSE_CARD_POPUP,
    payload: 
    { 
        opened: boolean
    }
}

export function openCardPopup(columnId: string, cardId?: string): OpenCardPopup {
    return {
        type: ActionTypes.OPEN_CARD_POPUP,
        payload: {
            opened: true,
            columnId: columnId,
            cardId: cardId
        }
    };
}

export function closeCardPopup(): CloseCardPopup {
    return {
        type: ActionTypes.CLOSE_CARD_POPUP,
        payload: {
            opened: false,
        }
    };
}

export type Action = OpenCardPopup | CloseCardPopup;