import { connect } from 'react-redux';
import { State } from '../store/reducers'
import { CardDialog } from '../components/card/CardDialog';
import { Dispatch } from 'redux';
import { App } from '../components/App';
import { createCard } from '../store/actions/cards';
import { createColumn } from '../store/actions/columns';
import { ColumnDialog } from '../components/column/columnDialog';
import { closeColumnDialog } from '../store/actions/columnDialog';

const mapStateToProps = (state: State) => {
    return state.columnDialog;
};

const mapDispatchToProps = {
    createColumn: createColumn,
    closeColumnDialog: closeColumnDialog
};

export default connect<any, any, any>(mapStateToProps, mapDispatchToProps)(ColumnDialog);