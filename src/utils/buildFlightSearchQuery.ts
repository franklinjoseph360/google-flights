import type { FlightSearchState } from "../features/FlightSearch/context/types"

function formatDateLocal(date: Date): string {
  const year = date.getFullYear()
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const day = String(date.getDate()).padStart(2, '0')
  return `${year}-${month}-${day}`
}

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

  if (tripType === 'multicity') {
    // Multi-city support depends on multiple segments, which aren't defined in current state
    // Placeholder: return empty or throw for now
    return ''
  }

  console.log('departureDate', departureDate);
  console.log('returnDate', returnDate);

  if (!from?.entityId || !to?.entityId || !departureDate) return ''

  const params = new URLSearchParams()

  params.set('fromEntityId', from.skyId)
  params.set('toEntityId', to.skyId)
  params.set('departDate', formatDateLocal(departureDate))

  if (tripType === 'roundtrip' && returnDate) {
    params.set('returnDate', formatDateLocal(returnDate))
  }

  if (seatClass) {
    params.set('cabinClass', seatClass.toLowerCase())
  }

  if (passengerCount) {
    if (passengerCount.adults != null) {
      params.set('adults', String(passengerCount.adults))
    }
    if (passengerCount.children != null && passengerCount.children > 0) {
      params.set('children', String(passengerCount.children)) // rename from `childrens`
    }
    const infantsTotal = (passengerCount.infantsOnLap ?? 0) + (passengerCount.infantsInSeat ?? 0)
    if (infantsTotal > 0) {
      params.set('infants', String(infantsTotal))
    }
  }

  // Required by new API
  params.set('sort', 'cheapest_first')

  return params.toString()
}
