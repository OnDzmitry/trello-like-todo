import * as React from "react";
import * as ReactDOM from "react-dom";
import store from "./store";
import { App } from "./components/App";
import { Provider, connect } from "react-redux";
import { State } from './store/reducers';

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById("root")
);