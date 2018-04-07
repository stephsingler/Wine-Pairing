import { connect } from 'react-redux';
import ChoseRed from '../Components/ChoseRed';

const mapStateToProps = (state) => {
  return {
    redWine: state.redWine
  };
};

export default connect(mapStateToProps)(ChoseRed);
