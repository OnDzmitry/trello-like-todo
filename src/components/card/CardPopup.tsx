import * as React from "react";
import { List, Modal, TextField, Paper, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button } from "@material-ui/core";
import { closeCardPopup } from "../../store/actions/cardPopup";

export interface CardPopupProps {
    className?: string,
    opened: boolean,
    columnId: string,
    cardId?: string,
    closeCardPopup: Function
}

export class CardPopup extends React.Component<CardPopupProps, {}> {
    constructor(props: CardPopupProps) {
        super(props);
        this.handleClose = this.handleClose.bind(this);
        this.addNewCard = this.addNewCard.bind(this);
    }
    addNewCard() {
        this.handleClose();
    }
    handleClose() {
        this.props.closeCardPopup();
    }
    render() {
        return (                
        <Dialog
          open={this.props.opened}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Add new card</DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Title"
              type="text"
              fullWidth
            />
            <TextField
              multiline={true}
              rowsMax={10}
              autoFocus
              margin="dense"
              id="name"
              label="Text"
              type="text"
              fullWidth
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={this.addNewCard} color="primary">
              Add new
            </Button>
          </DialogActions>
        </Dialog>
        );
    }
}