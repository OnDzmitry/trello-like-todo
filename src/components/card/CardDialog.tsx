import * as React from "react";
import { List, Modal, TextField, Paper, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button } from "@material-ui/core";
import { closeCardDialog } from "../../store/actions/cardDialog";

export interface CardDialogProps {
    className?: string,
    opened: boolean,
    columnId: string,
    cardId?: string,
    closeCardDialog: Function,
    createCard: Function,
    createColumn: Function
}

export class CardDialog extends React.Component<CardDialogProps, {}> {
    constructor(props: CardDialogProps) {
      super(props);
    }

    cardTitle = '';
    cardText = '';

    addNewCard = () => {
      const { columnId } = this.props;
      const card = {
        title: this.cardTitle,
        text: this.cardText
      };

      this.props.createCard(columnId, card);
      this.handleClose();
    }

    updateTitle = (event) => {
      this.cardTitle = event.target.value;
    }

    updateText = (event) => {
      this.cardText = event.target.value;
    }

    handleClose = () => {
      this.props.closeCardDialog();
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
              Add
            </Button>
          </DialogActions>
        </Dialog>
        );
    }
}