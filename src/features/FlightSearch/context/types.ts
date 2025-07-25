export interface AirportOption {
  label: string
  value: string
  skyId: string
  entityId: string
}

export type PassengerCount = {
  adults: number
  children: number
  infantsOnLap: number
  infantsInSeat: number
}

export type FlightResult = {
  departureTime: string
  arrivalTime: string
  airlineName: string
  duration: string
  stops: string
  emissions: string
  emissionsTag: string
  price: string
}


export type TripType = 'oneway' | 'roundtrip' | 'multicity'
export type SeatClass = 'economy' | 'premium_economy' | 'business' | 'first'

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
