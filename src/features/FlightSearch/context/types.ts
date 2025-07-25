export interface AirportOption {
  label: string
  value: string
}

export type PassengerCount = {
  adults: number
  children: number
  infantsOnLap: number
  infantsInSeat: number
}

export type TripType = 'oneway' | 'roundtrip' | 'multicity'
export type SeatClass = 'Economy' | 'Premium Economy' | 'Business' | 'First'

export type FlightSearchState = {
  tripType: TripType
  passengerCount: PassengerCount
  seatClass: SeatClass
  from: AirportOption | null
  to: AirportOption | null
  departureDate: Date | null
  returnDate: Date | null
}

export type FlightSearchAction =
  | { type: 'SET_TRIP_TYPE'; payload: TripType }
  | { type: 'SET_PASSENGER_COUNT'; payload: PassengerCount }
  | { type: 'SET_SEAT_CLASS'; payload: SeatClass }
  | { type: 'SET_AIRPORT_FIELD'; payload: { field: 'from' | 'to'; value: AirportOption | null } }
  | { type: 'SET_DEPARTURE_DATE'; payload: Date | null }
  | { type: 'SET_RETURN_DATE'; payload: Date | null }
