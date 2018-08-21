import { connect } from 'react-redux';
import { State } from '../store/reducers'
import { Dispatch } from 'redux';
import { Header } from '../components/header/Header';
import { openColumnDialog } from '../store/actions/columnDialog';

const mapDispatchToProps = {
    openColumnDialog: openColumnDialog
};

export default connect<any, any, any>(null, mapDispatchToProps)(Header);