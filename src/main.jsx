import React from 'react';
import ReactDOM from 'react-dom/client';
import '@fontsource/roboto';
import './styles/index.css';
import App from './components/App';
import Personal from './components/Personal';
import Education from './components/Education';
import Experience from './components/Experience';
import CV from './components/CV';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Personal /> */}
    {/* <Education /> */}
    {/* <Experience /> */}
    <CV />
  </React.StrictMode>
);
