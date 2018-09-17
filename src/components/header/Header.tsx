import * as React from "react";
import { Logo } from '../logo/Logo';
import AddIcon from '@material-ui/icons/Add';
import RedoIcon from '@material-ui/icons/Redo';
import UndoIcon from '@material-ui/icons/Undo';
import { Button, AppBar, Toolbar, Typography } from "@material-ui/core";
import { DispatchFromProps } from '../../containers/Header';

export interface HeaderProps { 
    
}

export type Props = DispatchFromProps;

export function Header(props: Props) {
    const openColumnDialog = () => {
        props.openColumnDialog('');
    }
    const onUndo = () => {
        props.onUndo();
    }
    const onRedo = () => {
        props.onRedo();
    }
    const initKeyHandler = () => {
        document.onkeydown = (event: KeyboardEvent) => {
            if (event.ctrlKey && event.keyCode === 90) {
                onUndo();
            }
            if (event.ctrlKey && event.keyCode === 89) {
                onRedo();
            }
        }
    }

    initKeyHandler();

    return (      
        <AppBar position="fixed" className="c-header">
            <Toolbar>
                <Typography style={{flexGrow: 1}} variant="title" color="inherit">
                    Trello
                </Typography>
                <Button variant="fab" mini color="secondary" aria-label="Undo" onClick={onUndo}>
                    <UndoIcon/>
                </Button>
                <Button variant="fab" mini color="secondary" aria-label="Redo" onClick={onRedo}>
                    <RedoIcon/>
                </Button>
                <Button variant="fab" mini color="secondary" aria-label="Add" onClick={openColumnDialog}>
                    <AddIcon/>
                </Button>
            </Toolbar>
        </AppBar>
    );
}