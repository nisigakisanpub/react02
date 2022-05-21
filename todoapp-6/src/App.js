import React from 'react';
import './App.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  console.log("App");

  // return (
  //   <div>
  //     <TodoForm incrementCount={incrementCount}></TodoForm>
  //     <TodoList></TodoList>
  //   </div>
  // );

  return(
  <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TodoList />} exact={true} />
        <Route path="/todos/add" element={<TodoForm />} />
      </Routes>
    </BrowserRouter>
  </>
  );
}

export default App;
