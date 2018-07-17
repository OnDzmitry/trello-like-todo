import * as React from "react";

export interface LogoProps { 
    classes : string
}

export class Logo extends React.Component<LogoProps> {
    render() {
        return (
            <div className = {"c-logo " + (this.props.classes)}>
                <img src={"logo"} className="c-logo_img" alt="logo"/>
            </div>
        );
    }
}