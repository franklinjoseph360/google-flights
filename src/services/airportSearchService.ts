export type AirportResult = {
    label: string
    value: string
    skyId: string
    entityId: string
}

export async function fetchAirportOptions(query: string): Promise<AirportResult[]> {
    try {
        const response = await fetch(
            `https://sky-scrapper.p.rapidapi.com/api/v1/flights/searchAirport?query=${encodeURIComponent(query)}&locale=en-US`,
            {
                method: 'GET',
                headers: {
                    'x-rapidapi-key': import.meta.env.VITE_FLIGHTS_APP_RAPIDAPI_KEY,
                    'x-rapidapi-host': import.meta.env.VITE_FLIGHTS_APP_RAPIDAPI_HOST,
                },
            }
        )

        const result = await response.json()

        if (!Array.isArray(result.data)) return []

        return result.data.map((item: any) => ({
            label: `${item.presentation.title} (${item.skyId})`,
            value: item.skyId,
            skyId: item.skyId,
            entityId: item.entityId,
        }))
    } catch (error) {
        console.error('Failed to fetch airport options:', error)
        return []
    }
}

