import { connect } from 'react-redux';
import { State } from '../store/reducers'
import { createColumn } from '../store/actions/columns';
import { removeColumn } from '../store/actions/columns';
import { Dispatch } from 'redux';
import { App } from '../components/App';
import { openCardDialog, closeCardDialog } from '../store/actions/cardDialog';
import { Column } from '../components/column/Column';
import * as ColumnModel from '../models/Column';
import { List } from 'immutable';
import Card from '../models/Card';

const mapStateToProps = (state: State) => {
    return {
        //columns: state.board.columns
    }
};

const mapDispatchToProps = {
    openCardDialog: openCardDialog,
};

export default connect<any, any, any>(null, mapDispatchToProps)(Column);