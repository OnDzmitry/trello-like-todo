import { connect } from 'react-redux';
import { State } from '../store/reducers'
import { closeCardDialog, CloseCardDialogAction } from '../store/actions/cardDialog';
import { CardDialog } from '../components/card/CardDialog';
import { createCard, CreateCardAction } from '../store/actions/cards';
import * as fromCardDialogReducer from '../store/reducers/cardDialog';
import Card from '../models/Card';

const mapStateToProps = (state: State) => {
    return state.cardDialog;
};

export interface DispatchFromProps {
    closeCardDialog: () => CloseCardDialogAction,
    createCard: (columnId: string, card: Card) => CreateCardAction
}

const mapDispatchToProps = {
    closeCardDialog: closeCardDialog,
    createCard: createCard
};

export default connect<fromCardDialogReducer.State, DispatchFromProps>(mapStateToProps, mapDispatchToProps)(CardDialog);