import { connect } from 'react-redux';
import * as actions from '../../redux/counter/counter-actions';
import Controls from '../Controls';
import Value from '../Value';
import './Counter.scss';

const Counter = ({ value, step, handleIncrement, handleDecrement }) => {
  return (
    <div className="Counter">
      <Value value={value} />

      <Controls
        step={step}
        onIncrement={() => handleIncrement(step)}
        onDecrement={() => handleDecrement(step)}
      />
    </div>
  );
};

const mapStateToProps = ({ counter }) => ({
  value: counter.value,
  step: counter.step,
});

const mapDispatchtoProps = dispatch => ({
  handleIncrement: value => dispatch(actions.increment(value)),
  handleDecrement: value => dispatch(actions.decrement(value)),
});

export default connect(mapStateToProps, mapDispatchtoProps)(Counter);
