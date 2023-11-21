import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, HashRouter , Router } from "react-router-dom";

import "./css/style-config.css"

import "./css/includes/nav.css"


import "./css/default.css"
import "./css/main.css"
import Tabs from './router/Tabs';

function init() {
    const appContainer = document.createElement('div');
    document.body.appendChild(appContainer);
    if (!appContainer) {
        throw new Error('Can not find AppContainer');
    }

    const root = createRoot(appContainer);
    root.render(<BrowserRouter><Tabs></Tabs></BrowserRouter>);
}

init();