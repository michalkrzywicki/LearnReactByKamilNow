import React from 'react';
import { TodoListItem } from "./TodoListItem";

import { Todo } from './types';

const todos: Todo[] = [
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
  return(
      <ul>
          {todos.map((data) => <TodoListItem todo={data} />)}
      </ul>
  );
}

export default App;
