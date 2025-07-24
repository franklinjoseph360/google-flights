import { Button as MUIButton, type ButtonProps } from '@mui/material'

const Button = (props: ButtonProps) => {
  return <MUIButton variant="contained" disableElevation disableRipple {...props} />
}

export default Button
