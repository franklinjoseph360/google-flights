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

type Props = {
  startDate: Date | null
  endDate: Date | null
  onStartDateChange: (date: Date | null) => void
  onEndDateChange: (date: Date | null) => void
  placeholder?: string
}

export default function CustomDateRangePicker({
  startDate,
  endDate,
  onStartDateChange,
  onEndDateChange,
  placeholder
}: Props) {
  const [open, setOpen] = useState(false)
  const [range, setRange] = useState<DateRange>({
    startDate: startDate ?? undefined,
    endDate: endDate ?? undefined,
  })
  const anchorRef = useRef<HTMLDivElement | null>(null)

  const toggle = () => setOpen((prev) => !prev)

  const handleChange = (newRange: DateRange) => {
    setRange(newRange)
    if (newRange.startDate) onStartDateChange(newRange.startDate)
    if (newRange.endDate) onEndDateChange(newRange.endDate)
    if (newRange.startDate && newRange.endDate) setOpen(false)
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

  // Sync props to local state when props change
  useEffect(() => {
    setRange({
      startDate: startDate ?? undefined,
      endDate: endDate ?? undefined,
    })
  }, [startDate, endDate])

  return (
    <ClickAwayListener onClickAway={() => setOpen(false)}>
      <Box width="100%" ref={anchorRef}>
        <TextField
          onClick={toggle}
          value={formatDisplay()}
          placeholder={placeholder}
          fullWidth
          variant="outlined"
          InputProps={{
            readOnly: true,
            sx: {
              backgroundColor: '#2b2b2b',
              borderRadius: '6px',
              border: '1px solid transparent',
              padding: '8px 12px',
              input: { color: '#fff', padding: '4px 4px 4px 0' },
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
