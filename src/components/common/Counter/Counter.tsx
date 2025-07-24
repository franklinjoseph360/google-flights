import { Box, IconButton, Typography } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import RemoveIcon from '@mui/icons-material/Remove'

interface CounterProps {
  label?: string
  value: number
  onChange: (val: number) => void
  min?: number
  max?: number
}

const Counter = ({ label, value, onChange, min = 0, max = 10 }: CounterProps) => {
  const increment = () => value < max && onChange(value + 1)
  const decrement = () => value > min && onChange(value - 1)

  return (
    <Box display="flex" justifyContent="space-between" alignItems="center" py={1}>
      {label && <Typography>{label}</Typography>}
      <Box display="flex" alignItems="center" gap={1}>
        <IconButton onClick={decrement}><RemoveIcon /></IconButton>
        <Typography>{value}</Typography>
        <IconButton onClick={increment}><AddIcon /></IconButton>
      </Box>
    </Box>
  )
}

export default Counter
