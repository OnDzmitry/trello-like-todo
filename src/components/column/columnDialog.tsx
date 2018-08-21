import * as React from "react";
import { 
    List,
    TextField,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogContentText,
    DialogActions,
    Button 
} from "@material-ui/core";

export interface ColumnDialogProps {
    className?: string,
    opened: boolean,
    columnId: string,
    cardId?: string,
    closeColumnDialog: Function,
    createColumn: Function,
}

export interface ColumnDialogState {
    opened: boolean
}


export class ColumnDialog extends React.Component<ColumnDialogProps, ColumnDialogState> {
    constructor(props: ColumnDialogProps) {
      super(props);
    }

    columnTitle = '';

    addNewColumn = () => {
      const column = {
        title: this.columnTitle,
      };

      this.props.createColumn(column);
      this.handleClose();
    }

    updateTitle = (event) => {
      this.columnTitle = event.target.value;
    }

    handleClose = () => {
      this.props.closeColumnDialog();
    }

    render() {
        return (                
        <Dialog
          open={this.props.opened}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Add new column</DialogTitle>
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
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={this.addNewColumn} color="primary">
              Add new
            </Button>
          </DialogActions>
        </Dialog>
        );
    }
}