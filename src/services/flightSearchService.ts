import type { FlightSearchState } from "@feature/FlightSearch/context/types"
import { buildFlightSearchQuery } from "@utils/buildFlightSearchQuery"

export async function searchFlights(state: FlightSearchState): Promise<any> {
  const queryString = buildFlightSearchQuery(state)

  if (!queryString) {
    console.warn('Missing required search parameters')
    return null
  }

  try {
    const response = await fetch(
      `https://sky-scrapper.p.rapidapi.com/api/v1/flights/searchFlights?${queryString}`,
      {
        method: 'GET',
        headers: {
          'x-rapidapi-key': import.meta.env.VITE_FLIGHTS_APP_RAPIDAPI_KEY,
          'x-rapidapi-host': import.meta.env.VITE_FLIGHTS_APP_RAPIDAPI_HOST,
        },
      }
    )

    const result = await response.json()

    return result
  } catch (error) {
    console.error('Flight search failed:', error)
    return null
  }
}
