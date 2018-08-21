export enum ActionTypes {
    OPEN_CARD_DIALOG = "OPEN_CARD_DIALOG",
    CLOSE_CARD_DIALOG = "CLOSE_CARD_DIALOG"
}

export interface OpenCardDialog { 
    type: ActionTypes.OPEN_CARD_DIALOG,
    payload: 
    { 
        opened: boolean,
        columnId: string,
        cardId?: string
    }
}

export interface CloseCardDialog { 
    type: ActionTypes.CLOSE_CARD_DIALOG,
    payload: 
    { 
        opened: boolean
    }
}

export function openCardDialog(columnId: string, cardId?: string): OpenCardDialog {
    return {
        type: ActionTypes.OPEN_CARD_DIALOG,
        payload: {
            opened: true,
            columnId: columnId,
            cardId: cardId
        }
    };
}

export function closeCardDialog(): CloseCardDialog {
    return {
        type: ActionTypes.CLOSE_CARD_DIALOG,
        payload: {
            opened: false,
        }
    };
}

export type Action = OpenCardDialog | CloseCardDialog;