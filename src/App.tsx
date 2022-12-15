import React, {useState} from 'react';
import { Todo } from './types';
import { TodoList } from "./TodoList";

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
  return <TodoList todos={todos} toggleTodo={toggleTodo} />;
}

export default App;
