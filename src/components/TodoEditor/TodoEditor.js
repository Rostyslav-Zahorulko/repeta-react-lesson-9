import { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../redux/todos/todos-actions';
import './TodoEditor.scss';

class TodoEditor extends Component {
  state = {
    message: '',
  };

  handleChange = event => {
    this.setState({ message: event.currentTarget.value });
  };

  handleSubmit = event => {
    const { message } = this.state;
    const { onAddTodo } = this.props;

    event.preventDefault();

    // if (message !== '') {
    onAddTodo(message);

    this.setState({ message: '' });
    // }
  };

  render() {
    const { message } = this.state;

    return (
      <form className="TodoEditor" onSubmit={this.handleSubmit}>
        <textarea
          className="TodoEditor__textarea"
          value={message}
          onChange={this.handleChange}
        ></textarea>
        <button type="submit" className="TodoEditor__button">
          Добавить
        </button>
      </form>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  onAddTodo: text => dispatch(actions.addTodo(text)),
});

export default connect(null, mapDispatchToProps)(TodoEditor);
