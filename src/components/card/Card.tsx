import * as React from "react";
import { List, Button } from "@material-ui/core";
import CardModel from "../../models/Card";
import Subject from "@material-ui/icons/Subject";

export interface CardProps { className?: string, data: CardModel}

export class Card extends React.Component<CardProps, {}> {
    constructor(props: CardProps) {
        super(props);
    }
    render() {
        return (                
            <div className="c-card">
                <div className="c-card-text">
                    {this.props.data.text}
                </div>
                <Button size="small" style={{minWidth: "24px", padding: 2, margin: "0 0 5px 5px"}}  aria-label="Add">
                    <Subject/>
                </Button>
            </div>
        );
    }
}