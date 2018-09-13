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
import CardModel from "../../models/Card";

export interface CardDialogProps extends State {
    className?: string,
}

type Props = DispatchFromProps & CardDialogProps;

export function CardDialog (props: Props) {
    const { card, columnId } = props;

    let cardTitle = card ? card.title : '';
    let cardText = card ? card.text : '';

    const addNewCard = () => {
        const card = {
            id: "",
            title: cardTitle,
            text: cardText
        };

        props.createCard(columnId, card);
        handleClose();
    }

    const EditCard = () => {
        const editedCard: CardModel = {
            id: card.id,
            title: cardTitle,
            text: cardText,
        };

        props.updateCard(columnId, editedCard);
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
            <DialogTitle id="form-dialog-title">{ card ? "Edit card" : "Add new card" }</DialogTitle>
            <DialogContent>
                <TextField
                    autoFocus
                    margin="dense"
                    id="title"
                    label="Title"
                    type="text"
                    fullWidth
                    defaultValue={cardTitle}
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
                    defaultValue={cardText}
                    onChange={updateText}
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} color="primary">
                    Cancel
                </Button>
                <Button onClick={card ? EditCard : addNewCard} color="primary">
                    {card ? "Edit" : "Add"}
                </Button>
            </DialogActions>
        </Dialog>
    );
}