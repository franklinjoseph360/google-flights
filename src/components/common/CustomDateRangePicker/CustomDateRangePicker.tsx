import { useState } from 'react'
import { Box, InputAdornment, TextField } from '@mui/material'
import EventIcon from '@mui/icons-material/Event';
import { DateRangePicker } from 'mui-daterange-picker'
import type { DateRange } from 'mui-daterange-picker'

export default function CustomDateRangePicker() {
  const [open, setOpen] = useState(false)
  const [range, setRange] = useState<DateRange>({})

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

  return (
    <Box width="100%">
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

      <DateRangePicker
        open={open}
        toggle={toggle}
        initialDateRange={range}
        onChange={handleChange}
        minDate={new Date()}
        wrapperClassName="dark-datepicker"
      />
    </Box>
  )
}
