import React from 'react';
import { createRoot } from 'react-dom/client';

import App from './App';

// JSX: HTML dentro do Javascipt (Javascript XML)

const container = document.getElementById('app');
const root = createRoot(container);

root.render(<App tab="home"/>);