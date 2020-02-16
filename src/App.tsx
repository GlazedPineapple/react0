import React, { useState } from "react";
import Display from "./Display";

/** The main app */
export default function App() {
    const [location, setLocation] = useState("");
    const [currentLocation, setCurrentLocation] = useState("");

    return (
        <div>
            <div>
                <input placeholder="Location" value={location} onChange={(event) => setLocation(event.target.value)} onKeyPress={({key}) => { if (key === "Enter") setCurrentLocation(location)}}/>
                <button onClick={() => setCurrentLocation(location)}>Search</button>
            </div>
            <Display location={currentLocation}/>
        </div>
    )
}
