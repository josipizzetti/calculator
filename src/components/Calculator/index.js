import { connect } from 'react-redux';
import { lastOperationResult } from '../../actions/operations';
import Calculator from './Calculator';

const mapStateToProps = ({ lastOperationResult: { result } }) => {
  return { operationsResult: result }
}
const mapDispatchToProps = (dispatch) => ({
  lastOperationResult: (result) =>
    dispatch(lastOperationResult(result)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Calculator);
