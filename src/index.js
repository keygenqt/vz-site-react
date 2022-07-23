import React from 'react';
import ReactDOM from 'react-dom/client';
import "./localization/Localization";

import './static/css/base.css';
import './static/css/base-media.css';
import './static/css/about.css';
import './static/css/about-media.css';
import './static/css/blog.css';
import './static/css/blog-media.css';
import './static/css/utils.css';
import './static/css/utils-media.css';
import './static/css/projects.css';
import './static/css/projects-media.css';
import './static/css/common.css';
import './static/css/common-media.css';

import App from './features/App';
import reportWebVitals from './tests/reportWebVitals';

import {BrowserRouter,} from "react-router-dom";
import RouteContextProvider from "./base/route/RouteContext";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <RouteContextProvider>
                <App/>
            </RouteContextProvider>
        </BrowserRouter>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
