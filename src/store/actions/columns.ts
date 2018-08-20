import Column from '../../models/Column';

export enum ActionTypes {
    CREATE_COLUMN = "CREATE_COLUMN",
    REMOVE_COLUMN = "REMOVE_COLUMN",
}

export interface CreateColumnAction { type: ActionTypes.CREATE_COLUMN, payload: { column: Column}}
export interface RemoveColumnAction { type: ActionTypes.REMOVE_COLUMN, payload: { columnId: number}}

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

export type Action = CreateColumnAction | RemoveColumnAction;