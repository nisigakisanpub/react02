import React from 'react';
import { useNavigate } from 'react-router-dom';

function TodoList(props) {
    console.log("TodoList");

    var todos = JSON.parse(localStorage.getItem('todos')) || [];
    console.log(todos);

    const [count, setCount] = React.useState([]);

    // const [todos, settodos] = React.useState(
    //     JSON.parse(localStorage.getItem('todos')) || []
    // );

    // React.useEffect(()=>{
    //     settodos(JSON.parse(localStorage.getItem('todos')) || [])
    // },[]);

    const deleteTodo = (i) => {
        console.log(i);
        let deletedTodoList = [...todos];
        deletedTodoList.splice(i, 1);

        /** useStateを使用する場合 */
        // settodos((todos)=>{
        //     let deletedTodoList = [...todos];
        //     deletedTodoList.splice(i, 1);
        //     localStorage.setItem('todos', JSON.stringify(deletedTodoList)); 
        // });

        /** useStateを使用しない場合 */
        localStorage.setItem('todos', JSON.stringify(deletedTodoList));
        setCount((num) => num + 1);
    }

    const navigate = useNavigate();
    function addTodo() {
        navigate("/todos/add");
    }

    return (
        <div>
            <button onClick={addTodo}>ADD</button>
            <h5>Todo List</h5>
            <ul>
                {
                    todos.map((todo, i) => {
                        return (
                            <li key={i}>
                                No.{i} {todo}
                                <button onClick={() => deleteTodo(i)}>DEL</button>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    );
}

export default TodoList;