import './App.css'
import FlightResult from '@feature/FlightSearch/components/FlightResults/FlightResult'
import FlightSearchForm from '@feature/FlightSearch/components/FlightSearch/FlightSearchForm'
import { AirportSearchProvider } from '@feature/FlightSearch/context/airportSearch.context'
import { FlightSearchProvider } from '@feature/FlightSearch/context/flightSearch.context'
import { FlightSearchResultProvider } from '@feature/FlightSearch/context/flightSearchResult.context'
import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'

function App() {
  return (
    <div className="app-container">
      <h1>Google Flights Clone - Franklin Joseph</h1>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <FlightSearchProvider>
          <FlightSearchResultProvider>
            <AirportSearchProvider>
              <FlightSearchForm />
              <FlightResult />
            </AirportSearchProvider>
          </FlightSearchResultProvider>
        </FlightSearchProvider>
      </LocalizationProvider>
    </div>
  )
}

export default App
