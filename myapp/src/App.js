import { List, ListItem, ListItemText, Divider } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import { useState } from 'react';

function App() {

  const [todos, settodos] = useState([
    { id: "1", text: "todo 1" },
    { id: "2", text: "todo 2" },
    { id: "3", text: "todo 3" }
  ]);

  const deleteTodo = (id) => {
    settodos((todos) => todos.filter((todo) => todo.id !== id));
  }

  return (
    <List>
      {
        todos.map(function (todo) {
          return (
            <>
              <ListItem key={todo.id}>
                <ListItemText>
                  {todo.text}
                </ListItemText>
                <IconButton variant="fab" aria-label="delete" onClick={() => deleteTodo(todo.id)} >
                  <DeleteIcon />
                </IconButton>
              </ListItem>
              <Divider />
            </>
          )
        })
      }
    </List>
  );
}

export default App;
