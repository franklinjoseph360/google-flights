export function parseFlightCards(apiResponse: any) {
  const itineraries = apiResponse?.data?.itineraries || []

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

  const parsed = itineraries.map((item: any) => {
    const leg = item.legs[0]
    const segment = leg.segments[0]
    const marketingCarrier = leg.carriers.marketing[0]
    const durationInMinutes = leg.durationInMinutes
    const priceValue = item.price.raw

    const isEco = !!item.eco?.ecoContenderDelta
    const estimatedEmission = isEco
      ? 105
      : leg.stopCount === 0
      ? 137
      : 285

    return {
      departureTime: formatTime(segment.departure),
      arrivalTime: formatTime(segment.arrival),
      airlineName: marketingCarrier?.name,
      duration: getDurationString(durationInMinutes),
      stops: leg.stopCount === 0 ? 'Nonstop' : `${leg.stopCount} stop`,
      emissions: `${estimatedEmission} kg CO2e`,
      emissionsTag: isEco
        ? '-20% emissions'
        : leg.stopCount > 0
        ? '+118% emissions'
        : 'Avg emissions',
      price: `SGD ${Math.round(priceValue)}`,
      rawPrice: priceValue,
      rawDuration: durationInMinutes,
      rawEmissions: estimatedEmission
    }
  })

  if (parsed.length === 0) return { cheapest: [], best: [] }

  // Sort cheapest by price ascending
  const cheapest = [...parsed].sort((a, b) => a.rawPrice - b.rawPrice)

  // Score = duration * 0.6 + emissions * 0.4
  const scored = parsed.map((flight: { rawDuration: number; rawEmissions: number }) => ({
    ...flight,
    score: flight.rawDuration * 0.6 + flight.rawEmissions * 0.4
  }))

  const best = [...scored].sort((a, b) => a.score - b.score)

  const stripRaw = (f: any) => {
    const { rawPrice, rawDuration, rawEmissions, score, ...rest } = f
    return rest
  }

  return {
    cheapest: cheapest.map(stripRaw),
    best: best.map(stripRaw)
  }
}
