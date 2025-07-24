import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp'
import SwapHorizIcon from '@mui/icons-material/SwapHoriz'
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff'
import AltRouteIcon from '@mui/icons-material/AltRoute'
import {
  Box,
  Button,
  Popover,
  List,
  ListItemButton,
  ListItemText,
} from '@mui/material'
import { useState } from 'react'

type Option = { label: string; value: string | number }

interface Props {
  value: string | number
  onChange: (value: string | number) => void
  options: Option[]
}

export default function SelectTripType({ value, onChange, options }: Props) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)

  const handleOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const selectedLabel =
    options.find((opt) => opt.value === value)?.label ?? 'Select Trip Type'

  const open = Boolean(anchorEl)

  const getStartIcon = () => {
    if (value === 'oneway') return <FlightTakeoffIcon sx={{ color: '#fff' }} />
    if (value === 'multicity')
      return <AltRouteIcon sx={{ color: '#fff', strokeDasharray: '4' }} />
    return <SwapHorizIcon sx={{ color: '#fff' }} /> // default to roundtrip
  }

  return (
    <>
      <Box display="flex" alignItems="center" gap={0}>
        {getStartIcon()}
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
          endIcon={
            open ? (
              <ArrowDropUpIcon sx={{ color: '#fff' }} />
            ) : (
              <ArrowDropDownIcon sx={{ color: '#fff' }} />
            )
          }
        >
          {selectedLabel}
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
            minWidth: 180,
          },
        }}
      >
        <List dense>
          {options.map((opt) => (
            <ListItemButton
              key={opt.value}
              selected={opt.value === value}
              onClick={() => {
                onChange(opt.value)
                handleClose()
              }}
              sx={{
                color: '#fff',
                '&.Mui-selected': {
                  backgroundColor: '#3c3c3e',
                },
                '&:hover': {
                  backgroundColor: '#4a4a4d',
                },
              }}
            >
              <ListItemText primary={opt.label} />
            </ListItemButton>
          ))}
        </List>
      </Popover>
    </>
  )
}
