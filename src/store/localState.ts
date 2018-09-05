import { State, initialState } from './reducers';
import { List, Map } from "immutable";
import Cards from "../models/Cards";

let localState = initialState;

try {
    const parsedState = JSON.parse(localStorage.getItem('board:state'));
    
    if (parsedState) {
        localState = parsedState;
        let cards: Cards = localState.board.cards;
        
        Object.keys(cards).forEach((key) => {
            cards[key] = List(cards[key]);
        });
        
        localState.board = {...localState.board, columns: List(localState.board.columns), cards}
    }
} catch(e) {
    console.log('Parse error from localStorage');
    localStorage.removeItem('board:state');
}

export default localState;