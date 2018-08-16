import * as React from "react";
import { List, Button } from "@material-ui/core";
import { Card } from "../card/Card";
import CardModel from "../../models/Card";

export interface ColumnProps { className?: string, id : number}
export interface ColumnState { title : string, cards?: CardModel[] }

export class Column extends React.Component<ColumnProps, ColumnState> {
    constructor(props: ColumnProps) {
        super(props);
        this.state = {title : "New column"};
    }
    render() {
        return (                
            <div className="c-column">
                <div className="c-column-title">{}</div>
                <List>
                    
                </List>
                <Button variant="text" fullWidth={true} style={{textTransform: "none"}}>Add a card...</Button>
            </div>
        );
    }
}