import type { FlightSearchState } from "@feature/FlightSearch/context/types"
import { buildFlightSearchQuery } from "@utils/buildFlightSearchQuery"

export async function searchFlights(state: FlightSearchState): Promise<any> {
  const queryString = buildFlightSearchQuery(state)

  if (!queryString) {
    console.warn('Missing required search parameters')
    return null
  }

  let endpoint = ''
  switch (state.tripType) {
    case 'oneway':
      endpoint = '/flights/search-one-way'
      break
    case 'roundtrip':
      endpoint = '/flights/search-roundtrip'
      break
    case 'multicity':
      endpoint = '/flights/search-multi-city'
      break
    default:
      console.warn(`Unsupported trip type: ${state.tripType}`)
      return null
  }

  const baseHost = import.meta.env.VITE_FLIGHTS_APP_RAPIDAPI_FLIGHTS_HOST
  const apiKey = import.meta.env.VITE_FLIGHTS_APP_RAPIDAPI_KEY

  try {
    const response = await fetch(`https://${baseHost}${endpoint}?${queryString}`, {
      method: 'GET',
      headers: {
        'x-rapidapi-key': apiKey,
        'x-rapidapi-host': baseHost,
      },
    })

    const result = await response.json()

    return result
  } catch (error) {
    console.error('Flight search failed:', error)
    return null
  }
}
