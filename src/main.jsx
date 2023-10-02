import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from './components/App';
import Personal from './components/Personal';
import Education from './components/Education';
import Experience from './components/Experience';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <Personal />
    <Education />
    <Experience />
  </React.StrictMode>
);
