import * as React from "react";
import "../assets/main.scss";
import { Header } from './header/Header';
import Board from '../containers/Board';
import { Column } from './column/Column';
import { State } from '../store/reducers/column';
import { Paper, List, Grid } from "@material-ui/core";
import { connect } from "react-redux";
import CardPopup from "../containers/CardPopup";

export interface AppProps { columns?: any }
export interface AppState {  }

export class App extends React.Component<AppProps, AppState> {
    render() {
        return (
            <div>
                <CardPopup opened={false} columnId={""}></CardPopup>    
                <Header className={""}/>
                <Board/>
            </div>
        );
    }
}