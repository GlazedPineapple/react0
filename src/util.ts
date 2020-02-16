/** Convert kelvin to fahrenheit */
export function kelvinToFahrenheit(kelvin: number): number {
    return kelvinToCelcius(kelvin) * 9 / 5 + 32;
}

/** Convert kelvin to celcius */
export function kelvinToCelcius(kelvin: number): number {
    return kelvin - 272.15;
}

/** Rounds the given number to the specific number of places */
export function roundPlaces(num: number, places: number): number {
    const exp = Math.pow(10, places);
    return Math.round(num * exp) / exp;
}

export function metersPerSecondToMilesPerHour(metersPerSecond: number): number {
    return metersPerSecond * 2.237;
}