import * as React from "react";
import { TextField, Dialog, DialogTitle, DialogContent,DialogActions, Button, Typography} from "@material-ui/core";
import { State } from '../../store/reducers/cardDialog';
import { DispatchFromProps } from "../../containers/CardDialog";
import CardModel from "../../models/Card";
import styled from 'styled-components';
import cardColors from '../../models/CardColors';
import { CardColors } from './CardColors';
import { CardImageLoader } from './CardImageLoader';
import * as PromiseFileReader from 'promise-file-reader';

export interface CardDialogProps extends State {
    className?: string,
}

type Props = DispatchFromProps & CardDialogProps;

const CardDialogButton = styled.button`
    border-radius: 3px;
    border: none;
    padding: 0;
    cursor: pointer;
    &:hover {
        opacity: 1;
        background-color: #d9dbdd;
    }
    opacity: 0.4;
    display: none;
    position: absolute; 
    top: 0; 
    right: 0; 
    padding: 3px; 
    margin: 5px;
    font-size: 16px;
`;

const CardDialogContent = styled.div`
    display: flex;
    flex-direction: row;
`;


export function CardDialog (props: Props) {
    const { card, columnId } = props;

    let cardTitle = card ? card.title : '';
    let cardText = card ? card.text : '';
    let cardColor = card ? card.color : cardColors.white;
    let cardImage = card ? card.image : '';

    const addNewCard = () => {
        const card = {
            id: "",
            title: cardTitle,
            text: cardText,
            color: cardColor,
            image: cardImage,
        };

        props.createCard(columnId, card);
        handleClose();
    }

    const EditCard = () => {
        const editedCard: CardModel = {
            id: card.id,
            title: cardTitle,
            text: cardText,
            color: cardColor,
            image: cardImage,
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

    const removeCard = (event) => {
        props.removeCard(columnId, card);
        handleClose();
    }

    const handleClose = () => {
        props.closeCardDialog();
    }
    
    const setCardColor = (key) => {
        cardColor = key;
    }

    const setCardImage = async (file) => {
        cardImage = await PromiseFileReader.readAsDataURL(file.file);
        console.log(cardImage);
    }

    const deleteCardImage = () => {
        cardImage = '';
    }

    return (                
        <Dialog
            open={props.opened}
            fullWidth
            onClose={handleClose}
            aria-labelledby="form-dialog-title"
        >
            <DialogTitle id="form-dialog-title">{ card ? "Edit card" : "Add new card" }</DialogTitle>
            <DialogContent>
                <CardDialogContent>
                    <div>
                        <TextField
                            multiline={true}    
                            autoFocus
                            margin="dense"
                            rowsMax={10}
                            id="title"
                            label="Title"
                            type="text"
                            fullWidth
                            defaultValue={cardTitle}
                            onChange={updateTitle}
                        />
                        <CardImageLoader setImage={setCardImage} deleteImage={deleteCardImage} defaultImage={cardImage ? cardImage : ''}/>
                        <TextField
                            multiline={true}
                            rowsMax={10}
                            margin="dense"
                            id="text"
                            label="Description"
                            type="text"
                            fullWidth
                            defaultValue={cardText}
                            onChange={updateText}
                        />
                        <CardColors selectedColor={cardColor} setCardColor={setCardColor}></CardColors>
                    </div>
                    <div>
                        {card ? 
                            <Button color={"secondary"} onClick={removeCard}>
                                Remove card
                            </Button> : ''
                        }
                    </div>
                </CardDialogContent>
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