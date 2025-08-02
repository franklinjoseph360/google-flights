import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import SelectAirportFields from './SelectAirportFields'
import type { AirportOption } from '@context/types'

const airportOptions: AirportOption[] = [
  {
    label: 'Singapore Changi Airport (SIN)',
    value: 'SIN',
    skyId: 'SIN123',
    entityId: 'airport:sin',
  },
  {
    label: 'Kuala Lumpur International Airport (KUL)',
    value: 'KUL',
    skyId: 'KUL123',
    entityId: 'airport:kul',
  },
  {
    label: 'Bangkok Suvarnabhumi (BKK)',
    value: 'BKK',
    skyId: 'BKK123',
    entityId: 'airport:bkk',
  },
  {
    label: 'Tokyo Haneda (HND)',
    value: 'HND',
    skyId: 'HND123',
    entityId: 'airport:hnd',
  },
  {
    label: 'Sydney Kingsford Smith (SYD)',
    value: 'SYD',
    skyId: 'SYD123',
    entityId: 'airport:syd',
  },
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
        const [from, setFrom] = useState<AirportOption | null>(airportOptions[0])
        const [to, setTo] = useState<AirportOption | null>(airportOptions[1])


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
