import React, { createContext, useReducer, useContext } from 'react'
import { flightSearchReducer, initialFlightSearchState } from './reducer'
import type { FlightSearchState, FlightSearchAction } from './types'

const FlightSearchStateContext = createContext<FlightSearchState | undefined>(undefined)
const FlightSearchDispatchContext = createContext<React.Dispatch<FlightSearchAction> | undefined>(undefined)

export const FlightSearchProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(flightSearchReducer, initialFlightSearchState)

  return (
    <FlightSearchStateContext.Provider value={state}>
      <FlightSearchDispatchContext.Provider value={dispatch}>
        {children}
      </FlightSearchDispatchContext.Provider>
    </FlightSearchStateContext.Provider>
  )
}

export const useFlightSearchState = () => {
  const context = useContext(FlightSearchStateContext)
  if (!context) throw new Error('useFlightSearchState must be used within a FlightSearchProvider')
  return context
}

export const useFlightSearchDispatch = () => {
  const context = useContext(FlightSearchDispatchContext)
  if (!context) throw new Error('useFlightSearchDispatch must be used within a FlightSearchProvider')
  return context
}
