import * as React from "react";
import { 
    TextField,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogContentText,
    DialogActions,
    Button 
} from "@material-ui/core";

import { List } from "immutable";
import { DispatchFromProps } from '../../containers/СolumnDialog';
import * as fromColumnDialogReducer from '../../store/reducers/columnDialog';

export interface ColumnDialogProps extends DispatchFromProps, fromColumnDialogReducer.State {
    className?: string,
}

export function ColumnDialog(props: ColumnDialogProps) {
    let columnTitle = '';

    const addNewColumn = () => {
      const column = {
        id: "",
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