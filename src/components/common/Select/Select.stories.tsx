import type { Meta, StoryObj } from '@storybook/react'
import Select from './Select'

const meta: Meta<typeof Select> = {
  title: 'Common/Select',
  component: Select,
}

export default meta
type Story = StoryObj<typeof Select>

export const Default: Story = {
  args: {
    label: 'Seat Class',
    value: 'economy',
    onChange: () => {},
    options: [
      { label: 'Economy', value: 'economy' },
      { label: 'Business', value: 'business' },
      { label: 'First', value: 'first' },
    ],
  },
}
