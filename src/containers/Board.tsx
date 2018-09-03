import { connect } from 'react-redux';
import { State } from '../store/reducers'
import { createColumn, reorderColumns, CreateColumnAction, ReorderColumnsAction, removeColumn } from '../store/actions/columns';
import { Board, BoardProps } from '../components/board/Board';
import { shiftCard, ShiftCardAction, DndData } from '../store/actions/cards';
import * as fromBoardReducer from '../store/reducers/board';
import Column from '../models/Column';

const mapStateToProps = (state: State) => {
    let { columns } = state.board;
    const { cards } = state.board;
    
    columns = columns.map((column) => {
        if (column.id in cards) {
            column.cards = cards[column.id];
        }
        console.log(column);
        return column;
    }).toList();

    return {
        columns: columns
    }
};

export interface DispatchFromProps {
    createColumn: (column: Column) => CreateColumnAction,
    reorderColumns: (startIndex: number, endIndex: number) => ReorderColumnsAction,
    shiftCard: (cardId: string, source: DndData, destination: DndData) => ShiftCardAction,
}

const mapDispatchToProps = {
    createColumn: createColumn,
    reorderColumns: reorderColumns,
    shiftCard: shiftCard
};

export default connect<fromBoardReducer.State, DispatchFromProps, BoardProps>(mapStateToProps, mapDispatchToProps)(Board);