import { connect } from 'react-redux';
import { State } from '../store/reducers'
import { createColumn, reorderColumns, CreateColumnAction, ReorderColumnsAction, removeColumn } from '../store/actions/columns';
import { Board, BoardProps } from '../components/board/Board';
import { shiftCard, ShiftCardAction, DndData } from '../store/actions/cards';
import * as fromBoardReducer from '../store/reducers/board';
import Column from '../models/Column';
import { List } from 'immutable';
import { openColumnDialog, OpenColumnDialogAction } from '../store/actions/columnDialog';
import { ActionCreators as UndoActionCreators } from 'redux-undo';

const mapStateToProps = (state: State) => state.board.present;

export interface DispatchFromProps {
    createColumn: (column: Column) => CreateColumnAction,
    reorderColumns: (startIndex: number, endIndex: number) => ReorderColumnsAction,
    shiftCard: (cardId: string, source: DndData, destination: DndData) => ShiftCardAction,
    onUndo: () => any,
    onRedo: () => any,
}

const mapDispatchToProps = {
    createColumn: createColumn,
    reorderColumns: reorderColumns,
    shiftCard: shiftCard,
    onUndo: UndoActionCreators.undo,
    onRedo: UndoActionCreators.redo
};

export default connect<fromBoardReducer.State, DispatchFromProps, BoardProps>(mapStateToProps, mapDispatchToProps)(Board);