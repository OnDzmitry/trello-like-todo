import * as React from "react";

export interface ButtonProps { 
    classes : string,
    event: React.MouseEventHandler
}
export interface ButtonState {  }

export class Button extends React.Component<ButtonProps, ButtonState> {
    
    render() {
        return (
            <div 
                className = {"c-button " + this.props.classes} 
                onClick = {this.props.event}
            >
            </div>
        );
    }
}