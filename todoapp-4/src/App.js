import React, { useEffect } from 'react';
import './App.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

function App() {

  const [todos, settodos] = React.useState([]);

  useEffect(() => {
    console.log('副作用関数が実行されました！')
    const todos = JSON.parse(localStorage.getItem('todos')) || [];
    settodos(todos);
  }, []);

  const addTodo = (newTodo) => {
    console.log(newTodo);
    const addTodoList = [...todos, newTodo];
    settodos(addTodoList);
    localStorage.setItem('todos', JSON.stringify(addTodoList));
  };

  const deleteTodo = (i) => {
    console.log(i);
    const deletedTodoList = [...todos];
    deletedTodoList.splice(i, 1);
    settodos(deletedTodoList);
    localStorage.setItem('todos', JSON.stringify(deletedTodoList));
  }

  return (
    <div>
      <TodoForm add={addTodo}></TodoForm>
      <TodoList todos={todos} del={deleteTodo}></TodoList>
    </div>
  );
}

export default App;
