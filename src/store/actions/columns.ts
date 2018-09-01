import Column from '../../models/Column';

export enum ActionTypes {
    CREATE_COLUMN = "CREATE_COLUMN",
    REMOVE_COLUMN = "REMOVE_COLUMN",
    REORDER_COLUMNS = "REORDER_COLUMNS"
}

export interface CreateColumnAction { type: ActionTypes.CREATE_COLUMN, payload: { column: Column}}
export interface RemoveColumnAction { type: ActionTypes.REMOVE_COLUMN, payload: { columnId: number}}

export interface ReorderColumns { 
    type: ActionTypes.REORDER_COLUMNS,
    payload: { 
        startIndex: number,
        endIndex: number 
    }
}

export function createColumn(column: Column): CreateColumnAction {
    return {
        type: ActionTypes.CREATE_COLUMN,
        payload: {
            column: column,
        }
    };
}

export function removeColumn(columnId: number): RemoveColumnAction {
    return { 
        type: ActionTypes.REMOVE_COLUMN,
        payload: { columnId },
    };
}

export function reorderColumns(startIndex: number, endIndex: number): ReorderColumns {
    return {
        type: ActionTypes.REORDER_COLUMNS,
        payload: { 
            startIndex: startIndex,
            endIndex: endIndex 
        }
    }
}

export type Action = CreateColumnAction | RemoveColumnAction | ReorderColumns;