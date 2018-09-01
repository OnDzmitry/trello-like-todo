import * as React from "react";
import "../assets/main.scss";
import Board from '../containers/Board';
import { Column } from './column/Column'
import { Paper, List, Grid } from "@material-ui/core";
import { connect } from "react-redux";
import CardPopup from "../containers/CardDialog";
import Header from "../containers/Header";
import ColumnDialog from "../containers/СolumnDialog";

export interface AppProps { columns?: any }
export interface AppState {  }

export class App extends React.Component<AppProps, AppState> {
    render() {
        return (
            <div>
                <ColumnDialog opened={false}/>
                <CardPopup opened={false} columnId={""}></CardPopup>
                <Header className={""}/>
                <Board/>
            </div>
        );
    }
}