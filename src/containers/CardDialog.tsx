import { connect } from 'react-redux';
import { State } from '../store/reducers'
import { closeCardDialog, CloseCardDialogAction } from '../store/actions/cardDialog';
import { CardDialog } from '../components/card/CardDialog';
import { createCard, CreateCardAction } from '../store/actions/cards';
import * as fromCardDialogReducer from '../store/reducers/cardDialog';
import { UpdateCardAction, updateCard} from '../store/actions/cards';
import CardModel from '../models/Card';

const mapStateToProps = (state: State) => {
    return state.cardDialog;
};

export interface DispatchFromProps {
    updateCard: (columnId: string, card: CardModel) => UpdateCardAction
    closeCardDialog: () => CloseCardDialogAction,
    createCard: (columnId: string, card: CardModel) => CreateCardAction
}

const mapDispatchToProps = {
    updateCard: updateCard,
    closeCardDialog: closeCardDialog,
    createCard: createCard
};

export default connect<fromCardDialogReducer.State, DispatchFromProps>(mapStateToProps, mapDispatchToProps)(CardDialog);