import { Input as MUIInput, type InputBaseProps } from '@mui/material'

const Input = (props: InputBaseProps) => {
  return (
    <MUIInput
      fullWidth
      disableUnderline
      placeholder="Enter value"
      {...props}
    />
  )
}

export default Input
