import injectSheet from 'react-jss';
import WebHeader from '../containers/Header';

const classes = {
  header: {
    'text-align': 'right',
    'margin-bottom': '-23px',
  },
};

export default injectSheet(classes)(WebHeader);
