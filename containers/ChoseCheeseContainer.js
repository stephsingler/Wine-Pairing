import { connect } from 'react-redux';
import ChoseCheese from '../Components/ChoseCheese';

const mapStateToProps = (state) => {
  return {
    cheeseList: state.cheeseList
  };
};

export default connect(mapStateToProps)(ChoseCheese);
