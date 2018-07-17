import * as React from "react";

export interface ButtonProps { 
    classes : string,
    event: React.MouseEvent<HTMLElement>
}
export interface ButtonState { }

export class Button extends React.Component<ButtonProps, ButtonState> {
    click() {

    }

    render() {
        return <div className={"c-button " + this.props.classes}>
            </div>;
    }
}