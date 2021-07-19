import React from 'react';
import ReactDOM from 'react-dom';
// 方法三
import {BrowserRouter} from 'react-router-dom';
import './index.css';
import App from './App.jsx';

ReactDOM.render(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
  document.getElementById('root')
);

