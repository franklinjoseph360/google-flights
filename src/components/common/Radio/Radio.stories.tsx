import type { Meta, StoryObj } from '@storybook/react'
import Radio from './Radio'
import { useState } from 'react'

const meta: Meta<typeof Radio> = {
  title: 'Common/Radio',
  component: Radio,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Radio>

const options = [
  { label: 'Round trip', value: 'round-trip' },
  { label: 'One way', value: 'one-way' },
  { label: 'Multi-city', value: 'multi-city' },
]

export const Default: Story = {
  render: () => {
    const [value, setValue] = useState('round-trip')
    return <Radio value={value} onChange={(e) => setValue(e.target.value)} options={options} />
  },
}
