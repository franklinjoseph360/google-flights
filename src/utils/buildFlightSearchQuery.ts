import type { FlightSearchState } from "../features/FlightSearch/context/types"

export function buildFlightSearchQuery(state: FlightSearchState): string {
  const {
    from,
    to,
    departureDate,
    returnDate,
    tripType,
    seatClass,
    passengerCount,
  } = state

  if (!from || !to || !departureDate) return ''

  const params = new URLSearchParams()

  from.skyId && params.set('originSkyId', from.skyId)
  to.skyId && params.set('destinationSkyId', to.skyId)
  from.entityId && params.set('originEntityId', from.entityId)
  to.entityId && params.set('destinationEntityId', to.entityId)

  departureDate && params.set('date', departureDate.toISOString().split('T')[0])

  if (tripType === 'roundtrip' && returnDate) {
    params.set('returnDate', returnDate.toISOString().split('T')[0])
  }

  seatClass && params.set('cabinClass', seatClass.toLowerCase())

  if (passengerCount) {
    if (passengerCount.adults != null) params.set('adults', String(passengerCount.adults))
    if (passengerCount.children != null) params.set('childrens', String(passengerCount.children))
    const infantsTotal = (passengerCount.infantsOnLap ?? 0) + (passengerCount.infantsInSeat ?? 0)
    if (infantsTotal > 0) params.set('infants', String(infantsTotal))
  }

  // Optional params
  params.set('sortBy', 'price_high')
  params.set('currency', 'USD')
  params.set('market', 'en-US')
  params.set('countryCode', 'US')

  return params.toString()
}
