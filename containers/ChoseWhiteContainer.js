import { connect } from 'react-redux';
import ChoseWhite from '../Components/ChoseWhite';

const mapStateToProps = (state) => {
  return {
    whiteWine: state.whiteWine
  };
};

export default connect(mapStateToProps)(ChoseWhite);
