import React from 'react';
import { Link,useNavigate } from 'react-router-dom';

function TodoForm(props) {
    console.log("TodoForm");
    console.log(props);

    const [newTodo, setnewTodo] = React.useState('');

    const handleChange = (e) => {
        const { value } = e.target;
        setnewTodo(value)
    };

    const navigate = useNavigate();
    const addTodo = () => {
        console.log(newTodo);
        if (newTodo === '') return;
        const todos = JSON.parse(localStorage.getItem('todos')) || [];
        todos.push(newTodo);
        localStorage.setItem('todos', JSON.stringify(todos));
        setnewTodo('');


        navigate("/");
    };

    return (
        <div>
            <Link to="/">Back</Link>
            <br />
            <input value={newTodo} onChange={handleChange} placeholder="Input here..." />
            <button onClick={addTodo}>ADD</button>
        </div>
    );

}

export default TodoForm;