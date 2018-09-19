import * as fromCardsAction from './cards';
import * as fromColumnsAction from './columns';

export enum BoardActionTypes {
    BOARD_UNDO = "BOARD_UNDO",
    BOARD_REDO = "BOARD_REDO",
}

export interface UndoBoard { type: BoardActionTypes.BOARD_UNDO}

export interface RedoBoard { type: BoardActionTypes.BOARD_REDO}

export type Action = fromColumnsAction.Action | fromCardsAction.Action | UndoBoard | RedoBoard;

export const ActionTypes = {...fromColumnsAction.ActionTypes, ...fromCardsAction.ActionTypes, ...BoardActionTypes};