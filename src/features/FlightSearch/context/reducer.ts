import type { FlightSearchState, FlightSearchAction } from './types'

export const initialState: FlightSearchState = {
  tripType: 'oneway',
  passengerCount: {
    adults: 1,
    children: 0,
    infantsOnLap: 0,
    infantsInSeat: 0,
  },
  seatClass: 'Economy',
  from: { label: 'New York (JFK)', value: 'JFK' },
  to: { label: 'Los Angeles (LAX)', value: 'LAX' },
  departureDate: new Date(),
  returnDate: null,
}


export function flightSearchReducer(
  state: FlightSearchState,
  action: FlightSearchAction
): FlightSearchState {
  switch (action.type) {
    case 'SET_TRIP_TYPE':
      return { ...state, tripType: action.payload }

    case 'SET_PASSENGER_COUNT':
      return { ...state, passengerCount: action.payload }

    case 'SET_SEAT_CLASS':
      return { ...state, seatClass: action.payload }

    case 'SET_AIRPORT_FIELD':
      return {
        ...state,
        [action.payload.field]: action.payload.value,
      }

    case 'SET_DEPARTURE_DATE':
      return { ...state, departureDate: action.payload }

    case 'SET_RETURN_DATE':
      return { ...state, returnDate: action.payload }

    default:
      return state
  }
}
