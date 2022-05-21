import React from 'react';

function TodoList(props) {
    console.log(props);

    const deleteTodo = (i) => {
        console.log(i);
        const del = props.del
        del(i);
    }

    return (
        <div>
            <h5>Todo List</h5>
            <ul>
                {
                    props.todos.map((todo, i) => {
                        return (
                            <li key={i}>
                                No.{i} {todo}
                                <button onClick={()=>deleteTodo(i)}>DEL</button>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    );
}

export default TodoList;