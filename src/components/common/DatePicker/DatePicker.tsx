import { DatePicker as MUIDatePicker } from '@mui/x-date-pickers/DatePicker'
import type { TextFieldProps } from '@mui/material'
import type { DateValidationError, PickerChangeHandlerContext } from '@mui/x-date-pickers/models'

interface Props {
  value: Date | null
  onChange: (date: Date | null, context?: PickerChangeHandlerContext<DateValidationError>) => void
  placeholder?: string
}

const DatePicker = ({ value, onChange, placeholder }: Props) => {
  return (
    <MUIDatePicker
      value={value}
      onChange={onChange}
      slotProps={{
        textField: {
          variant: 'standard',
          fullWidth: true,
          placeholder,
          InputProps: {
            disableUnderline: true,
          },
          sx: {
            backgroundColor: '#202124',
            borderRadius: '8px',
            input: { color: '#fff' },
            '& .MuiInputBase-root:before': {
              borderBottom: 'none',
            },
          },
        } as Partial<TextFieldProps>,
      }}
    />
  )
}

export default DatePicker
