import React from 'react';

function TodoForm(props) {
    console.log("TodoForm");
    console.log(props);

    const [newTodo, setnewTodo] = React.useState('');

    const handleChange = (e) => {
        const { value } = e.target;
        setnewTodo(value)
    };

    const addTodo = () => {
        console.log(newTodo);
        if (newTodo === '') return;
        const todos = JSON.parse(localStorage.getItem('todos')) || [];
        todos.push(newTodo);
        localStorage.setItem('todos', JSON.stringify(todos));
        setnewTodo('');
        props.incrementCount();
    };

    return (
        <div>
            <h3>My Todo</h3>
            <input value={newTodo} onChange={handleChange} placeholder="Input here..." />
            <button onClick={addTodo}>ADD</button>
        </div>
    );

}

export default TodoForm;