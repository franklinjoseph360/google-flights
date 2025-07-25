import { Box } from '@mui/material'
import DatePicker from '@common/DatePicker/DatePicker'
import CustomDateRangePicker from '@common/CustomDateRangePicker/CustomDateRangePicker'

type Props = {
  tripType: string
  departureDate: Date | null
  returnDate?: Date | null
  onDepartureChange: (date: Date | null) => void
  onReturnChange: (date: Date | null) => void
}

const SelectFlightDates = ({
  tripType,
  departureDate,
  returnDate,
  onDepartureChange,
  onReturnChange,
}: Props) => {
  return (
    <Box width="100%">
      {tripType === 'roundtrip' ? (
        <CustomDateRangePicker
          startDate={departureDate}
          endDate={returnDate || null}
          onStartDateChange={onDepartureChange}
          onEndDateChange={onReturnChange}
          placeholder="Departure-Return"
        />
      ) : (
        <DatePicker
          value={departureDate}
          onChange={onDepartureChange}
          placeholder="Departure"
        />
      )}
    </Box>
  )
}

export default SelectFlightDates
