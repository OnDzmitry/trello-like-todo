import * as React from "react";

export interface LogoProps { 
    classes : string
}

export class Logo extends React.Component<LogoProps> {
    render() {
        return (
            <a className = {"c-logo " + (this.props.classes)} href="#">
                <span className="c-logo_img"></span>
            </a>
        );
    }
}