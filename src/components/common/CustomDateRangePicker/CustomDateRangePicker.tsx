import { useState, useRef, useEffect } from 'react'
import {
  Box,
  TextField,
  InputAdornment,
  Popper,
  Paper,
  ClickAwayListener,
} from '@mui/material'
import EventIcon from '@mui/icons-material/Event'
import { DateRangePicker } from 'mui-daterange-picker'
import type { DateRange } from 'mui-daterange-picker'

export default function CustomDateRangePicker() {
  const [open, setOpen] = useState(false)
  const [range, setRange] = useState<DateRange>({})
  const anchorRef = useRef<HTMLDivElement | null>(null)

  const toggle = () => setOpen((prev) => !prev)

  const handleChange = (newRange: DateRange) => {
    setRange(newRange)
    if (newRange.startDate && newRange.endDate) {
      setOpen(false)
    }
  }

  const formatDisplay = () => {
    const opts: Intl.DateTimeFormatOptions = { month: '2-digit', day: '2-digit', year: 'numeric' }
    const s = range.startDate?.toLocaleDateString(undefined, opts)
    const e = range.endDate?.toLocaleDateString(undefined, opts)
    return s && e ? `${s} - ${e}` : ''
  }

  useEffect(() => {
    const escListener = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    document.addEventListener('keydown', escListener)
    return () => document.removeEventListener('keydown', escListener)
  }, [])

  return (
    <ClickAwayListener onClickAway={() => setOpen(false)}>
      <Box width="100%" ref={anchorRef}>
        <TextField
          onClick={toggle}
          value={formatDisplay()}
          placeholder="MM/DD/YYYY"
          fullWidth
          variant="outlined"
          InputProps={{
            readOnly: true,
            sx: {
              backgroundColor: '#202124',
              borderRadius: '8px',
              input: { color: '#fff', padding: 0 },
              '& .MuiOutlinedInput-notchedOutline': {
                border: 'none',
              },
            },
            endAdornment: (
              <InputAdornment position="end">
                <EventIcon sx={{ color: '#fff' }} />
              </InputAdornment>
            ),
          }}
        />

        <Popper
          open={open}
          anchorEl={anchorRef.current}
          placement="bottom-start"
          disablePortal
          style={{ zIndex: 1300 }}
        >
          <Paper elevation={3} sx={{ backgroundColor: '#202124', borderRadius: 2 }}>
            <DateRangePicker
              open
              toggle={() => setOpen(false)}
              initialDateRange={range}
              onChange={handleChange}
              minDate={new Date()}
              wrapperClassName="dark-datepicker"
            />
          </Paper>
        </Popper>
      </Box>
    </ClickAwayListener>
  )
}
