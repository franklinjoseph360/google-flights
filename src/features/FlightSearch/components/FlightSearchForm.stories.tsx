import type { Meta, StoryObj } from '@storybook/react'
import FlightSearchForm from './FlightSearchForm'
import { FlightSearchProvider } from '../context/flightSearch.context'

const meta: Meta<typeof FlightSearchForm> = {
  title: 'FlightSearch/FlightSearchForm',
  component: FlightSearchForm,
  decorators: [
    (Story) => (
      <FlightSearchProvider>
        <div>
          <Story />
        </div>
      </FlightSearchProvider>
    ),
  ],
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof FlightSearchForm>

export const Default: Story = {
  render: () => <FlightSearchForm />,
}
