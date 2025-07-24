import { FormControl, FormControlLabel, RadioGroup, Radio as MUIRadio, type RadioGroupProps } from '@mui/material'

type Option = { label: string; value: string }

interface Props extends Omit<RadioGroupProps, 'children'> {
  options: Option[]
  label?: string
}

const Radio = ({ options, label, ...rest }: Props) => {
  return (
    <FormControl>
      <RadioGroup {...rest}>
        {options.map(opt => (
          <FormControlLabel key={opt.value} value={opt.value} control={<MUIRadio />} label={opt.label} />
        ))}
      </RadioGroup>
    </FormControl>
  )
}

export default Radio
