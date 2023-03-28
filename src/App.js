import './App.css';
import Header from './Components/Header/header';
import Form from './Components/Form/form';
import { useState } from 'react';
import TodoList from './Components/TodoList/todoList';


function App() {

  const [input, setInput] = useState('');
  const [todos, setTodos] = useState([]);
  const [editTodo, setEditTodo] = useState(null);

  return (
    <div className="app-container">
      <div className='app-wrapper'>
        <div> <Header /> </div>

        <div> <Form
          input={input}
          setInput={setInput}
          todos={todos}
          setTodos={setTodos}
          editTodo={editTodo}
          setEditTodo={setEditTodo}
        /> </div>

        <TodoList
          todos={todos}
          setTodos={setTodos}
          setEditTodo={setEditTodo}
        />
        
      </div>
    </div>
  );
}

export default App;