import { Box } from '@mui/material'
import DatePicker from '../common/DatePicker/DatePicker'
import CustomDateRangePicker from '../common/CustomDateRangePicker/CustomDateRangePicker'

interface Props {
  tripType: 'oneway' | 'roundtrip' | 'multicity'
  departureDate: Date | null
  onDepartureChange: (date: Date | null) => void
}

export default function SelectFlightDates({
  tripType,
  departureDate,
  onDepartureChange,
}: Props) {
  return (
    <Box width="100%">
      {tripType === 'roundtrip' ? (
        <CustomDateRangePicker />
      ) : (
        <DatePicker value={departureDate} onChange={onDepartureChange} placeholder="Departure Date" />
      )}
    </Box>
  )
}
