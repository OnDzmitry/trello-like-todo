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

export const ColumnDialog = (props: ColumnDialogProps) => {
    let columnTitle = '';

    const addNewColumn = () => {
      const column = {
        title: columnTitle,
      };

      props.createColumn(column);
      handleClose();
    }

    const updateTitle = (event) => {
      columnTitle = event.target.value;
    }

    const handleClose = () => {
      props.closeColumnDialog();
    }

    return (
        <Dialog
            open={props.opened}
            onClose={handleClose}
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
                    onChange={updateTitle}
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} color="primary">
                    Cancel
                </Button>
                <Button onClick={addNewColumn} color="primary">
                    Add new
                </Button>
          </DialogActions>
        </Dialog>
    );
}