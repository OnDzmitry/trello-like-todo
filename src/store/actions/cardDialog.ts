export enum ActionTypes {
    OPEN_CARD_DIALOG = "OPEN_CARD_DIALOG",
    CLOSE_CARD_DIALOG = "CLOSE_CARD_DIALOG"
}

export interface OpenCardDialogAction { 
    type: ActionTypes.OPEN_CARD_DIALOG,
    payload: 
    { 
        opened: boolean,
        columnId: string,
        cardId?: string
    }
}

export interface CloseCardDialogAction { 
    type: ActionTypes.CLOSE_CARD_DIALOG,
    payload: 
    { 
        opened: boolean
    }
}

export function openCardDialog(columnId: string, cardId?: string): OpenCardDialogAction {
    return {
        type: ActionTypes.OPEN_CARD_DIALOG,
        payload: {
            opened: true,
            columnId: columnId,
            cardId: cardId
        }
    };
}

export function closeCardDialog(): CloseCardDialogAction {
    return {
        type: ActionTypes.CLOSE_CARD_DIALOG,
        payload: {
            opened: false,
        }
    };
}

export type Action = OpenCardDialogAction | CloseCardDialogAction;