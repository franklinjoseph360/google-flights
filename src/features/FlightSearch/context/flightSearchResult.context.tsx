import React, {
  createContext,
  useContext,
  useState,
  useCallback,
  useMemo,
} from 'react'
import { searchFlights } from '../../../services/flightSearchService'
import type { FlightResult, FlightSearchState } from './types'
import { parseFlightCards } from '../../../utils/parseFlightResults'

interface NormalizedFlightResults {
  cheapest: FlightResult[]
  best: FlightResult[]
}

interface FlightSearchResultContextType {
  flightSearchResults: NormalizedFlightResults | null
  isLoading: boolean
  error: string | null
  searchFlightsNow: (state: FlightSearchState) => Promise<void>
  clearResults: () => void
}

const FlightSearchResultContext = createContext<FlightSearchResultContextType | undefined>(undefined)

export const FlightSearchResultProvider = ({ children }: { children: React.ReactNode }) => {
  const [flightSearchResults, setResults] = useState<NormalizedFlightResults | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const searchFlightsNow = useCallback(async (state: FlightSearchState) => {
    setIsLoading(true)
    setError(null)

    try {
      const response = await searchFlights(state)
      const parsedFlightResults = parseFlightCards(response) // returns { cheapest: [], best: [] }
      setResults(parsedFlightResults)
    } catch (err) {
      console.error(err)
      setError('Failed to fetch flight results')
    } finally {
      setIsLoading(false)
    }
  }, [])

  const clearResults = useCallback(() => {
    setResults(null)
    setError(null)
  }, [])

  const value = useMemo<FlightSearchResultContextType>(() => ({
    flightSearchResults,
    isLoading,
    error,
    searchFlightsNow,
    clearResults,
  }), [flightSearchResults, isLoading, error, searchFlightsNow, clearResults])

  return (
    <FlightSearchResultContext.Provider value={value}>
      {children}
    </FlightSearchResultContext.Provider>
  )
}

export const useFlightSearchResults = () => {
  const context = useContext(FlightSearchResultContext)
  if (!context) {
    throw new Error('useFlightSearchResults must be used within a FlightSearchResultProvider')
  }
  return context
}
