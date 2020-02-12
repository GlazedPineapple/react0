/** Convert kelvin to fahrenheit */
export function kelvinToFahrenheit(kelvin: number): number {
    return kelvinToCelcius(kelvin) * 9 / 5 + 32;
}

/** Convert kelvin to celcius */
export function kelvinToCelcius(kelvin: number): number {
    return kelvin - 272.15;
}