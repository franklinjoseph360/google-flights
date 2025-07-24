import type { Meta, StoryObj } from '@storybook/react'
import Autocomplete from './Autocomplete'
import { useState } from 'react'

const airportOptions = [
  { label: 'New York (JFK)', value: 'JFK' },
  { label: 'Los Angeles (LAX)', value: 'LAX' },
  { label: 'Chicago O’Hare (ORD)', value: 'ORD' },
  { label: 'London Heathrow (LHR)', value: 'LHR' },
  { label: 'Singapore Changi (SIN)', value: 'SIN' },
  { label: 'Tokyo Haneda (HND)', value: 'HND' },
  { label: 'Dubai International (DXB)', value: 'DXB' },
]

const meta: Meta<typeof Autocomplete> = {
  title: 'Common/Autocomplete',
  component: Autocomplete,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Autocomplete>

export const Default: Story = {
  render: () => {
    const [airport, setAirport] = useState(airportOptions[0])

    return (
      <Autocomplete
        options={airportOptions}
        value={airport}
        onChange={(_, newValue) => newValue && setAirport(newValue)}
        placeholder="Search airport"
      />
    )
  },
}
