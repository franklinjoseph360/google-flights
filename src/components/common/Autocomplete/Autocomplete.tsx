import {
  Autocomplete as MUIAutocomplete,
  type AutocompleteProps,
  TextField,
} from '@mui/material'

type Option = {
  label: string
  value: string
}

interface Props<T extends Option>
  extends Omit<AutocompleteProps<T, false, false, false>, 'renderInput'> {
  placeholder?: string
}

const Autocomplete = <T extends Option>({
  placeholder,
  ...rest
}: Props<T>) => {
  return (
    <MUIAutocomplete
      disablePortal
      autoHighlight
      fullWidth
      popupIcon={null}
      getOptionLabel={(option) => option.label}
      renderOption={(props, option) => (
        <li {...props} style={{ fontSize: '14px' }}>
          {option.label}
        </li>
      )}
      renderInput={(params) => (
        <TextField
          {...params}
          variant="standard"
          placeholder={placeholder}
          InputProps={{
            ...params.InputProps,
            disableUnderline: true,
          }}
        />
      )}
      {...rest}
    />
  )
}

export default Autocomplete
