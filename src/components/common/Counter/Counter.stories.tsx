import type { Meta, StoryObj } from '@storybook/react'
import Counter from './Counter'
import { useState } from 'react'

const meta: Meta<typeof Counter> = {
  title: 'Common/Counter',
  component: Counter,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Counter>

export const Default: Story = {
  render: () => {
    const [count, setCount] = useState(1)
    return <Counter label="Adults" value={count} onChange={setCount} />
  },
}

export const WithMinMax: Story = {
  render: () => {
    const [count, setCount] = useState(2)
    return <Counter label="Children" value={count} onChange={setCount} min={0} max={5} />
  },
}
