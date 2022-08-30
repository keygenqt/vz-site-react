import React from 'react';
import ReactDOM from 'react-dom/client';
import "./base/localization/Localization";

import './assets/css/base.css';
import './assets/css/home.css';
import './assets/css/blogs.css';
import './assets/css/projects.css';

import App from './App';
import reportWebVitals from './tests/reportWebVitals';

import {BrowserRouter} from "react-router-dom";
import LanguageContextProvider from "./base/contexts/LanguageContext";
import NavigateContextProvider from "./base/contexts/NavigateContext";

const root = ReactDOM.createRoot(document.getElementById('root'));

setTimeout(function () {
    root.render(
        <React.StrictMode>
            <BrowserRouter>
                <NavigateContextProvider>
                    <LanguageContextProvider>
                        <App/>
                    </LanguageContextProvider>
                </NavigateContextProvider>
            </BrowserRouter>
        </React.StrictMode>
    );
}, 200);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
