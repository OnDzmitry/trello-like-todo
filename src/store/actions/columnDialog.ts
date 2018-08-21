export enum ActionTypes {
    OPEN_COLUMN_DIALOG = "OPEN_COLUMN_DIALOG",
    CLOSE_COLUMN_DIALOG = "CLOSE_COLUMN_DIALOG"
}

export interface OpenColumnDialog { 
    type: ActionTypes.OPEN_COLUMN_DIALOG,
    payload: 
    { 
        opened: boolean,
    }
}

export interface CloseColumnDialog { 
    type: ActionTypes.CLOSE_COLUMN_DIALOG,
    payload: 
    { 
        opened: boolean
    }
}

export function openColumnDialog(columnId: string, ColumnId?: string): OpenColumnDialog {
    return {
        type: ActionTypes.OPEN_COLUMN_DIALOG,
        payload: {
            opened: true,
        }
    };
}

export function closeColumnDialog(): CloseColumnDialog {
    return {
        type: ActionTypes.CLOSE_COLUMN_DIALOG,
        payload: {
            opened: false,
        }
    };
}

export type Action = OpenColumnDialog | CloseColumnDialog;