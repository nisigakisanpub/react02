import React from 'react';
import './App.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

function App() {

  const [todos, settodos] = React.useState([]);

  const addTodo = (newTodo) => {
    console.log(newTodo);
    settodos([...todos, newTodo]);
  };

  const deleteTodo = (i) => {
    console.log(i);
    const deletedTodoList = [...todos];
    deletedTodoList.splice(i, 1);
    settodos(deletedTodoList);
  }

  return (
    <div>
      <TodoForm add={addTodo}></TodoForm>
      <TodoList todos={todos} del={deleteTodo}></TodoList>
    </div>
  );
}

export default App;
