import Select from '../common/Select/Select'
import { Box } from '@mui/material'

type Option = { label: string; value: string | number }

interface Props {
  value: string | number
  onChange: (value: string | number) => void
  options: Option[]
}

export default function SelectSeatClass({ value, onChange, options }: Props) {
  return (
    <Box display="flex" alignItems="center" gap={1}>
      <Select
        value={value}
        onChange={onChange}
        options={options}
        aria-label="Seat Class"
      />
    </Box>
  )
}
