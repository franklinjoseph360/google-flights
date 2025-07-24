import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp'
import GroupIcon from '@mui/icons-material/Group'
import { Box, Button, Popover, Typography, IconButton } from '@mui/material'
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
      <Box display="flex" alignItems="center" gap={0}>
        <GroupIcon sx={{ color: '#fff' }} />
        <Button
          onClick={handleOpen}
          variant="contained"
          disableElevation
          sx={{
            backgroundColor: '#202124',
            borderRadius: '16px',
            paddingLeft: '10px',
            color: '#fff',
            textTransform: 'none',
            '&:hover': { backgroundColor: '#202124' },
            '&:focus': { outline: 'none' },
          }}
          endIcon={open ? <ArrowDropUpIcon sx={{ color: '#fff' }} /> : <ArrowDropDownIcon sx={{ color: '#fff' }} />}
        >
          {totalPassengers} Passenger{totalPassengers !== 1 ? 's' : ''}
        </Button>
      </Box>

      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
        PaperProps={{
          sx: {
            backgroundColor: '#2c2c2e',
            color: '#fff',
            borderRadius: '8px',
          },
        }}
      >
        <Box p={2} display="flex" flexDirection="column" gap={2} width={300}>
          {categories.map((cat) => (
            <Box key={cat.key} display="flex" justifyContent="space-between" alignItems="center">
              <Box>
                <Typography>{cat.label}</Typography>
                {cat.sub && (
                  <Typography fontSize={12} color="#b0b0b0">
                    {cat.sub}
                  </Typography>
                )}
              </Box>
              <Box display="flex" alignItems="center" gap={1}>
                <IconButton
                  size="small"
                  onClick={() => handleChange(cat.key, -1)}
                  disabled={value[cat.key] === 0}
                  sx={{
                    backgroundColor: '#3c3c3e',
                    color: '#fff',
                    '&:hover': { backgroundColor: '#4a4a4d' },
                    borderRadius: 1,
                    width: 32,
                    height: 32,
                  }}
                >
                  −
                </IconButton>
                <Typography>{value[cat.key]}</Typography>
                <IconButton
                  size="small"
                  onClick={() => handleChange(cat.key, 1)}
                  sx={{
                    backgroundColor: '#3c3c3e',
                    color: '#fff',
                    '&:hover': { backgroundColor: '#4a4a4d' },
                    borderRadius: 1,
                    width: 32,
                    height: 32,
                  }}
                >
                  +
                </IconButton>
              </Box>
            </Box>
          ))}
          <Box display="flex" justifyContent="space-between" mt={1}>
            <Button onClick={handleClose} sx={{ color: '#8ab4f8' }}>
              Cancel
            </Button>
            <Button onClick={handleClose} sx={{ color: '#8ab4f8' }}>
              Done
            </Button>
          </Box>
        </Box>
      </Popover>
    </>
  )
}
