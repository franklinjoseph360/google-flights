import {
  MenuItem,
  Select as MUISelect,
  type SelectChangeEvent,
  type SelectProps,
} from '@mui/material'
import type { ReactNode } from 'react'

type Option<T extends string | number = string> = {
  label: ReactNode
  value: T
}

interface Props<T extends string | number = string>
  extends Omit<SelectProps<T>, 'value' | 'onChange'> {
  value: T
  onChange: (value: T) => void
  options: Option<T>[]
  placeholder?: string
}

const Select = <T extends string | number = string>({
  value,
  onChange,
  options,
  placeholder,
  ...rest
}: Props<T>) => {
  const handleChange = (event: SelectChangeEvent<T>, _child: ReactNode) => {
    onChange(event.target.value as T)
  }

  return (
    <MUISelect
      value={value}
      onChange={handleChange}
      variant="standard"
      displayEmpty
      disableUnderline
      renderValue={(selected) => {
        if (selected === '') {
          return <span style={{ color: '#9aa0a6' }}>{placeholder}</span>
        }

        const selectedOption = options.find((opt) => opt.value === selected)
        return selectedOption ? selectedOption.label : selected
      }}
      sx={{
        backgroundColor: '#202124',
        borderRadius: '10px',
        px: 2,
        py: 1.5,
        color: 'white',
        '&.Mui-focused': {
          outline: 'none',
          boxShadow: 'none',
          backgroundColor: '#202124',
        },
        '&:focus': {
          outline: 'none',
          boxShadow: 'none',
          backgroundColor: '#202124',
        },
      }}
      {...rest}
    >
      {placeholder && (
        <MenuItem disabled value="">
          {placeholder}
        </MenuItem>
      )}
      {options.map((opt) => (
        <MenuItem key={opt.value} value={opt.value}>
          {opt.label}
        </MenuItem>
      ))}
    </MUISelect>
  )
}

export default Select
