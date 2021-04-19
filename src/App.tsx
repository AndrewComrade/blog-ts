import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Navigation from '~/components/Navigation';
import 'normalize.css';
import AppRouter from '~/components/AppRouter';

function App() {
    return (
        <BrowserRouter>
            <Navigation />
            <AppRouter />
        </BrowserRouter>
    );
}

export default App;
