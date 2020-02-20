import GlobalState from '../state/globalState';
import { connect } from 'react-redux';
import WebHeader from '../components/Header';

const mapStateToProps = (state: GlobalState) => state;

export default connect(mapStateToProps)(WebHeader);
