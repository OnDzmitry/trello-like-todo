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
import { State } from '../../store/reducers/cardDialog';
import { DispatchFromProps } from "../../containers/CardDialog";

export interface CardDialogProps extends State {
    className?: string,
}

type Props = DispatchFromProps & CardDialogProps;

export function CardDialog (props: Props) {
    let cardTitle = '';
    let cardText = '';

    const addNewCard = () => {
        const { columnId } = props;
        const card = {
            id: "",
            title: cardTitle,
            text: cardText
        };

        props.createCard(columnId, card);
        handleClose();
    }

    const updateTitle = (event) => {
        cardTitle = event.target.value;
    }

    const updateText = (event) => {
        cardText = event.target.value;
    }

    const handleClose = () => {
        props.closeCardDialog();
    }
    
    return (                
        <Dialog
            open={props.opened}
            onClose={handleClose}
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
                    onChange={updateTitle}
                />
                <TextField
                    multiline={true}
                    rowsMax={10}
                    margin="dense"
                    id="text"
                    label="Text"
                    type="text"
                    fullWidth
                    onChange={updateText}
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} color="primary">
                    Cancel
                </Button>
                <Button onClick={addNewCard} color="primary">
                    Add
                </Button>
            </DialogActions>
        </Dialog>
    );
}