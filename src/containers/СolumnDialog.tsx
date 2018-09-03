import { connect } from 'react-redux';
import { State } from '../store/reducers'
import { createColumn, CreateColumnAction } from '../store/actions/columns';
import { ColumnDialog } from '../components/column/ColumnDialog';
import { closeColumnDialog, CloseColumnDialogAction } from '../store/actions/columnDialog';
import * as ColumnDialogReducer from '../store/reducers/columnDialog';
import Column from '../models/Column';

const mapStateToProps = (state: State) => {
    return state.columnDialog;
};

export interface DispatchFromProps {
    createColumn: (column: Column) => CreateColumnAction,
    closeColumnDialog: () => CloseColumnDialogAction
}

const mapDispatchToProps = {
    createColumn: createColumn,
    closeColumnDialog: closeColumnDialog
};

export default connect<ColumnDialogReducer.State, DispatchFromProps, {}>(mapStateToProps, mapDispatchToProps)(ColumnDialog);