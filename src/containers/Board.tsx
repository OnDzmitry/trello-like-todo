import { connect } from 'react-redux';
import { State } from '../store/reducers'
import { createColumn } from '../store/actions/columns';
import { removeColumn } from '../store/actions/columns';
import { Board } from '../components/board/Board';
import { Dispatch } from 'redux';
import { App } from '../components/App';

const mapStateToProps = (state: State) => (
    state.columns
);

const mapDispatchToProps = {
    createColumn: createColumn
};

export default connect<any, any, any>(mapStateToProps, mapDispatchToProps)(Board);