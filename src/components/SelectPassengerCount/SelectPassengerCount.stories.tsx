import SelectPassengerCount from './SelectPassengerCount'
import { useState } from 'react'

export default {
  title: 'Components/SelectPassengerCount',
  component: SelectPassengerCount,
}

export const Default = () => {
  const [value, setValue] = useState({
    adults: 1,
    children: 0,
    infantsInSeat: 0,
    infantsOnLap: 0,
  })

  return <SelectPassengerCount value={value} onChange={setValue} />
}
