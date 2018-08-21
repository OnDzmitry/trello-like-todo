import { connect } from 'react-redux';
import { State } from '../store/reducers'
import { closeCardDialog, openCardDialog } from '../store/actions/cardDialog';
import { CardDialog } from '../components/card/CardDialog';
import { Dispatch } from 'redux';
import { App } from '../components/App';
import { createCard } from '../store/actions/cards';
import { createColumn } from '../store/actions/columns';

const mapStateToProps = (state: State) => {
    return state.cardDialog;
};

const mapDispatchToProps = {
    closeCardDialog: closeCardDialog,
    createCard: createCard
};

export default connect<any, any, any>(mapStateToProps, mapDispatchToProps)(CardDialog);