import SwapHorizIcon from '@mui/icons-material/SwapHoriz'
import { Box } from '@mui/material'
import Select from '../common/Select/Select'

type Option = { label: string; value: string | number }

interface Props {
  value: string | number
  onChange: (value: string | number) => void
  options: Option[]
}

export default function SelectTripType({ value, onChange, options }: Props) {
  return (
    <Box display="flex" alignItems="center" gap={1}>
      <SwapHorizIcon />
      <Select
        value={value}
        onChange={onChange}
        options={options}
        aria-label="Trip Type"
      />
    </Box>
  )
}
