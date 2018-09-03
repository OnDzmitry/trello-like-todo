import { connect } from 'react-redux';
import { State } from '../store/reducers'
import { openCardDialog, closeCardDialog, OpenCardDialogAction } from '../store/actions/cardDialog';
import { Column, ColumnProps } from '../components/column/Column';

export interface DispatchFromProps {
    openCardDialog: (columnId: string, cardId?: string) => OpenCardDialogAction
}

const mapDispatchToProps = {
    openCardDialog: openCardDialog,
};

export default connect<{}, DispatchFromProps, ColumnProps>(() => ({}), mapDispatchToProps)(Column);