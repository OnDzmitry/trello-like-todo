import * as React from "react";
import { List, Button } from "@material-ui/core";
import { Card } from "../card/Card";

export interface ColumnProps { className?: string}
export interface ColumnState { title : string }

export class Column extends React.Component<ColumnProps, ColumnState> {
    constructor(props: ColumnProps) {
        super(props);
        this.state = {title : "New column"};
    }
    render() {
        return (                
            <div className="c-column">
                <div className="c-column-title">{this.state.title}</div>
                <List>
                    <Card></Card>
                </List>
                <Button variant="text" fullWidth={true} style={{textTransform: "none"}}>Add a card...</Button>
            </div>
        );
    }
}