import { Box, Paper, Stack } from '@mui/material'
import { SearchButton } from '../../components/SearchButton'
import { SelectAirportFields } from '../../components/SelectAirportFields'
import { SelectFlightDates } from '../../components/SelectFlightDates'
import { SelectPassengerCount } from '../../components/SelectPassengerCount'
import { SelectSeatClass } from '../../components/SelectSeatClass'
import { SelectTripType } from '../../components/SelectTripType'

export default function FlightSearchForm() {
  return (
    <Paper
      elevation={3}
      sx={{
        bgcolor: '#2d2f31',
        borderRadius: 2,
        px: 3,
        py: 2,
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
      }}
    >
      <Stack
        direction="row"
        spacing={2}
        justifyContent="space-between"
        alignItems="center"
        flexWrap="wrap"
      >
        <SelectTripType />
        <SelectPassengerCount />
        <SelectSeatClass />
      </Stack>

      <Stack
        direction="row"
        spacing={2}
        flexWrap="wrap"
        alignItems="center"
      >
        <SelectAirportFields />
        <SelectFlightDates />
      </Stack>

      <Box display="flex" justifyContent="center" mt={2}>
        <SearchButton />
      </Box>
    </Paper>
  )
}
