import * as React from "react";
import { List, Modal, TextField, Paper, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button } from "@material-ui/core";
import { closeCardPopup } from "../../store/actions/cardPopup";

export interface CardPopupProps {
    className?: string,
    opened: boolean,
    columnId: string,
    cardId?: string,
    closeCardPopup: Function,
    createCard: Function,
    createColumn: Function
}

export class CardPopup extends React.Component<CardPopupProps, {}> {
    constructor(props: CardPopupProps) {
      super(props);
      this.handleClose = this.handleClose.bind(this);
      this.addNewCard = this.addNewCard.bind(this);
      this.updateText = this.updateText.bind(this);
      this.updateTitle = this.updateTitle.bind(this);
    }

    cardTitle = '';
    cardText = '';

    addNewCard() {
      const card = {
        columnId: this.props.columnId,
        title: this.cardTitle,
        text: this.cardText
      };

      this.props.createCard(card);
      this.handleClose();
    }

    updateTitle(event) {
      this.cardTitle = event.target.value;
    }

    updateText(event) {
      this.cardText = event.target.value;
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
              id="title"
              label="Title"
              type="text"
              fullWidth
              onChange={this.updateTitle}
            />
            <TextField
              multiline={true}
              rowsMax={10}
              margin="dense"
              id="text"
              label="Text"
              type="text"
              fullWidth
              onChange={this.updateText}
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