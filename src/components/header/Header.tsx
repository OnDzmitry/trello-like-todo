import * as React from "react";
import { Logo } from '../logo/Logo';
import AddIcon from '@material-ui/icons/Add';
import { Button, AppBar, Toolbar, Typography } from "@material-ui/core";

export interface HeaderProps { 
    className : string,
    openColumnDialog: Function
}

export function Header(props: HeaderProps) {
    const openColumnDialog = () => {
        props.openColumnDialog();
    }
    return (      
        <AppBar position="fixed" className="c-header">
            <Toolbar>
                <Typography style={{flexGrow: 1}} variant="title" color="inherit">
                    Trello
                </Typography>
                <Button variant="fab" mini color="secondary" aria-label="Add" onClick={openColumnDialog}>
                    <AddIcon/>
                </Button>
            </Toolbar>
        </AppBar>
    );
}