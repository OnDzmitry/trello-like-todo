import * as React from "react";

export interface BoardProps { className : string }
export interface BoardState {}

export class Board extends React.Component<BoardProps, BoardState> {
    render() {
        return (                
            <div className={"c-board " + this.props.className}></div>
        );
    }
}