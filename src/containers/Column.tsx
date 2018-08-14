import { connect } from 'react-redux';
import { State } from '../store/reducers'
import { addColumn } from '../store/actions/column';
import { removeColumn } from '../store/actions/column';
import { Board } from '../components/board/Board';

const mapStateToProps = (state: State) => ({
    columns: []
});

const mapDispatchToProps = {
    addColumn: addColumn
}

export default connect<any, any, any>(mapStateToProps, mapDispatchToProps)(Board);