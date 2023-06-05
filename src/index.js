import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
import './index.scss';
import App from './App';
import DataProvider from './State/DataProvider';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <DataProvider>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </DataProvider>
  </>

);
