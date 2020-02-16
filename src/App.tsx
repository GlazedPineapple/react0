import React from "react";
import useWeather, { isError } from "./useWeather";
import { kelvinToFahrenheit } from "./util";

/** The main app */
export default function App() {
    const apiresponse = useWeather("wellsley");

    if (apiresponse === undefined) {
        // No data screen
        return (
            <h1>No Data</h1>
        );
    }

    if (isError(apiresponse)) {
        // Error screen
        return (
            <>
                <h1>Error in fetching openweather API: {apiresponse.cod}</h1>
                <pre>{apiresponse.message}</pre>
            </>
        )
    } else {
        // Success screen
        return (
            <>
                <div>
                    <div>Description: {apiresponse.weather[0].description}</div>
                    <div>Name: {apiresponse.weather[0].main}</div>
                    <div>Temp: {kelvinToFahrenheit(apiresponse.main.temp)}&deg;F</div>
                    <div>Feels Like: {kelvinToFahrenheit(apiresponse.main.feels_like)}&deg;F</div>
                    <div>Location: {apiresponse.name}</div>
                    <img src={`http://openweathermap.org/img/w/${apiresponse.weather[0].icon}.png`}/>
                </div>
                <pre>{JSON.stringify(apiresponse, undefined, 4)}</pre>
            </>
        );
    }
}
