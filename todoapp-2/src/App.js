import React from 'react';
import './App.css';

function App() {

  const [todos, settodos] = React.useState([]);
  const [newTodo, setnewTodo] = React.useState('');

  const handleChange = (e) => {
    setnewTodo(e.target.value)
  };

  const addTodo = () => {
    if (newTodo === '') return;
    console.log(newTodo);
    settodos([...todos, newTodo]);
    setnewTodo('');
  };

  const deleteTodo = (i) => {
    console.log(i);
    const deletedTodoList = [...todos];
    deletedTodoList.splice(i, 1);
    settodos(deletedTodoList);
  }

  return (
    <div className="App">
      <div>
        <h3>My Todo</h3>
        <input value={newTodo} onChange={handleChange} placeholder="Input here..." />
        <button onClick={addTodo}>ADD</button>
        <h5>Todo List</h5>
        <ul>
          {
            todos.map((todo, i) => {
              return (
                <li key={i}>
                  No.{i}{` `}{todo}{` `}
                  <button onClick={() => deleteTodo(i)}>DEL</button>
                </li>
              )
            })
          }
        </ul>
      </div>
    </div>
  );
}

export default App;
