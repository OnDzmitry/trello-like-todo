import { connect } from 'react-redux';
import { State } from '../store/reducers'
import { addColumn } from '../store/actions/column';
import { removeColumn } from '../store/actions/column';
import { Board } from '../components/board/Board';
import { Dispatch } from 'redux';
import { App } from '../components/App';

const mapStateToProps = (state: State) => (
    state.columns
);

const mapDispatchToProps = (dispatch: Dispatch) => ({
    addColumn: addColumn
});

export default connect<any, any, any>(mapStateToProps, mapDispatchToProps)(Board);