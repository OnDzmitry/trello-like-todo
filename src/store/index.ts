import { createStore, Store } from 'redux';
import { State, reducer} from "./reducers";

const store: Store<State> = createStore(reducer);

store.subscribe(() => {
    localStorage.setItem('board:state', JSON.stringify(store.getState()));
});

export default store;