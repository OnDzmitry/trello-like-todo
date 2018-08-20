import { connect } from 'react-redux';
import { State } from '../store/reducers'
import { closeCardPopup, openCardPopup } from '../store/actions/cardPopup';
import { CardPopup } from '../components/card/CardPopup';
import { Dispatch } from 'redux';
import { App } from '../components/App';
import { createCard } from '../store/actions/cards';
import { createColumn } from '../store/actions/columns';

const mapStateToProps = (state: State) => {
    return state.cardPopup;
};

const mapDispatchToProps = {
    closeCardPopup: closeCardPopup,
    createCard: createCard,
    createColumn: createColumn
};

export default connect<any, any, any>(mapStateToProps, mapDispatchToProps)(CardPopup);