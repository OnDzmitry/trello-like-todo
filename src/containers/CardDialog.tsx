import { connect } from 'react-redux';
import { State } from '../store/reducers'
import { closeCardDialog, CloseCardDialogAction } from '../store/actions/cardDialog';
import { CardDialog } from '../components/card/CardDialog/CardDialog';
import { createCard, CreateCardAction, removeCard } from '../store/actions/cards';
import * as fromCardDialogReducer from '../store/reducers/cardDialog';
import { UpdateCardAction, updateCard, RemoveCardAction} from '../store/actions/cards';
import CardModel from '../models/Card';

const mapStateToProps = (state: State) => {
    return state.cardDialog;
};

export interface DispatchFromProps {
    removeCard: (columnId: string, card: CardModel) => RemoveCardAction,
    updateCard: (columnId: string, card: CardModel) => UpdateCardAction
    closeCardDialog: () => CloseCardDialogAction,
    createCard: (columnId: string, card: CardModel) => CreateCardAction
}

const mapDispatchToProps = {
    removeCard: removeCard,
    updateCard: updateCard,
    closeCardDialog: closeCardDialog,
    createCard: createCard
};

export default connect<fromCardDialogReducer.State, DispatchFromProps>(mapStateToProps, mapDispatchToProps)(CardDialog);