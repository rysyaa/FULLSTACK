import React from 'react';
import ReactDOM from 'react-dom/client';
import "./index.css"
import App from './App';
import PeopleContextProvider from './context/PeopleContextProvider';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <PeopleContextProvider>
            <App />
        </PeopleContextProvider>
    </BrowserRouter>
);

