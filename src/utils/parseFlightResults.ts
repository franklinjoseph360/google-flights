export function parseFlightCards(apiResponse: any) {
    const itineraries = apiResponse?.data?.itineraries || []

    return itineraries.map((item: any) => {
        const leg = item.legs[0]
        const segment = leg.segments[0]
        const marketingCarrier = leg.carriers.marketing[0]

        const formatTime = (iso: string) => {
            const date = new Date(iso)
            const hours = date.getHours()
            const minutes = date.getMinutes().toString().padStart(2, '0')
            const suffix = hours >= 12 ? 'PM' : 'AM'
            const formattedHour = hours % 12 || 12
            return `${formattedHour}:${minutes} ${suffix}`
        }

        const getDurationString = (min: number) => {
            const hr = Math.floor(min / 60)
            const m = min % 60
            return `${hr > 0 ? `${hr} hr ` : ''}${m > 0 ? `${m} min` : ''}`.trim()
        }

        return {
            departureTime: formatTime(segment.departure),
            arrivalTime: formatTime(segment.arrival),
            airlineName: marketingCarrier?.name,
            duration: getDurationString(leg.durationInMinutes),
            stops: leg.stopCount === 0 ? 'Nonstop' : `${leg.stopCount} stop`,
            emissions: item.eco?.ecoContenderDelta
                ? `${105} kg CO2e`
                : leg.stopCount === 0
                    ? '137 kg CO2e'
                    : '285 kg CO2e',
            emissionsTag: item.eco?.ecoContenderDelta
                ? '-20% emissions'
                : leg.stopCount > 0
                    ? '+118% emissions'
                    : 'Avg emissions',
            price: `SGD ${Math.round(item.price.raw)}`
        }
    })
}
