import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import SelectTripType from './SelectTripType'
import type { TripType } from '@context/types'

const tripTypeOptions: { label: string; value: TripType }[] = [
  { label: 'One-way', value: 'oneway' },
  { label: 'Round-trip', value: 'roundtrip' },
  { label: 'Multi-city', value: 'multicity' },
]

const meta: Meta<typeof SelectTripType> = {
  title: 'Components/SelectTripType',
  component: SelectTripType,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof SelectTripType>

export const Default: Story = {
  render: () => {
    const [value, setValue] = useState<TripType>('oneway')

    return (
      <SelectTripType
        value={value}
        onChange={(val) => setValue(val)}
        options={tripTypeOptions}
      />
    )
  },
}
