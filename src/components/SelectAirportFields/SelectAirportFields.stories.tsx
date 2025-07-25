import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import SelectAirportFields from './SelectAirportFields'

const airportOptions = [
    { label: 'Singapore Changi Airport (SIN)', value: 'SIN' },
    { label: 'Kuala Lumpur International Airport (KUL)', value: 'KUL' },
    { label: 'Bangkok Suvarnabhumi (BKK)', value: 'BKK' },
    { label: 'Tokyo Haneda (HND)', value: 'HND' },
    { label: 'Sydney Kingsford Smith (SYD)', value: 'SYD' },
]

const meta: Meta<typeof SelectAirportFields> = {
    title: 'Components/SelectAirportFields',
    component: SelectAirportFields,
    tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof SelectAirportFields>

export const Default: Story = {
    render: () => {
        const [from, setFrom] = useState<{ label: string; value: string } | null>(airportOptions[0])
        const [to, setTo] = useState<{ label: string; value: string } | null>(airportOptions[1])


        return (
            <SelectAirportFields
                from={from}
                to={to}
                options={airportOptions}
                onChange={(field, val) => {
                    if (field === 'from') setFrom(val)
                    else setTo(val)
                }}
            />
        )
    },
}
