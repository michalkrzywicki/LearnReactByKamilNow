import React, {useState} from 'react';
import { TodoListItem } from "./TodoListItem";

import { Todo } from './types';

const initialTodos: Todo[] = [
  {
    text: 'Wynieść śmieci',
    complete: true
  },
  {
    text: 'Nauczyć się Reacta by Kamil',
    complete: false
  }
];

function App() {
  const [todos, setTodos] = useState(initialTodos);

  const toggleTodo = (selectedTodo: Todo) => {
    const newTodos = todos.map((todo) => {
      if (todo === selectedTodo) {
        return {
          ...todo,
          complete: !todo.complete,
        };
      }
      return todo;
    });
    setTodos(newTodos);
  }
  return(
      <ul>
          {todos.map((data) => <TodoListItem todo={data} toggleTodo={toggleTodo} />)}
      </ul>
  );
}

export default App;
