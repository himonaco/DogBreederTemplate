import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
export { default as HomePage } from './pages/HomePage';
export { default as Breed } from './pages/Breed';
export { default as ContactUs } from './pages/ContactUs';
export { default as Gallery } from './pages/Gallery';
export { default as ParentDogs } from './pages/ParentDogs';
export { default as Puppies } from './pages/Puppies';
export { default as Resources } from './pages/Resources';
export { default as News } from './pages/News';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
