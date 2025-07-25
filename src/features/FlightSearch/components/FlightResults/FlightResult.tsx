import { Box, Typography } from '@mui/material'
import { useFlightSearchResults } from '../../context/flightSearchResult.context'
import FlightCard from './FlightCard'

const FlightResult = () => {
    const { flightSearchResults } = useFlightSearchResults()

    return (
        <>
            {!flightSearchResults.length &&
                <Box mt={5}>
                    <Typography>No flights found.</Typography>
                </Box>
            }
            <Box mt={3}>
                {flightSearchResults.map((flight, idx) => (
                    <FlightCard key={idx} flight={flight} />
                ))}
            </Box>
        </>
    )
}

export default FlightResult
