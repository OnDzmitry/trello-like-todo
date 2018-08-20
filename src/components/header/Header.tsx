import * as React from "react";
import IconButton from "@material-ui/core/IconButton";
import { Logo } from '../logo/Logo';
import AddIcon from '@material-ui/icons/Add';
import { Tooltip, Button, AppBar, Toolbar, Typography } from "@material-ui/core";

export interface HeaderProps { className : string }
export interface HeaderState {}

export class Header extends React.Component<HeaderProps, HeaderState> {
    test() {
        
    }
    render() {
        return (      
            <AppBar position="fixed" className="c-header">
                <Toolbar>
                    <Typography style={{flexGrow: 1}} variant="title" color="inherit">
                        News
                    </Typography>
                    <Button variant="fab" mini color="secondary" aria-label="Add">
                        <AddIcon/>
                    </Button>
                </Toolbar>
            </AppBar>
        );
    }
}