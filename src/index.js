import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
export { default as HomePage } from './Screens/HomePage';
export { default as Breed } from './Screens/Breed';
export { default as ContactUs } from './Screens/ContactUs';
export { default as Gallery } from './Screens/Gallery';
export { default as ParentDogs } from './Screens/ParentDogs';
export { default as Puppies } from './Screens/Puppies';
export { default as Resources } from './Screens/Resources';
export { default as News } from './Screens/News';


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
