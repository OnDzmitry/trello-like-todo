import * as React from "react";
import IconButton from "@material-ui/core/IconButton";
import { Logo } from '../logo/Logo';
import AddIcon from '@material-ui/icons/Add';
import { Tooltip, Button, AppBar, Toolbar, Typography } from "@material-ui/core";
import ColumnDialog from "../../containers/СolumnDialog";
import { openColumnDialog } from "../../store/actions/columnDialog";

export interface HeaderProps { 
    className : string,
    openColumnDialog: Function
}

export const Header = (props: HeaderProps) => {
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