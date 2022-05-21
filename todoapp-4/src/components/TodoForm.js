import React from 'react';

function TodoForm(props) {
    console.log(props);

    const [newTodo, setnewTodo] = React.useState('');

    const handleChange = (e) => {
        const { value } = e.target;
        setnewTodo(value)
    };

    const addTodo = () => {
        console.log(newTodo);
        if (newTodo === '') return;
        props.add(newTodo);
        setnewTodo('');
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