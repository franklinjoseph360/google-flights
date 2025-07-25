import { Box, Stack, Typography, Chip } from '@mui/material'
import type { FlightResult } from '@context/types'

const FlightCard = ({ flight }: { flight: FlightResult }) => {
  return (
    <Box
      sx={{
        backgroundColor: '#202124',
        borderRadius: 3,
        padding: 3,
        marginBottom: 3,
        boxShadow: '0 0 10px rgba(255, 255, 255, 0.1)',
        transition: 'transform 0.2s ease-in-out',
        '&:hover': {
          transform: 'scale(1.02)',
          boxShadow: '0 0 15px rgba(255, 255, 255, 0.2)',
        },
        color: '#fff',
      }}
    >
      <Stack direction="row" justifyContent="space-between" alignItems="center" mb={1}>
        <Typography variant="h6" fontWeight={600}>
          {flight.airlineName}
        </Typography>
        <Typography variant="h6" fontWeight={700} color="success.main">
          {flight.price}
        </Typography>
      </Stack>

      <Stack direction="row" justifyContent="space-between" mb={0.5}>
        <Typography fontSize="1.1rem">
          {flight.departureTime} → {flight.arrivalTime}
        </Typography>
        <Chip
          label={flight.duration}
          sx={{ backgroundColor: '#383a3f', color: '#fff', fontWeight: 500 }}
        />
      </Stack>

      <Stack direction="row" justifyContent="space-between" mt={0.5}>
        <Typography color="gray">{flight.stops}</Typography>
        <Typography color="#90ee90" fontSize="0.9rem">
          {flight.emissions} ({flight.emissionsTag})
        </Typography>
      </Stack>
    </Box>
  )
}

export default FlightCard
