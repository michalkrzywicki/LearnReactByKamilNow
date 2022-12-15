export interface Todo {
    text: string;
    complete: boolean;
}

export type ToggleTodo = (selectedTodo: Todo) => void;
