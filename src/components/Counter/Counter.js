// https://youtu.be/5G-dG__cS0o?t=1629 - переведение компонента счетчика на redux (вебинар № 9);
// https://youtu.be/5G-dG__cS0o?t=3030 - резюме № 1
// https://youtu.be/5G-dG__cS0o?t=3140 - как работать со сложным состоянием
// https://youtu.be/5G-dG__cS0o?t=3535 - резюме № 2
// https://youtu.be/5G-dG__cS0o?t=3705 - Redux DevTools
// https://youtu.be/5G-dG__cS0o?t=4147 - Композиция редюсеров
// https://youtu.be/5G-dG__cS0o?t=4660 - Рефакторинг кода

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
