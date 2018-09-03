export enum ActionTypes {
    OPEN_COLUMN_DIALOG = "OPEN_COLUMN_DIALOG",
    CLOSE_COLUMN_DIALOG = "CLOSE_COLUMN_DIALOG"
}

export interface OpenColumnDialogAction { 
    type: ActionTypes.OPEN_COLUMN_DIALOG,
    payload: 
    { 
        opened: boolean,
    }
}

export interface CloseColumnDialogAction { 
    type: ActionTypes.CLOSE_COLUMN_DIALOG,
    payload: 
    { 
        opened: boolean
    }
}

export function openColumnDialog(columnId: string, ColumnId?: string): OpenColumnDialogAction {
    return {
        type: ActionTypes.OPEN_COLUMN_DIALOG,
        payload: {
            opened: true,
        }
    };
}

export function closeColumnDialog(): CloseColumnDialogAction {
    return {
        type: ActionTypes.CLOSE_COLUMN_DIALOG,
        payload: {
            opened: false,
        }
    };
}

export type Action = OpenColumnDialogAction | CloseColumnDialogAction;