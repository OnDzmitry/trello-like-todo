import * as React from "react";

export interface HeaderProps { className : string }
export interface HeaderState {}

export class Header extends React.Component<HeaderProps, HeaderState> {
    render() {
        return ( 
            <header className={this.props.className}>
                {this.props.children}
            </header>
        );
    }
}