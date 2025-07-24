import GroupIcon from '@mui/icons-material/Group'
import { Box, Button, Popover, Typography } from '@mui/material'
import { useState } from 'react'

interface PassengerCounts {
  adults: number
  children: number
  infantsInSeat: number
  infantsOnLap: number
}

interface Props {
  value: PassengerCounts
  onChange: (value: PassengerCounts) => void
}

export default function SelectPassengerCount({ value, onChange }: Props) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)

  const handleOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const handleChange = (key: keyof PassengerCounts, delta: number) => {
    onChange({
      ...value,
      [key]: Math.max(0, value[key] + delta),
    })
  }

  const totalPassengers =
    value.adults + value.children + value.infantsInSeat + value.infantsOnLap

  const open = Boolean(anchorEl)

  const categories: {
    label: string
    key: keyof PassengerCounts
    sub?: string
  }[] = [
      { label: 'Adults', key: 'adults' },
      { label: 'Children', key: 'children', sub: 'Aged 2–11' },
      { label: 'Infants', key: 'infantsInSeat', sub: 'In seat' },
      { label: 'Infants', key: 'infantsOnLap', sub: 'On lap' },
    ]


  return (
    <>
      <Box display="flex" alignItems="center" gap={1}>
        <GroupIcon />
        <Button onClick={handleOpen} variant="contained">
          {totalPassengers} Passenger{totalPassengers !== 1 ? 's' : ''}
        </Button>
      </Box>

      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
      >
        <Box p={2} display="flex" flexDirection="column" gap={2} width={300}>
          {categories.map((cat) => (
            <Box key={cat.key} display="flex" justifyContent="space-between" alignItems="center">
              <Box>
                <Typography>{cat.label}</Typography>
                {cat.sub && <Typography fontSize={12} color="gray">{cat.sub}</Typography>}
              </Box>
              <Box display="flex" alignItems="center" gap={1}>
                <Button onClick={() => handleChange(cat.key, -1)} disabled={value[cat.key] === 0}>−</Button>
                <Typography>{value[cat.key]}</Typography>
                <Button onClick={() => handleChange(cat.key, 1)}>+</Button>
              </Box>
            </Box>
          ))}
          <Box display="flex" justifyContent="space-between">
            <Button onClick={handleClose} color="inherit">Cancel</Button>
            <Button onClick={handleClose}>Done</Button>
          </Box>
        </Box>
      </Popover>
    </>
  )
}
