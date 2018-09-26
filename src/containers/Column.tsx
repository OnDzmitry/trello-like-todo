import { connect } from 'react-redux';
import CardModel from '../models/Card';
import { State } from '../store/reducers'
import { openCardDialog, closeCardDialog, OpenCardDialogAction } from '../store/actions/cardDialog';
import { Column, ColumnProps } from '../components/column/Column';
import { removeColumn, RemoveColumnAction } from '../store/actions/columns';

export interface DispatchFromProps {
    openCardDialog: (columnId: string, card?: CardModel) => OpenCardDialogAction
    removeColumn: (columnId: string) => RemoveColumnAction
}

const mapDispatchToProps = {
    openCardDialog: openCardDialog,
    removeColumn: removeColumn
};

export default connect<{}, DispatchFromProps, ColumnProps>(null, mapDispatchToProps)(Column);