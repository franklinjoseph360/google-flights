import type { Meta, StoryObj } from '@storybook/react'
import DatePicker from './DatePicker'
import { useState } from 'react'
import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'

const meta: Meta<typeof DatePicker> = {
  title: 'Common/DatePicker',
  component: DatePicker,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof DatePicker>

export const Default: Story = {
  render: () => {
    const [date, setDate] = useState<Date | null>(null)

    return (
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DatePicker value={date} onChange={setDate} placeholder="Select date" />
      </LocalizationProvider>
    )
  },
}
