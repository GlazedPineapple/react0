import React from "react";
import useWeather, { isError } from "./useWeather";

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
                <pre>{JSON.stringify(apiresponse, undefined, 4)}</pre>
            </>
        );
    }
}
