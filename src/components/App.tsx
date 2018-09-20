import * as React from "react";
import Board from '../containers/Board';
import Header from "../containers/Header";
import ColumnDialog from "../containers/СolumnDialog";
import CardDialog from "../containers/CardDialog";

export interface AppProps { columns?: any }
export interface AppState {  }

document.body.style.margin = "0";

export class App extends React.Component<AppProps, AppState> {
    render() {
        return (
            <div>
                <ColumnDialog/>
                <CardDialog/>
                <Header/>
                <Board/>
            </div>
        );
    }
}