import { TextField, type TextFieldProps } from '@mui/material'

const Input = (props: TextFieldProps) => {
  return <TextField size="small" fullWidth {...props} />
}

export default Input;
