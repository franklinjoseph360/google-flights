import AirlineSeatReclineExtraIcon from '@mui/icons-material/AirlineSeatReclineExtra'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp'
import {
  Box,
  Button,
  Popover,
  List,
  ListItemButton,
  ListItemText,
} from '@mui/material'
import { useState } from 'react'
import type { SeatClass } from '@feature/FlightSearch/context/types'


type Props = {
  value: SeatClass
  onChange: (value: SeatClass) => void
  options: { label: string; value: SeatClass }[]
}


export default function SelectSeatClass({ value, onChange, options }: Props) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)

  const handleOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const selectedLabel =
    options.find((opt) => opt.value === value)?.label ?? 'Select Seat Class'

  const open = Boolean(anchorEl)

  return (
    <>
      <Box display="flex" alignItems="center" gap={0}>
        <AirlineSeatReclineExtraIcon sx={{ color: '#fff' }} />
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
