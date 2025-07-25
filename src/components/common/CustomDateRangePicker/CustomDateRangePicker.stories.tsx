// stories/CustomDateRangePicker.stories.tsx
import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import CustomDateRangePicker from './CustomDateRangePicker'

const meta: Meta<typeof CustomDateRangePicker> = {
  title: 'Common/CustomDateRangePicker',
  component: CustomDateRangePicker,
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof CustomDateRangePicker>

export const Default: Story = {
  render: () => {
    const [startDate, setStartDate] = useState<Date | null>(null)
    const [endDate, setEndDate] = useState<Date | null>(null)

    return (
      <CustomDateRangePicker
        startDate={startDate}
        endDate={endDate}
        onStartDateChange={setStartDate}
        onEndDateChange={setEndDate}
      />
    )
  },
}

export const WithInitialDates: Story = {
  render: () => {
    const today = new Date()
    const tomorrow = new Date()
    tomorrow.setDate(today.getDate() + 1)

    const [startDate, setStartDate] = useState<Date | null>(today)
    const [endDate, setEndDate] = useState<Date | null>(tomorrow)

    return (
      <CustomDateRangePicker
        startDate={startDate}
        endDate={endDate}
        onStartDateChange={setStartDate}
        onEndDateChange={setEndDate}
      />
    )
  },
}
