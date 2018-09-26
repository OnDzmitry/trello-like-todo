import { connect } from 'react-redux';
import CardModel from '../models/Card';
import { State } from '../store/reducers';
import { Card, CardProps } from '../components/card/Card';
import * as fromColumnContainer from './Column';
import { openCardDialog, OpenCardDialogAction } from '../store/actions/cardDialog';

export interface DispatchFromProps {
    openCardDialog: (columnId: string, card?: CardModel) => OpenCardDialogAction
}

const mapDispatchToProps = {
    openCardDialog: openCardDialog,
};

export default connect<{}, DispatchFromProps, CardProps>(null, mapDispatchToProps)(Card);