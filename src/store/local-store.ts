import { State } from './reducers/index';
import { List, Map } from "immutable";
import Cards from "../models/Cards";

let localState = JSON.parse(localStorage.getItem('board:state'));
if (localState) {
    let cards: Cards = localState.board.cards;
    
    Object.keys(cards).forEach((key) => {
        cards[key] = List(cards[key]);
    });
    
    localState.board = {...localState.board, columns: List(localState.board.columns), cards}
}

export default localState;