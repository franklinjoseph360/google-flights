import { Box, Stack, useMediaQuery, useTheme } from '@mui/material'
import { useFlightSearchState, useFlightSearchDispatch } from '../context/context'
import SelectTripType from '../../../components/SelectTripType/SelectTripType'
import SelectPassengerCount from '../../../components/SelectPassengerCount/SelectPassengerCount'
import SelectSeatClass from '../../../components/SelectSeatClass/SelectSeatClass'
import SelectAirportFields from '../../../components/SelectAirportFields/SelectAirportFields'
import SelectFlightDates from '../../../components/SelectFlightDates/SelectFlightDates'
import SearchButton from '../../../components/SearchButton/SearchButton'
import type { TripType, SeatClass, AirportOption } from '../context/types'

const FlightSearchForm = () => {
  const state = useFlightSearchState()
  const dispatch = useFlightSearchDispatch()
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))

  const {
    tripType,
    passengerCount,
    seatClass,
    from,
    to,
    departureDate,
    returnDate,
  } = state

  return (
    <Box sx={{ p: 2, borderRadius: 2, maxWidth: '100%', backgroundColor: '#202124', border: '1px solid transparent' }}>
      <Stack spacing={2}>
        <Stack direction={isMobile ? 'column' : 'row'} spacing={2}>
          <SelectTripType
            value={tripType}
            onChange={(value: TripType) =>
              dispatch({ type: 'SET_TRIP_TYPE', payload: value })
            }
            options={[
              { label: 'One Way', value: 'oneway' },
              { label: 'Round Trip', value: 'roundtrip' },
              { label: 'Multi City', value: 'multicity' },
            ]}
          />
          <SelectPassengerCount
            value={passengerCount}
            onChange={(value) => dispatch({ type: 'SET_PASSENGER_COUNT', payload: value })}
          />
          <SelectSeatClass
            value={seatClass}
            onChange={(value: SeatClass) =>
              dispatch({ type: 'SET_SEAT_CLASS', payload: value })
            }
            options={[
              { label: 'Economy', value: 'Economy' },
              { label: 'Premium Economy', value: 'Premium Economy' },
              { label: 'Business', value: 'Business' },
              { label: 'First', value: 'First' },
            ]}
          />
        </Stack>
        <Stack direction={isMobile ? 'column' : 'row'} spacing={2}>
          <Box flex={isMobile ? 1 : 7}>
            <SelectAirportFields
              from={from}
              to={to}
              onChange={(field: 'from' | 'to', value: AirportOption) =>
                dispatch({ type: 'SET_AIRPORT_FIELD', payload: { field, value } })
              }
              options={[]} // Provide actual options here
            />
          </Box>
          <Box flex={isMobile ? 1 : 3}>
            <SelectFlightDates
              tripType={tripType}
              departureDate={departureDate}
              returnDate={returnDate}
              onDepartureChange={(date: Date | null) =>
                dispatch({ type: 'SET_DEPARTURE_DATE', payload: date })
              }
              onReturnChange={(date: Date | null) =>
                dispatch({ type: 'SET_RETURN_DATE', payload: date })
              }
            />
          </Box>
        </Stack>


        <Box display="flex" justifyContent="center">
          <SearchButton
            label="Explore"
            onClick={() =>
              console.log('Search initiated with:', {
                tripType,
                from,
                to,
                departureDate,
                returnDate,
                passengerCount,
                seatClass,
              })
            }
          />
        </Box>
      </Stack>
    </Box>
  )
}

export default FlightSearchForm
