import Column from '../../models/Column';

export enum ActionTypes {
    ADD_COLUMN = "ADD_COLUMN",
    REMOVE_COLUMN = "REMOVE_COLUMN",
}

export interface AddColumnAction { type: ActionTypes.ADD_COLUMN, payload: { column: Column}}
export interface RemoveColumnAction { type: ActionTypes.REMOVE_COLUMN, payload: { columnId: number}}

export function addColumn(column: Column): AddColumnAction {
    return {
        type: ActionTypes.ADD_COLUMN,
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

export type Action = AddColumnAction | RemoveColumnAction;