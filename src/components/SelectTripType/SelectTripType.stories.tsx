import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import SelectTripType from './SelectTripType'

const tripTypeOptions = [
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
    const [value, setValue] = useState<string | number>('oneway')

    return (
      <SelectTripType
        value={value}
        onChange={(val) => setValue(val)}
        options={tripTypeOptions}
      />
    )
  },
}
