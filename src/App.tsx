import './App.css'
import FlightSearchForm from './features/FlightSearch/components/FlightSearchForm'
import { AirportSearchProvider } from './features/FlightSearch/context/airportSearch.context'
import { FlightSearchProvider } from './features/FlightSearch/context/flightSearch.context'
import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { FlightSearchResultProvider } from './features/FlightSearch/context/flightSearchResult.context'

function App() {
  return (
    <div className="app-container">
      <h1>Google Flights - Franklin Joseph</h1>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <FlightSearchProvider>
          <FlightSearchResultProvider>
            <AirportSearchProvider>
              <FlightSearchForm />
            </AirportSearchProvider>
          </FlightSearchResultProvider>
        </FlightSearchProvider>
      </LocalizationProvider>
    </div>
  )
}

export default App
