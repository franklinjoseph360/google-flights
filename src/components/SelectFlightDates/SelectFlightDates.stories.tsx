import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import SelectFlightDates from './SelectFlightDates'

const meta: Meta<typeof SelectFlightDates> = {
  title: 'Components/SelectFlightDates',
  component: SelectFlightDates,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof SelectFlightDates>

export const Default: Story = {
  render: () => {
    const [tripType, setTripType] = useState<'oneway' | 'roundtrip' | 'multicity'>('oneway')
    const [departureDate, setDepartureDate] = useState<Date | null>(null)

    return (
      <div style={{ maxWidth: 400 }}>
        <select
          value={tripType}
          onChange={(e) => setTripType(e.target.value as 'oneway' | 'roundtrip' | 'multicity')}
          style={{ marginBottom: 16 }}
        >
          <option value="oneway">One-way</option>
          <option value="roundtrip">Round-trip</option>
          <option value="multicity">Multi-city</option>
        </select>

        <SelectFlightDates
          tripType={tripType}
          departureDate={departureDate}
          onDepartureChange={setDepartureDate}
          onReturnChange={() => { }}
        />
      </div>
    )
  },
}
