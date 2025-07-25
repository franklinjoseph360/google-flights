import './App.css'
import FlightSearchForm from './features/FlightSearch/components/FlightSearchForm'
import { FlightSearchProvider } from './features/FlightSearch/context/context'
import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'

function App() {
  return (
    <div className="app-container">
      <h1>Google Flights - Franklin Joseph</h1>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <FlightSearchProvider>
          <FlightSearchForm />
        </FlightSearchProvider>
      </LocalizationProvider>
    </div>
  )
}

export default App
