import { createContext, useReducer, useContext } from 'react'
import { flightSearchReducer, initialState } from './reducer'
import type { FlightSearchState, FlightSearchAction } from './types'

const FlightSearchStateContext = createContext<FlightSearchState | undefined>(undefined)
const FlightSearchDispatchContext = createContext<React.Dispatch<FlightSearchAction> | undefined>(undefined)

export const FlightSearchProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(flightSearchReducer, initialState)

  return (
    <FlightSearchStateContext.Provider value={state}>
      <FlightSearchDispatchContext.Provider value={dispatch}>
        {children}
      </FlightSearchDispatchContext.Provider>
    </FlightSearchStateContext.Provider>
  )
}

export const useFlightSearchState = (): FlightSearchState => {
  const context = useContext(FlightSearchStateContext)
  if (context === undefined) {
    throw new Error('useFlightSearchState must be used within a FlightSearchProvider')
  }
  return context
}

export const useFlightSearchDispatch = (): React.Dispatch<FlightSearchAction> => {
  const context = useContext(FlightSearchDispatchContext)
  if (context === undefined) {
    throw new Error('useFlightSearchDispatch must be used within a FlightSearchProvider')
  }
  return context
}