import { useEffect, useState } from "react";

/** APPID for openweather map */
const APPID = "3641e4dc0ad8580be2a1f8a82fa268a2";

/** React hook for weather api */
export default function useWeather(location: string) {
    const [apiResponse, setApiResponse] = useState<ICurrentWeather | IWeatherError>();

    // Fetch API Data
    useEffect(() => void (async () => {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=${APPID}`);

        const data = await response.json();

        setApiResponse(data);
    })(), [location]);

    return apiResponse;
}

/** Type guard for the Weather data type */
export function isError(w: ICurrentWeather | IWeatherError): w is IWeatherError {
    // tslint:disable-next-line: strict-type-predicates
    return (w as IWeatherError).message !== undefined;
}

/** Defines weather for a location */
export interface ICurrentWeather {
    /** City geo location */
    coord: {
        /** City geo location, longitude */
        lon: number;
        /** City geo location, latitude */
        lat: number;
    };
    /** Weather data */
    weather: Array<{
        /** Weather condition id */
        id: number;
        /**  Group of weather parameters (Rain, Snow, Extreme etc.) */
        main: string;
        /** Weather condition within the group. */
        description: string;
        /** Weather icon id */
        icon: string;
    }>,
    /** Main weather information */
    main: {
        /** Temperature. Unit Default: Kelvin, Metric: Celsius, Imperial: Fahrenheit. */
        temp: number;
        /** Temperature. This temperature parameter accounts for the human perception of weather. Unit Default: Kelvin, Metric: Celsius, Imperial: Fahrenheit.  */
        feels_like: number;
        /** Minimum temperature at the moment. This is deviation from current temp that is possible for large cities and megalopolises geographically expanded (use these parameter optionally). Unit Default: Kelvin, Metric: Celsius, Imperial: Fahrenheit. */
        temp_min: number;
        /**  Maximum temperature at the moment. This is deviation from current temp that is possible for large cities and megalopolises geographically expanded (use these parameter optionally). Unit Default: Kelvin, Metric: Celsius, Imperial: Fahrenheit. */
        temp_max: number;
        /** Atmospheric pressure (on the sea level, if there is no sea_level or grnd_level data), hPa */
        pressure: number;
        /** Humidity, % */
        humidity: number;
    };
    /** Visibility, meters */
    visibility: number;
    /** Wind speed and direction */
    wind: {
        /** Wind speed. Unit Default: meter/sec, Metric: meter/sec, Imperial: miles/hour. */
        speed: number;
        /** Wind direction, degrees (meteorological) */
        deg: number;
    };
    /** Snow volume */
    snow?: {
        /** Snow volume for the last 1 hour, mm */
        "1h": number;
        /** Snow volume for the last 3 hours, mm */
        "3h": number;
    };
    /** Rain volume */
    rain?: {
        /** Rain volume for the last 1 hour, mm */
        "1h": number;
        /** Rain volume for the last 3 hours, mm */
        "3h": number;
    };
    /** Cloudiness */
    clouds?: {
        /** Cloudiness, % */
        all: number;
    };
    /** Time of data calculation, unix, UTC  */
    dt: number;
    /** Extra info */
    sys: {
        /** Country code (GB, JP etc.) */
        country: string;
        /** Sunrise time, unix, UTC */
        sunrise: number;
        /** Sunset time, unix, UTC */
        sunset: number;
    };
    timezone: number;
    /** City ID */
    id: number;
    /** City name */
    name: string;
}

/** An error returned by openweather */
export interface IWeatherError {
    /** An error code */
    cod: string;
    /** The error discription */
    message: string;
}