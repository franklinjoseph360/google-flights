import { Box, debounce, Stack, useMediaQuery, useTheme } from '@mui/material'
import { useFlightSearchState, useFlightSearchDispatch } from '../context/flightSearch.context'
import { useAirportSearchContext } from '../context/airportSearch.context'
import SelectTripType from '../../../components/SelectTripType/SelectTripType'
import SelectPassengerCount from '../../../components/SelectPassengerCount/SelectPassengerCount'
import SelectSeatClass from '../../../components/SelectSeatClass/SelectSeatClass'
import SelectAirportFields from '../../../components/SelectAirportFields/SelectAirportFields'
import SelectFlightDates from '../../../components/SelectFlightDates/SelectFlightDates'
import SearchButton from '../../../components/SearchButton/SearchButton'
import { useFlightSearchResults } from '../context/flightSearchResult.context'
import type { TripType, SeatClass, AirportOption } from '../context/types'
import { useCallback, useMemo } from 'react'

const FlightSearchForm = () => {
  const state = useFlightSearchState()
  const dispatch = useFlightSearchDispatch()
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))

  const { searchAirports, airportOptions } = useAirportSearchContext();
  const { searchFlightsNow, isLoading, error } = useFlightSearchResults();

  const {
    tripType,
    passengerCount,
    seatClass,
    from,
    to,
    departureDate,
    returnDate,
  } = state

  // Debounced handler for search input
  const debouncedSearchAirports = useMemo(
    () => debounce((query: string) => searchAirports(query), 300),
    [searchAirports]
  )

  const handleAirportInputChange = useCallback((query: string) => {
    if (query.length > 1) debouncedSearchAirports(query)
  }, [debouncedSearchAirports])

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
              { label: 'Economy', value: 'economy' },
              { label: 'Premium Economy', value: 'premium_economy' },
              { label: 'Business', value: 'business' },
              { label: 'First', value: 'first' },
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
              options={airportOptions}
              onInputChange={handleAirportInputChange}
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
            onClick={() => searchFlightsNow(state)}
          />
        </Box>
        {error && (
          <Box color="error.main" textAlign="center" mt={2}>
            {error}
          </Box>
        )}

        {isLoading && (
          <Box
            textAlign="center"
            py={2}
            sx={{
              color: '#fff',
              backgroundColor: '#2b2c2e',
              borderRadius: 2,
              fontSize: '1rem',
              fontWeight: 500,
            }}
          >
            Searching for the best flights...
          </Box>
        )}
      </Stack>
    </Box>
  )
}

export default FlightSearchForm
