import { connect } from 'react-redux';
import { State } from '../store/reducers'
import { createColumn } from '../store/actions/columns';
import { removeColumn } from '../store/actions/columns';
import { Dispatch } from 'redux';
import { App } from '../components/App';
import { openCardPopup, closeCardPopup } from '../store/actions/cardPopup';
import { Column } from '../components/column/Column';
import * as ColumnModel from '../models/Column';
import { List } from 'immutable';

const mapStateToProps = (state: State, props) => {
    const column = state.columns.columns.find((column) => {
        return column.id === props.id;
    });

    let cards = List(state.cards.cards);

    cards.filter((card) => {
        return card.columnId === column.id;
    });

    return { ...column, cards: cards.toArray() };
};

const mapDispatchToProps = {
    openCardPopup: openCardPopup,
};

export default connect<any, any, any>(mapStateToProps, mapDispatchToProps)(Column);