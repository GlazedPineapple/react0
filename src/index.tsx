import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import GlobalStyle from "./styles/global";
import { MainView } from "./styles/components/MainView";

ReactDOM.render(
    (
        <>
            <GlobalStyle />
            <MainView>
                <App />
            </MainView>
        </>
    ),
    document.getElementById("root")
);
