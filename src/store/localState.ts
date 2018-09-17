import { State, initialState } from './reducers';
import { List, Map } from "immutable";
import Cards from "../models/Cards";

let localState = initialState;

try {
    const parsedState = JSON.parse(localStorage.getItem('board:state'));
    
    if (parsedState) {
        localState = parsedState;
        let cards: Cards = localState.board.present.cards;
        
        Object.keys(cards).forEach((key) => {
            cards[key] = List(cards[key]);
        });
        
        localState.board.present.columns = List(localState.board.present.columns);
        localState.board.present.cards = cards;
    }
} catch(e) {
    console.log('Parse error from localStorage');
    localStorage.removeItem('board:state');
}

export default localState;