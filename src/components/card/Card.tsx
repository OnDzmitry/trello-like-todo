import * as React from "react";
import { List } from "@material-ui/core";

export interface CardProps { className?: string, title: string, text : string}
export interface CardState {  }

export class Card extends React.Component<CardProps, CardState> {
    constructor(props: CardProps) {
        super(props);
        this.state = {title : "Text"};
    }
    render() {
        return (                
            <div className="c-card">
                <div className="c-card-title">
                    {this.props.title}
                </div>
                <div className="c-card-text">
                    {this.props.text}
                </div>
            </div>
        );
    }
}