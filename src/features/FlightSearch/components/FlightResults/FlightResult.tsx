import { Box, Typography, CircularProgress } from '@mui/material'
import { useState } from 'react'
import { useFlightSearchResults } from '@context/flightSearchResult.context'
import FlightCard from './FlightCard'
import TabButton from '@components/common/TabButton/TabButton'

const FlightResult = () => {
  const { flightSearchResults, isLoading, error } = useFlightSearchResults()
  const [selectedTab, setSelectedTab] = useState<'best' | 'cheapest'>('cheapest')

  const noResults =
    !isLoading &&
    (!flightSearchResults ||
      (flightSearchResults.cheapest.length === 0 &&
        flightSearchResults.best.length === 0))

  const selectedResults = flightSearchResults?.[selectedTab] || []

  return (
    <Box mt={4}>
      {isLoading && (
        <Box display="flex" justifyContent="center" mt={5}>
          <CircularProgress />
        </Box>
      )}

      {!isLoading && error && (
        <Typography color="error" align="center" mt={4}>
          {error}
        </Typography>
      )}

      {noResults && (
        <Typography align="center" mt={5}>
          No flights found.
        </Typography>
      )}

      {!isLoading &&
        flightSearchResults &&
        (flightSearchResults.best.length > 0 || flightSearchResults.cheapest.length > 0) && (
          <>
            <Box display="flex" justifyContent='center' gap={2} mb={3}>
              <TabButton
                title="Best"
                active={selectedTab === 'best'}
                tooltip="Combines duration and emissions"
                onClick={() => setSelectedTab('best')}
              />
              <TabButton
                title="Cheapest"
                subtitle={`from ${flightSearchResults.cheapest?.[0]?.price ?? '—'}`}
                active={selectedTab === 'cheapest'}
                tooltip="Lowest price flights"
                onClick={() => setSelectedTab('cheapest')}
              />
            </Box>

            <Box display="flex" flexDirection="column" gap={3}>
              {selectedResults.map((flight, idx) => (
                <FlightCard key={`${selectedTab}-${idx}`} flight={flight} />
              ))}
            </Box>
          </>
        )}
    </Box>
  )
}

export default FlightResult
