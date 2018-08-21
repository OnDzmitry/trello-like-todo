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
            return <Column id={column.id}/>;
        });
    }
    render() {
        return (
            <div className={"c-board " + this.props.className}>
                <div className={"c-board-list"}>
                    {this.renderColumns()}
                </div>
            </div>
        );
    }
}