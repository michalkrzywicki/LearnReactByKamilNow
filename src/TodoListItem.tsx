import React from "react";
import { Todo, ToggleTodo } from './types';
import { Button } from "./Button";

interface Props {
    todo: Todo;
    toggleTodo: ToggleTodo;
}

export const TodoListItem: React.FC<Props> = ({ todo, toggleTodo }) => {
  return(
    <li>
        <label style={{ textDecoration: todo.complete ? 'line-through' : undefined }}>
            <input
                type="checkbox"
                checked={todo.complete}
                onClick={() => {
                    toggleTodo(todo);
                }}
            />{' '}
            {todo.text}
            <Button name="Edytuj" buttonType='edit'/>
            <Button name="Usuń" buttonType='delete'/>
        </label>
    </li>
  );
};
