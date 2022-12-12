import React from "react";
import { Todo } from './types';

interface Props {
    todo: Todo;
}

export const TodoListItem: React.FC<Props> = ({ todo }) => {
  return(
    <li>
        <label style={{ textDecoration: todo.complete ? 'line-through' : undefined }}>
            <input type="checkbox" checked={todo.complete} /> {todo.text}
        </label>
    </li>
  );
};
