import { connect } from 'react-redux';
import { State } from '../store/reducers'
import { createColumn } from '../store/actions/columns';
import { removeColumn } from '../store/actions/columns';
import { Dispatch } from 'redux';
import { App } from '../components/App';
import { openCardDialog, closeCardDialog } from '../store/actions/cardDialog';
import { Column } from '../components/column/Column';
import * as ColumnModel from '../models/Column';
import { List } from 'immutable';

const mapStateToProps = (state: State, props) => {
    const column = state.columns.columns.find((column) => {
        return column.id === props.id;
    });

    let cards = List(state.cards.cards);

    const columnCards = cards.filter((card) => {
        return card.columnId === column.id;
    });

    return { ...column, cards: columnCards.toArray() };
};

const mapDispatchToProps = {
    openCardDialog: openCardDialog,
};

export default connect<any, any, any>(mapStateToProps, mapDispatchToProps)(Column);