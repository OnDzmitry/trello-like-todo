import * as React from "react";
import "../assets/main.scss";

import { Header } from './header/Header';
import { Board } from './board/Board';
import { Column } from './column/Column';
import { Paper, List, Grid } from "@material-ui/core";

export interface AppProps { }
export interface AppState { }

export class App extends React.Component<AppProps, AppState> {
    render() {
        return (
            <div>    
                <Header className={""}/>
                <div className="c-board">
                    <Grid  style={{overflowX: "auto", margin: 0}}
                        spacing={32}
                        container
                        direction="row"
                        justify="flex-start"
                        alignItems="flex-start"
                    >
                        <Column className={""}></Column>
                        <Column className={""}></Column>
                        <Column className={""}></Column>
                    </Grid>
                </div>
            </div>
        );
    }
}