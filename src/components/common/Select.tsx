import {
  FormControl,
  InputLabel,
  MenuItem,
  Select as MUISelect,
} from '@mui/material'
import type { SelectProps as MUISelectProps, SelectChangeEvent } from '@mui/material'


type Option<T extends string | number = string> = {
  label: string
  value: T
}

interface SelectProps<T extends string | number = string> extends Omit<MUISelectProps<T>, 'value' | 'onChange'> {
  label: string
  value: T
  onChange: (value: T) => void
  options: Option<T>[]
}

const Select = <T extends string | number = string>({
  label,
  value,
  onChange,
  options,
  ...rest
}: SelectProps<T>) => {
  const handleChange = (event: SelectChangeEvent<T>) => {
    onChange(event.target.value as T)
  }

  return (
    <FormControl fullWidth size="small">
      <InputLabel>{label}</InputLabel>
      <MUISelect value={value} onChange={handleChange} label={label} {...rest}>
        {options.map((opt) => (
          <MenuItem key={opt.value} value={opt.value}>
            {opt.label}
          </MenuItem>
        ))}
      </MUISelect>
    </FormControl>
  )
}

export default Select
