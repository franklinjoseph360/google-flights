import type { Meta, StoryObj } from '@storybook/react'
import CustomDateRangePicker from './CustomDateRangePicker'

const meta: Meta<typeof CustomDateRangePicker> = {
  title: 'Common/DateRangePicker',
  component: CustomDateRangePicker,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof CustomDateRangePicker>

export const Default: Story = {
  render: () => <CustomDateRangePicker />,
}
