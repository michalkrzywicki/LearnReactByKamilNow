import React from "react";
import { Todo, ToggleTodo } from './types';
import { Button } from "./Button";
import Checkbox from '@mui/material/Checkbox';

interface Props {
    todo: Todo;
    toggleTodo: ToggleTodo;
}

export const TodoListItem: React.FC<Props> = ({ todo, toggleTodo }) => {
  return(
    <table>
      <tr>
        <td>
          <Checkbox
            checked={todo.complete}
            onClick={() => {
                toggleTodo(todo);
            }}
          />
        </td>
        <td>
          <label style={{ textDecoration: todo.complete ? 'line-through' : undefined }}>
            {todo.text}
          </label>
        </td>
        <td>
          <Button name="Edytuj" buttonType='edit'/>
        </td>
        <td>
          <Button name="Usuń" buttonType='delete'/>
        </td>
      </tr>
    </table>
  );
};
