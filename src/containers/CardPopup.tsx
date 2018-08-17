import { connect } from 'react-redux';
import { State } from '../store/reducers'
import { closeCardPopup, openCardPopup } from '../store/actions/cardPopup';
import { CardPopup } from '../components/card/CardPopup';
import { Dispatch } from 'redux';
import { App } from '../components/App';
import { addCardToColumn } from '../store/actions/card';

const mapStateToProps = (state: State) => {
    console.log(state.cardPopup);
    return state.cardPopup;
};

const mapDispatchToProps = {
    openCardPopup: openCardPopup,
    closeCardPopup: closeCardPopup,
    addCardToColumn: addCardToColumn
};

export default connect<any, any, any>(mapStateToProps, mapDispatchToProps)(CardPopup);