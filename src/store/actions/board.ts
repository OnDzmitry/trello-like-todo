import * as fromCardsAction from './cards';
import * as fromColumnsAction from './columns';

export type Action = fromColumnsAction.Action | fromCardsAction.Action;

export const ActionTypes = {...fromColumnsAction.ActionTypes, ...fromCardsAction.ActionTypes};