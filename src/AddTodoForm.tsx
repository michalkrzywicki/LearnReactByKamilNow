import React, { useState } from "react";
import { AddTodo } from "./types";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from "@mui/material";

interface Props {
    addTodo: AddTodo;
}
export const AddTodoForm: React.FC<Props> = ({ addTodo }) => {
  const [text, setText] = useState('');

  return(
    <Box
      component="form"
      sx={{
          '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          label="List Item"
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
        />
        <Button
          variant="outlined"
          size="medium"
          onClick={(e) => {
              e.preventDefault();
              addTodo(text);
              setText('');
          }}
        >
          Add Todo
        </Button>
      </div>
    </Box>
  );
};
