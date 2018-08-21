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

export class Header extends React.Component<HeaderProps, {}> {
    openColumnDialog = () => {
        this.props.openColumnDialog();
    }
    render() {
        return (      
            <AppBar position="fixed" className="c-header">
                <Toolbar>
                    <Typography style={{flexGrow: 1}} variant="title" color="inherit">
                        Trello
                    </Typography>
                    <Button variant="fab" mini color="secondary" aria-label="Add" onClick={this.openColumnDialog}>
                        <AddIcon/>
                    </Button>
                </Toolbar>
            </AppBar>
        );
    }
}