// Вебинар № 9
// https://youtu.be/5G-dG__cS0o?t=5065 - Переписывание коллекции заметок на Redux

// Вебинар № 10
// https://youtu.be/DPk3jLTrPV8?t=192  - Переписывание коллекции заметок на Redux Toolkit
// https://youtu.be/DPk3jLTrPV8?t=165  - configureStore()
// https://youtu.be/DPk3jLTrPV8?t=880  - createAction()
// https://youtu.be/DPk3jLTrPV8?t=1356 - createReducer()
// https://youtu.be/DPk3jLTrPV8?t=2061 - Дофиксивание колекции заметок
// https://youtu.be/DPk3jLTrPV8?t=2305 - Важно!!!
// https://youtu.be/DPk3jLTrPV8?t=2775 - Redux-persist

import { Component } from 'react';
import TodoList from '../components/TodoList';
import TodoEditor from '../components/TodoEditor';
import TodoFilter from '../components/TodoFilter';
import Stats from '../components/Stats';
import Modal from '../components/Modal';
import IconButton from '../components/IconButton';
import { ReactComponent as AddIcon } from '../icons/add.svg';

const barStyles = {
  display: 'flex',
  alignItems: 'flex-end',
  marginBottom: 20,
};

class TodosPage extends Component {
  state = {
    showModal: false,
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({ showModal: !showModal }));
  };

  render() {
    const { showModal } = this.state;

    return (
      <>
        <div style={barStyles}>
          <TodoFilter />
          <Stats />
          <IconButton onClick={this.toggleModal} aria-label="Добавить todo">
            <AddIcon width="32" height="32" fill="#fff" />
          </IconButton>
        </div>

        <TodoList />

        {showModal && (
          <Modal onClose={this.toggleModal}>
            <TodoEditor onSave={this.toggleModal} />
          </Modal>
        )}
      </>
    );
  }
}

export default TodosPage;
