import { Box, Stack, Typography } from '@mui/material'
import type { FlightResult } from '@context/types'

const FlightCard = ({ flight }: { flight: FlightResult }) => {
  return (
    <Box
      sx={{
        backgroundColor: '#202124',
        borderRadius: 3,
        padding: 2,
        marginBottom: 2,
        color: '#fff',
      }}
    >
      <Stack direction="row" justifyContent="space-between">
        <Typography variant="h6">{flight.airlineName}</Typography>
        <Typography variant="h6">{flight.price}</Typography>
      </Stack>

      <Stack direction="row" justifyContent="space-between" mt={1}>
        <Typography>{flight.departureTime} → {flight.arrivalTime}</Typography>
        <Typography>{flight.duration}</Typography>
      </Stack>

      <Stack direction="row" justifyContent="space-between" mt={1}>
        <Typography>{flight.stops}</Typography>
        <Typography>{flight.emissions} ({flight.emissionsTag})</Typography>
      </Stack>
    </Box>
  )
}

export default FlightCard
