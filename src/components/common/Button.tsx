import { Button as MUIButton, type ButtonProps } from '@mui/material'

const Button = (props: ButtonProps) => {
  return <MUIButton variant="contained" {...props} />
}

export default Button
