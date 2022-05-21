import React from 'react';
import './App.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

function App() {
  console.log("App");

  const [count, setCount] = React.useState([]);

  const incrementCount = () => {
    setCount((num) => num + 1);
  }

  return (
    <div>
      <TodoForm incrementCount={incrementCount}></TodoForm>
      <TodoList></TodoList>
    </div>
  );
}

export default App;
