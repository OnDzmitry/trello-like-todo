import { createStore, Store } from 'redux';
import { State, reducer} from "./reducers";
import { composeWithDevTools } from 'redux-devtools-extension';
import localState from './localState';

const store: Store<State> = createStore(reducer, localState, composeWithDevTools());

store.subscribe(() => {
    const boardState = {
        board: {
            present: store.getState().board.present
        }
    };
    localStorage.setItem('board:state', JSON.stringify(boardState));
});

export default store;