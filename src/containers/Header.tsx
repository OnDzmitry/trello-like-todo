import { connect } from 'react-redux';
import { State } from '../store/reducers'
import { Dispatch } from 'redux';
import { Header, HeaderProps } from '../components/header/Header';
import { openColumnDialog, OpenColumnDialogAction } from '../store/actions/columnDialog';
import { ActionCreators as UndoActionCreators } from 'redux-undo';

export interface DispatchFromProps {
    openColumnDialog: (columnId: string, ColumnId?: string) => OpenColumnDialogAction,
    onUndo: () => any,
    onRedo: () => any
}

const mapDispatchToProps = {
    openColumnDialog: openColumnDialog,
    onUndo: UndoActionCreators.undo,
    onRedo: UndoActionCreators.redo
};

export default connect<null, DispatchFromProps, HeaderProps>(null, mapDispatchToProps)(Header);