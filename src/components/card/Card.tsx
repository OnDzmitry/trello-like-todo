import * as React from "react";
import { List } from "@material-ui/core";

export interface CardProps { className?: string}
export interface CardState { title : string }

export class Card extends React.Component<CardProps, CardState> {
    constructor(props: CardProps) {
        super(props);
        this.state = {title : "Text"};
    }
    render() {
        return (                
            <div className="c-card">
                <div className="c-card-text">
                    {this.state.title}
                </div>
            </div>
        );
    }
}