import React, { useEffect, useState } from "react";
import GlobalStyle from "./styles/global";
import { MainView } from "./styles/components/MainView";

export default function App() {
  const APIURL = "https://api.openweathermap.org/data/2.5/weather?q=wellesley&APPID=3641e4dc0ad8580be2a1f8a82fa268a2"
  const [apirespnse, setapiresponse] = useState()
  useEffect(() => {
    fetch(APIURL).then(r => {
      r.text().then(setapiresponse)
    })
  }, [])


  return (
    <>
      <GlobalStyle />
      <MainView>
        <pre>
          {apirespnse}
        </pre>
      </MainView>
    </>
  );
}
