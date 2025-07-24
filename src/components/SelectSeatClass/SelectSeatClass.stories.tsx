import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import SelectSeatClass from './SelectSeatClass'

const seatClassOptions = [
  { label: 'Economy', value: 'economy' },
  { label: 'Premium Economy', value: 'premium' },
  { label: 'Business', value: 'business' },
  { label: 'First Class', value: 'first' },
]

const meta: Meta<typeof SelectSeatClass> = {
  title: 'Components/SelectSeatClass',
  component: SelectSeatClass,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof SelectSeatClass>

export const Default: Story = {
  render: () => {
    const [value, setValue] = useState<string | number>('economy')

    return (
      <SelectSeatClass
        value={value}
        onChange={setValue}
        options={seatClassOptions}
      />
    )
  },
}
