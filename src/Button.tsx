import React from "react";
import ButtonMui from '@mui/material/Button';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import DeleteIcon from '@mui/icons-material/Delete';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';

interface Props {
  name: string;
  buttonType: string;
}

export const Button: React.FC<Props> = ({ name, buttonType }) => {
  return(
    <Stack direction="row" divider={<Divider orientation="vertical" flexItem />} spacing={2}>
      <ButtonMui variant="outlined" size="small" startIcon={buttonType === 'edit' ? <ModeEditIcon /> : <DeleteIcon />}>
        {name}
      </ButtonMui>
    </Stack>
  );
};
