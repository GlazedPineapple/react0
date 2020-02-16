import React from "react";
import useWeather, { isError } from "./useWeather";
import { roundPlaces, metersPerSecondToMilesPerHour, kelvinToFahrenheit } from "./util";
import Helmet from "react-helmet";

export default function Display({ location }: { location: string }) {
    const apiresponse = useWeather(location);

    if (apiresponse === undefined) {
        // No data screen
        return (
            <>
                <Helmet>
                    <title>Loading...</title>
                </Helmet>
                <h1>Loading...</h1>
            </>
        );
    }

    if (isError(apiresponse)) {
        // Error screen
        return (
            <>
                <Helmet>
                    <title>Error - {apiresponse.cod}</title>
                </Helmet>
                <h1>Error in fetching openweather API: {apiresponse.cod}</h1>
                <pre>{apiresponse.message}</pre>
            </>
        )
    } else {
        // Success screen
        return (
            <>
                <Helmet>
                    <title>{apiresponse.name}'s Weather</title>
                    <link rel="icon" href={`http://openweathermap.org/img/wn/${apiresponse.weather[0].icon}@2x.png`}/>
                </Helmet>
                <div>
                    <div>Weather: {apiresponse.weather[0].main}</div>
                    <div>Description: {apiresponse.weather[0].description}</div>
                    <div>Humidity: {apiresponse.main.humidity}%</div>
                    <div>Wind Speed: {roundPlaces(metersPerSecondToMilesPerHour(apiresponse.wind.speed), 2)} miles/hour</div>
                    <div>Temp: {roundPlaces(kelvinToFahrenheit(apiresponse.main.temp), 2)}&deg;F</div>
                    <div>Feels Like: {roundPlaces(kelvinToFahrenheit(apiresponse.main.feels_like), 2)}&deg;F</div>
                    <div>Min Temp: {roundPlaces(kelvinToFahrenheit(apiresponse.main.temp_min), 2)}&deg;F</div>
                    <div>Max Temp: {roundPlaces(kelvinToFahrenheit(apiresponse.main.temp_max), 2)}&deg;F</div>
                    <div>Location: {apiresponse.name}</div>
                    <img src={`http://openweathermap.org/img/wn/${apiresponse.weather[0].icon}@2x.png`} alt={apiresponse.weather[0].description}/>
                </div>
                {/* <pre>{JSON.stringify(apiresponse, undefined, 4)}</pre> */}
            </>
        );
    }
}