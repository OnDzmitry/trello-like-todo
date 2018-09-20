import { State, initialState } from './reducers';
import { List, Map } from "immutable";
import Column from "../models/Column";

let localState:State = initialState;

try {
    const parsedState = JSON.parse(localStorage.getItem('board:state'));
    
    if (parsedState) {
        localState = parsedState;
        let columns: List<Column> = List(localState.board.present.columns);
        
        columns = columns.map((column) => {
            column.cards = List(column.cards);

            return column;
        }).toList();

        localState.board.present.columns = columns;
    }
} catch(e) {
    console.log('Parse error from localStorage');
    localStorage.removeItem('board:state');
}

export default localState;