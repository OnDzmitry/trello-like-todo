import { connect } from 'react-redux';
import { State } from '../store/reducers'
import { createColumn, reorderColumns } from '../store/actions/columns';
import { removeColumn } from '../store/actions/columns';
import { Board } from '../components/board/Board';
import { Dispatch } from 'redux';
import { App } from '../components/App';
import { shiftCard } from '../store/actions/cards';

const mapStateToProps = (state: State) => state.board;

const mapDispatchToProps = {
    createColumn: createColumn,
    reorderColumns: reorderColumns,
    shiftCard: shiftCard
};

export default connect<any, any, any>(mapStateToProps, mapDispatchToProps)(Board);