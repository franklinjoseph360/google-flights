import React, { createContext, useContext, useState, useCallback } from 'react'
import debounce from 'lodash.debounce'
import { fetchAirportOptions } from '@services/airportSearchService'
import type { AirportOption } from './types'

interface AirportSearchContextType {
  query: string
  setQuery: (q: string) => void
  results: AirportOption[]
  setResults: (res: AirportOption[]) => void
  airportOptions: AirportOption[]
  searchAirports: (query: string) => void
}

const AirportSearchContext = createContext<AirportSearchContextType | undefined>(undefined)

export const AirportSearchProvider = ({ children }: { children: React.ReactNode }) => {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState<AirportOption[]>([])

  const searchAirports = useCallback(
    debounce(async (query: string) => {
      const airports = await fetchAirportOptions(query)
      setResults(airports)
    }, 60),
    []
  )

  return (
    <AirportSearchContext.Provider
      value={{
        query,
        setQuery,
        results,
        setResults,
        airportOptions: results,
        searchAirports,
      }}
    >
      {children}
    </AirportSearchContext.Provider>
  )
}

export const useAirportSearchContext = () => {
  const ctx = useContext(AirportSearchContext)
  if (!ctx) throw new Error('useAirportSearchContext must be used within an AirportSearchProvider')
  return ctx
}
