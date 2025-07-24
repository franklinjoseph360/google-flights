import { Box, IconButton } from '@mui/material'
import SwapHorizIcon from '@mui/icons-material/SwapHoriz'
import { useState } from 'react'
import Autocomplete from '../common/Autocomplete/Autocomplete'

type Option = {
  label: string
  value: string
}

interface Props {
  from: Option | null
  to: Option | null
  onChange: (field: 'from' | 'to', value: Option | null) => void
  options: Option[]
}

export default function SelectAirportFields({ from, to, onChange, options }: Props) {
  const [_swapDirection, setSwapDirection] = useState(false)

  const handleSwap = () => {
    onChange('from', to)
    onChange('to', from)
    setSwapDirection((prev) => !prev)
  }

  return (
    <Box display="flex" alignItems="center" gap={1}>
      <Box flex={1}>
        <Autocomplete
          value={from}
          onChange={(_, val) => onChange('from', val)}
          options={options}
          placeholder="From"
        />
      </Box>

      <IconButton
        onClick={handleSwap}
        sx={{
          border: '1px solid #5f6368',
          borderRadius: '50%',
          backgroundColor: '#202124',
          color: '#9aa0a6',
          width: 40,
          height: 40,
          '&:hover': { backgroundColor: '#2a2a2d' },
        }}
      >
        <SwapHorizIcon />
      </IconButton>

      <Box flex={1}>
        <Autocomplete
          value={to}
          onChange={(_, val) => onChange('to', val)}
          options={options}
          placeholder="Where to?"
        />
      </Box>
    </Box>
  )
}
