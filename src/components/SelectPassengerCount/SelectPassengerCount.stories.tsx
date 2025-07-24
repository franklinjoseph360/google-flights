// SelectPassengerCount.stories.tsx

import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import SelectPassengerCount from './SelectPassengerCount'

const meta: Meta<typeof SelectPassengerCount> = {
  title: 'Components/SelectPassengerCount',
  component: SelectPassengerCount,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof SelectPassengerCount>

export const Default: Story = {
  render: () => {
    const [value, setValue] = useState({
      adults: 1,
      children: 0,
      infantsInSeat: 0,
      infantsOnLap: 0,
    })

    return (
      <SelectPassengerCount
        value={value}
        onChange={setValue}
      />
    )
  },
}
