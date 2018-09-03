import Column from "../../models/Column";
import * as uniqid from "uniqid";
import * as fromColumns from './columns';
import * as fromCards from './cards';
import { ActionTypes, Action } from "../actions/board";
import { Map, List } from 'immutable';
import { combineReducers } from "redux";

export interface State {
    columns?: fromColumns.State,
    cards?: fromCards.State
}

export const reducer = combineReducers<State>({
    columns: fromColumns.reducer,
    cards: fromCards.reducer
});