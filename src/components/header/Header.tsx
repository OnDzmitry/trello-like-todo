import * as React from "react";
import IconButton from "@material-ui/core/IconButton";
import { Logo } from '../logo/Logo';
import AddBoxIcon from '@material-ui/icons/AddBox';
import { Tooltip, Button } from "@material-ui/core";

export interface HeaderProps { className : string }
export interface HeaderState {}

export class Header extends React.Component<HeaderProps, HeaderState> {
    test() {
        
    }
    render() {
        return (                
            <header className={"c-header " + this.props.className}>
            <Tooltip title="Add">
                <Button variant="fab" onClick={this.test}>
                    <AddBoxIcon></AddBoxIcon>
                </Button>
            </Tooltip>
            <Logo classes={""}>Test</Logo>
                {this.props.children}
            </header>
        );
    }
}