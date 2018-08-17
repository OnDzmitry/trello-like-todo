import * as React from "react";
import ColumnModel from '../../models/Column'
import { Grid, Button } from "@material-ui/core";
import Column from '../../containers/Column';


export interface BoardProps { className? : string, columns? : ColumnModel[] }
export interface BoardState {}

export class Board extends React.Component<BoardProps, BoardState> {
    renderColumns() {
        const { columns } = this.props;

        return columns.map((column) => {
            return <Column id={column.id} title={column.title} cards={column.cards}/>;
        });
    }
    render() {
        return (                
            <div className={"c-board " + this.props.className}>
                <Grid 
                    style={{overflowX: "auto", margin: 0}}
                    spacing={32}
                    container
                    direction="row"
                    justify="flex-start"
                    alignItems="flex-start"
                >
                    {this.renderColumns()}
                </Grid>
            </div>
        );
    }
}