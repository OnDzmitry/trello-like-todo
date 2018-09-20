import CardModel from "../../models/Card";

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
        card?: CardModel
    }
}

export interface CloseCardDialogAction { 
    type: ActionTypes.CLOSE_CARD_DIALOG,
    payload: 
    { 
        opened: boolean
    }
}

export function openCardDialog(columnId: string, card?: CardModel): OpenCardDialogAction {
    return {
        type: ActionTypes.OPEN_CARD_DIALOG,
        payload: {
            opened: true,
            columnId: columnId,
            card: card
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