import { DatePicker as MUIDatePicker } from '@mui/x-date-pickers/DatePicker'
import type { TextFieldProps } from '@mui/material'

interface Props<TDate> {
  value: TDate | null
  onChange: (date: TDate | null) => void
  placeholder?: string
}

const DatePicker = <TDate,>({ value, onChange, placeholder }: Props<TDate>) => {
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
        } as Partial<TextFieldProps>,
      }}
    />
  )
}

export default DatePicker
