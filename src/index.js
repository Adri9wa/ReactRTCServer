import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
require('dotenv').config(); //Configure environment variables

ReactDOM.render(
    <App />,
    document.getElementById('root')
);
