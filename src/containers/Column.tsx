import { connect } from 'react-redux';
import { State } from '../store/reducers'
import { addColumn } from '../store/actions/column';
import { removeColumn } from '../store/actions/column';
import { Dispatch } from 'redux';
import { App } from '../components/App';
import { openCardPopup, closeCardPopup } from '../store/actions/cardPopup';
import { Column } from '../components/column/Column';

const mapStateToProps = (state: State) => (
    state.columns
);

const mapDispatchToProps = {
    openCardPopup: openCardPopup,
    closeCardPopup: closeCardPopup
};

export default connect<any, any, any>(mapStateToProps, mapDispatchToProps)(Column);